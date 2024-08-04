import conf from "../conf";
import { Client, Account, ID } from "appwrite";

// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('<PROJECT_ID>');               // Your project ID

// const account = new Account(client);

// const promise = account.create('[USER_ID]', 'email@example.com', '');

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });

//Writing this as it is not a good approach if we write it as it is then we always have to give account.create everywhere then our UI and business Logic mixes

//Production grade method

export class AuthService {
	// properties of class
	client = new Client(); //created client
	account; //account variable

	//?Why we didn't created account here using new Account()?

	//Because before making account we have to give setEndpoint(), setProject() which we haven't given .

	//? But we don't we just give setEndpoint and setProject here?

	// Because if we give it here then we it will be given in default to all class objects which will be wastage of resources

	//todo : Now we want whenever class's object created client's endpoint and projectId is set means automatically executed

	constructor() {
		this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
		this.account = new Account(this.client);
	}

	//todo: Now we need to make an account for that using appwrite services

	//     const promise = account.create('[USER_ID]', 'email@example.com', '');

	// promise.then(function (response) {
	//     console.log(response); // Success
	// }, function (error) {
	//     console.log(error); // Failure
	// });

	//But we can't use it in this way because what if we needed to change our BAAS like from appwrite to supaBase then we will need to write our whole service again and again

	//To prevent that we will create a method like a wraper which will create account using appwrite services but we will give input to our created method .

	//By using that thing we will whenever we needed to change our dependencies from one BAAS to another we will just change the under the hood things of wraper

	//signUp

	async createAccount({ email, password, name }) {
		try {
			const userAccount = await this.account.create(
				ID.unique(),
				email,
				password,
				name
			);
			if (userAccount) {
				//Call another method
				return this.login(email, password);
			} else {
				return userAccount;
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

	//Check Account is LogedIn or not

	async getCurrentUser() {
		try {
			return await this.account.get();
		} catch (error) {
			console.log("Appwrite service :: getCurrentUser :: error", error);
		}
		return null;
	}
	//Logout
	async logout() {
		try {
			return await this.account.deleteSessions();
		} catch (error) {
			console.log("Appwrite service :: logout :: error", error);
		}
	}
}

const authService = new AuthService();

export default authService;

// export defautl AuthService; // If we export the class then we have to make an object again and again so to prevent this we will create an object and export it so that we only import the object and can use the methods.

//This means that whoever wants to use the methods of this class must have to made an to object ot this class
