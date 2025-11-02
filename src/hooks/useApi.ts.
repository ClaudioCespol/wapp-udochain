// [F12] frontend/src/hooks/useApi.ts — DL1111700
import axios from "axios";

const API_BASE = import.meta.env.VITE_WAPI_URL || "https://wapi.udochain.com/api";

/** Axios wrapper for API requests */
export default function useApi() {
  const req = async (url, method = "GET", data = null) => {
    const config = {
      method,
      url: `${API_BASE}${url}`,
      data
    };
    const res = await axios(config);
    return res.data;
  };

  const uploadForm = async (url, formData) => {
    const res = await axios.post(`${API_BASE}${url}`, formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    return res.data;
  };

  return { req, uploadForm };
}
