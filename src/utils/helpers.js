import Swal from 'sweetalert2'
import axios from "axios";

export const Toast = Swal.mixin({
  toast: true,
  position: 'center',
  showConfirmButton: false,
  timer: 3000
})

const BASE_URL = "https://api.themoviedb.org/3/";
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});