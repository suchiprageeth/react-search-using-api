import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID vJg-PmnqzrbFcHkeIETcNYMz7FYhe0Llj3SvMgp7mAo",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
