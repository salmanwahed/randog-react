import axios from "axios";

const URL = "https://dog.ceo/api/";

export const randomDogApi = async () => {
  try {
    const url = URL + "breeds/image/random";
    console.log(url);
    return await axios.get(url);
  } catch (error) {
    console.log(error);
  }
};

export const breedListApi = async () => {
  try {
    const url = URL + "breeds/list/all";
    console.log(`Breed list api: ${url}`);
    return await axios.get(url);
  } catch (error) {
    console.log(error);
  }
};
