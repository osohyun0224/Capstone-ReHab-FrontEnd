import { getSpringAxios } from "./axios";

export async function registerChart(data, token) {
  const axios = getSpringAxios(token);

  const response = await axios.post("/chart/auth/register", data);
  return response.data;
}

export async function getTherapistList(token) {
  const axios = getSpringAxios(token);

  const response = await axios.get("/auth/getTherapistList");
  return response.data;
}

export async function getChart(token, id) {
  const axios = getSpringAxios(token);

  // TODO: 명세 정확하게 알아올것
  const response = await axios.get("/chart/" + id);

  const data = {
    // TODO: 명세 정확하게 알아올것
    ...response.data,
  };

  return data;
}

export async function getChartList(token, id) {
  const axios = getSpringAxios(token);

  const response = await axios.get("/chart/auth/list/" + id);

  const data = response.data.map((item) => ({
    // TODO: 명세 정확하게 알아올것
    ...item,
  }));

  return data;
}

export async function getChartRecord(token, id) {
  const axios = getSpringAxios(token);

  const response = await axios.get("/record/" + id);

  const data = {
    // TODO: 명세 정확하게 알아올것
    ...response.data,
  };

  return data;
}

export async function createChart(req) {
  const axios = getSpringAxios(req.token);

  const body = {
    cd: req.code,
    patientName: req.name,
    phone: req.phone,
    sex: req.gender,
    birth: req.birthday,
    doctor_id: req.doctor,
    therapist_id: req.therapist,
    schedule: req.nextSchedule,
    treatmentRecord: req.treatmentRecord,
    exerciseRequest: req.exerciseRequest,
  };

  const response = await axios.post("/record/register/" + req.id, body);

  // response에 id 받아와야 함

  const data = {
    status: true,
    message: response.data,
  };

  return data;
}

//진료 기록 추가
export async function createRecord(req) {
  const axios = getSpringAxios(req.token);

  const body = {
    schedule: req.nextSchedule,
    treatmentRecord: req.treatmentRecord,
    exerciseRequest: req.exerciseRequest,
  };

  const response = await axios.post("/record/register/" + req.id, body);

  const data = {
    status: true,
    message: response.data,
  };

  return data;
}


export async function getChartOne(chartId, token) {
  const axios = getSpringAxios(token); 

  try {
    const response = await axios.get(`/chart/${chartId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching chart data:", error);
    throw error;
  }
}