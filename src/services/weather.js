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

export const getWoeid = async ({ latitude, longitude }) => {
  try {
    const { data } = await axiosInstance.get(
      `/location/search/?lattlong=${latitude},${longitude}`
    );
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
