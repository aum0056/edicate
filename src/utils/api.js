import jwt_decode from "jwt-decode";

export const DecodeExpire = () => {
  // const token =
  //   localStorage.getItem("x-access-token") !== null &&
  //   jwt_decode(localStorage.getItem("x-access-token"));
  // const checkDate = token.exp >= Date.now() / 1000
  // const expireToken = token.exp ? checkDate : true;
  // return expireToken;

  if (localStorage.getItem("x-access-token") !== null) {
    const token = jwt_decode(localStorage.getItem("x-access-token"));
    const expireToken = token.exp >= Date.now() / 1000;
    console.log(token.exp, Date.now(), expireToken);
    return expireToken;
  } else {
    return true;
  }
};
