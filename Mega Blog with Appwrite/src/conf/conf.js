const conf = {
	appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
	databaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
	collectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
	projectId: String(import.meta.env.VITE_PROJECT_ID),
	bucketId: String(import.meta.env.VITE_BUCKET_ID),
};

export default conf;
