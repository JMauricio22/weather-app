import axiosInstance from "./config";

export const getLocation = async (woeid) => {
  try {
    const { data } = await axiosInstance.get(`/location/${woeid}`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
