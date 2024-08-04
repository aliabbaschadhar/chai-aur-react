import conf from "../conf/conf";
import { Client, Databases, ID, Query, Storage } from "appwrite";

export class Service {
	client = new Client();
	databases;
	bucket;

	constructor() {
		this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
		this.databases = new Databases(this.client);
		this.bucket = new Storage(this.client);
	}

	//CreatePost

	async createPost({ title, slug, content, featuredImage, status, userId }) {
		try {
			return await this.databases.createDocument(
				conf.datebaseId,
				conf.colletionId,
				slug,
				{
					title,
					content,
					featuredImage,
					status,
					userId,
				}
			);
		} catch (error) {
			console.log("Appwrite service :: createPost :: error ", error);
		}
	}
	//UpdatePost
	async updatePost(slug, { title, content, featuredImage, status }) {
		try {
			return await this.databases.updateDocument(
				conf.datebaseId,
				conf.colletionId,
				slug,
				{
					title,
					content,
					featuredImage,
					status,
				}
			);
		} catch (error) {
			console.log("Appwrite service :: updatePost :: error ", error);
		}
	}
	//DeletePost
	async deletePost(slug) {
		try {
			await this.databases.deleteDocument(
				conf.datebaseId,
				conf.colletionId,
				slug
			);
			return true;
		} catch (error) {
			console.log("Appwrite service :: deletePost :: error ", error);
			return false;
		}
	}

	//getPost

	async getPost(slug) {
		try {
			return await this.databases.getDocument(
				conf.datebaseId,
				conf.colletionId,
				slug
			);
		} catch (error) {
			console.log("Appwrite service :: getPost :: error ", error);
			return false;
		}
	}

	//List all posts
	async getPosts(slug, queries = [Query.equal("status", "active")]) {
		try {
			return await this.databases.listDocuments(
				conf.datebaseId,
				conf.colletionId,
				slug,
				queries
			);
		} catch (error) {
			console.log("Appwrite service :: getPosts :: error ", error);
		}
	}

	//file upload services

	async uploadFile(file) {
		try {
			return await this.bucket.createFile(
				conf.bucketId,
				ID.unique(),
				file
			);
		} catch (error) {
			console.log("Appwrite service :: Upload File :: error ", error);
		}
	}

	//Delete File
	async deleteFile(fileId) {
		try {
			return await this.bucket.deleteFile(conf.bucketId, fileId);
		} catch (error) {
			console.log("Appwrite service :: Delete File :: error ", error);
			return false;
		}
	}
	//File preview
	async filePreview(fileId) {
		return await this.bucket.getFilePreview(conf.bucketId, fileId);
	}
}

const service = new Service();

export default service;
