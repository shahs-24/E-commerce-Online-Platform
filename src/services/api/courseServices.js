import api from "./axios";

export const fetchAllCourses = async () => {
  let { data } = await api.get("/course/get-courses");
  return data;
};

export const getCourseById = async (id) => {
  const { data } = await api.get(`/course/get-course/${id}`);
  return data;
};

export const createCourse = async (payload) => {
  let { data } = await api.post("/course/create-course", payload);
  return data;
};
export const fetchAllCoursesForAdmin = async () => {
  let { data } = await api.get("/course/get-all-course-dashboard");
  return data;
};



export const updateCourse = async (id, payload) => {
  const { data } = await api.put(`/course/edit-course/${id}`, payload);
  return data;
};

export const deleteCourse = async (id) => {
  const { data } = await api.delete(`/course/delete-course/${id}`);
  return data;
};

export const getCourseCurriculum = async (id) => {
  const { data } = await api.get(`/lms/courses/${id}/curriculum`);
  return data;
};

export const fetchAllLmsCourses = async () => {
  let { data } = await api.get("/lms/courses");
  return data;
};