import jwt_decode from "jwt-decode";

export const DecodeExpire = () => {
  const token =
    localStorage.getItem("x-access-token") !== null &&
    jwt_decode(localStorage.getItem("x-access-token"));
  const checkDate = token.exp >= Date.now() / 1000
  const expireToken = token.exp ? checkDate : true;
  return expireToken;
};
