import axios from "axios";

export const SearchbyWord = async (keyWord, done) => {
  try {
    const res = await axios({
      method: "GET",
      url: `https://edicatebackend.herokuapp.com/search?keyword=${keyWord}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
      },
    });
    done(res);
  } catch (error) {
    console.log(error);
  }
};

export const SearchbyGroup = async (keyWord, done) => {
  try {
    const res = await axios({
      method: "GET",
      url: `https://edicatebackend.herokuapp.com/searchbygroup?keyword=${keyWord}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
      },
    });
    done(res);
  } catch (error) {
    console.log(error);
  }
};

export const RateSubjectGroup = async (
  keyWord,
  semester,
  academicYear,
  done
) => {
  try {
    const res = await axios({
      method: "GET",
      url: `https://edicatebackend.herokuapp.com/ratedsubject?keyword=${keyWord}&semester=${semester}&academicyear=${academicYear}`,
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
      url: "https://edicatebackend.herokuapp.com/login",
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
      url: "https://edicatebackend.herokuapp.com/detail",
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
      url: "https://edicatebackend.herokuapp.com/image",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
      },
    });
    done(res);
  } catch (error) {
    console.log(error);
  }
};
