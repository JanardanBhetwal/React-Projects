import axios from "axios";

const DataSearch = async () => {
  const response = await axios.get(
    `https://opentdb.com/api.php?amount=1&&type=multiple`
  );
  const data = response.data.results;
  return data;
};

export default DataSearch;
