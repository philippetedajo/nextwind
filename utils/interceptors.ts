import axios from "axios";

axios.create();

axios.interceptors.response.use((response) => {
  console.log(response);
  return response;
});

export default axios;
