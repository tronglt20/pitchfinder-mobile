import axios from "./axios";

const SignupAPI = (email, password, passwordConfirm) => {
  return axios.post("/iam/authentication/sign-up", {
    email,
    password,
    passwordConfirm,
    isCustomer: true,
  });
};

const SigninAPI = (username, password) => {
  return axios.post("/iam/authentication", { username, password });
};

export { SigninAPI, SignupAPI };
