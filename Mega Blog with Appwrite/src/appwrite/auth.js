import conf from "../conf/conf";
import { ID, Client, Account } from "appwrite";

export class AuthService {
	client = new Client();
	account;

	constructor() {
		this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
		this.account = new Account(this.client);
	}

	//Create Account

	async createAccount({ email, password, name }) {
		try {
			const userAccount = await this.account.create(
				ID.unique(),
				email,
				password,
				name
			);
			if (!userAccount) throw new Error("Failed to create account");
			this.login(email, password);
			return true; //indicate sucess
		} catch (error) {
			console.log("Appwrite service :: createAccount :: error : ", error);
			return false; // indicated Failure
		}
	}
	//Login
	async login({ email, password }) {
		try {
			return await this.account.createEmailPasswordSession(
				email,
				password
			);
		} catch (error) {
			console.log("Appwrite service :: login :: error : ", error);
			return false;
		}
	}
	//Get current user

	async getCurrentUser() {
		try {
			return await this.account.get();
		} catch (error) {
			console.log(
				"Appwrite service :: getCurrentUser :: error : ",
				error
			);
			return null;
		}
	}

	//Logout
	async logout() {
		try {
			return await this.account.deleteSessions();
		} catch (error) {
			console.log("Appwrite service :: logout :: error : ", error);
		}
	}
}

const authService = new AuthService();

export default authService;

// export default AuthService;
