const conf = {
	appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
	datebaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
	colletionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
	projectID: String(import.meta.env.ViTE_PROJECT_ID),
};
export default conf;
