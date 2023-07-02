import axios from "./axios";

const FilterStoresAPI = (pitchType, start, end, date) => {
  return axios.get("/pitch/store-ordering", {
    pitchType,
    start,
    end,
    date,
  });
};

export { FilterStoresAPI };
