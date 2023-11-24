import instance from "./axios";
import axios from "axios";

const SignupAPI = (email, password, passwordConfirm) => {
	const formData = new FormData();
	formData.append("email", email);
	formData.append("password", password);
	formData.append("passwordConfirm", passwordConfirm);
	formData.append("isCustomer", true);

	return axios.post("/iam/authentication/sign-up", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
};

const SigninAPI = (username, password) => {
	return instance.post("/iam/authentication", { username, password });
};

const CurrentUserAPI = () => {
	return instance.get("/iam/authentication/current-user");
};

export { SigninAPI, SignupAPI, CurrentUserAPI };
