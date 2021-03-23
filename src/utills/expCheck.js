import jwt_decode from "jwt-decode";

export const DecodeExpire = () => {
  if (localStorage.getItem("x-access-token") !== null) {
    const token = jwt_decode(localStorage.getItem("x-access-token"));
    const expireToken = token.exp >= Date.now() / 1000;
    return expireToken;
  }
};
