import axios from "axios";

export const SearchbyWord = async (keyWord, done) => {
  try {
    const res = await axios({
      method: "GET",
      url: `http://localhost:8000/search?keyword=${keyWord}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
      },
    });
    done(res);
  } catch (error) {
    console.log(error.data);
  }
};

export const SearchbyGroup = async (keyWord, done) => {
  try {
    const res = await axios({
      method: "GET",
      url: `http://localhost:8000/searchbygroup?keyword=${keyWord}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
      },
    });
    done(res);
  } catch (error) {
    console.log(error);
  }
};

export const GetLogin = async (username, password, done, doneErr) => {
  try {
    const res = await axios({
      method: "POST",
      headers: { "content-type": "application/json" },
      url: "http://localhost:8000/login",
      data: {
        username: username,
        password: password,
      },
    });
    done(res);
  } catch (error) {
    doneErr(error);
  }
};

export const GetDetailGened = async (done) => {
  try {
    const detailBigData = await axios({
      method: "GET",
      url: "http://localhost:8000/detail",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
      },
    });
    done(detailBigData);
  } catch (error) {
    console.log(error);
  }
};

export const GetImage = async (done) => {
  try {
    const res = await axios({
      method: "GET",
      url: "http://localhost:8000/image",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
      },
    });
    done(res);
  } catch (error) {
    console.log(error);
  }
};
