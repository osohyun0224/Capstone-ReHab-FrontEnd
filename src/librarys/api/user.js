import { ROLE_LIST, ROLE_TYPE } from "../type.js";
import { SPRING_URL, getSpringAxios } from "./axios";

// get ~~
// create ~~
// modify ~~
// delete ~~

export async function getUserToken(mid, password) {
  const axios = getSpringAxios();

  const body = {
    mid,
    password,
  };

  const response = await axios.post("/login", body);

  const data = {
    accessToken: response.data.accessToken,
    refreshToken: response.data.refreshToken,
  };

  return data;
}

export async function getRefreshToken(accessToken, refreshToken) {
  const axios = getSpringAxios();

  const body = {
    accessToken,
    refreshToken,
  };

  const response = await axios.post("/refreshToken", body);

  const data = {
    accessToken: response.data.accessToken,
    refreshToken: response.data.refreshToken,
  };

  return data;
}

export async function createAccount(req) {
  const axios = getSpringAxios();

  const body = {
    mid: req.id,
    name: req.name,
    password: req.password,
    hospital: req.hospital,
    department: req.department,
    email: req.email,
    phone: req.phone,
    staffRole: req.role,
    // fileName: req.image || "",
  };

  const response = await axios.post("/join", body);

  const data = {
    status: true,
    message: response.data,
  };

  return data;
}

export async function getUserInfo(token, id) {
  const axios = getSpringAxios(token);

  const response = await axios.get("/auth/user/info/" + id);

  const data = {
    id: response.data.mid,
    name: response.data.name,
    location: response.data.hospital,
    department: response.data.department,
    email: response.data.email,
    phone: response.data.phone,
    role: response.data.staffRole,
    image: response.data.fileName,
  };

  data.role = data.role && data.role.slice(1, -1);
  data.role = ROLE_TYPE[data.role || "VISITOR"];
  data.image = SPRING_URL + "view/" + data.image;

  return data;
}

export async function modifyPassword(token, mid, currentPassword, newPassword) {
  const axios = getSpringAxios(token);

  const body = {
    mid,
    currentPassword,
    newPassword,
  };

  const response = await axios.post("/auth/change-password", body);

  const data = {
    status: true,
    message: response.data,
  };

  return data;
}

export async function getTherapistList(token) {
  const axios = getSpringAxios(token);

  const response = await axios.get("/auth/getTherapistList");

  const data = response.data.map((item) => ({
    mid: item.mid,
    name: item.name,
    location: item.location,
    department: item.department,
  }));

  return data;
}