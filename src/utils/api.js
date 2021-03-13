import jwt_decode from "jwt-decode";

export const DecodeExpire = () => {
  const token =
    localStorage.getItem("x-access-token") !== null &&
    jwt_decode(localStorage.getItem("x-access-token"));
  const expireToken = token.exp ? token.exp >= Date.now() / 1000 : true;
  return expireToken;
};
