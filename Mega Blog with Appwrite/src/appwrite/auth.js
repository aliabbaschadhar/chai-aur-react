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
			if (userAccount) {
				//call another method
				this.login(email, password);
			} else {
				userAccount;
			}
		} catch (error) {
			console.log("Appwrite service :: createAccount :: error : ", error);
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
		}
		return null;
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

const authservice = new AuthService();

export default authservice;

// export default AuthService;
