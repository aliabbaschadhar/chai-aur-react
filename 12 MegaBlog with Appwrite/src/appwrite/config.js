import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
	client = new Client();
	databases;
	bucket;
	constructor() {
		this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
		this.databases = new Databases(this.client);
		this.bucket = new Storage(this.client);
	}
	//create Post
	async createPost({ title, slug, content, featuredImage, status, userId }) {
		try {
			return await this.databases.createDocument(
				conf.databaseId,
				conf.collectionId,
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
			console.log("Appwrite service :: createPost :: error", error);
		}
	}
	//updatePost

	async updatePost(slug, { title, content, featuredImage, status }) {
		try {
			return await this.databases.updateDocument(
				conf.databaseId,
				conf.collectionId,
				slug,
				{ title, content, featuredImage, status }
			);
		} catch (error) {
			console.log("Appwrite service :: updatePost :: error", error);
		}
	}
	// Delete Post
	async deletePost(slug) {
		try {
			await this.databases.deleteDocument(
				conf.databaseId,
				conf.collectionId,
				slug
			);
			return true;
		} catch (error) {
			console.log("Appwrite service :: deletePost :: error", error);
			return false;
		}
	}
	//If we need single document
	async getPost(slug) {
		try {
			return await this.databases.getDocument(
				conf.databaseId,
				conf.collectionId,
				slug
			);
		} catch (error) {
			console.log("Appwrite service :: getPost :: error", error);
			return false;
		}
	}
	//If need all documents
	async getPosts(queries = [Query.equal("status", "active")]) {
		try {
			return await this.databases.listDocuments(
				conf.databaseId,
				conf.collectionId,
				queries
			);
		} catch (error) {
			console.log("Appwriter service :: getPosts  :: error", error);
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
			console.log("Appwriter service :: uploadFile  :: error", error);
		}
	}

	//Delete File
	async deleteFile(fileId) {
		try {
			return await this.bucket.deleteFile(conf.bucketId, fileId);
		} catch (error) {
			console.log("Appwriter service :: deleteFile  :: error", error);
			return false;
		}
	}

	//File Preview

	getFilePreview(fileId) {
		return this.bucket.getFilePreview(conf.bucketId, fileId);
	}
}

const service = new Service();

export default service;
