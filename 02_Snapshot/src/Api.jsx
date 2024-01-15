import axios from "axios";

const ImageSearch = async (value) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    headers: {
      Authorization: "Client-ID Cwf8Vme5HGByB6ddbVbZdb8b0jM0As87XF2s6bbPqaQ",
    },
    params: { query: value },
  });
  const data = response.data;
  return data.results;
};

export default ImageSearch;
