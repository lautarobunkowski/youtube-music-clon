// axiosConfig.js

import axios from "axios";

const client_id = import.meta.env.VITE_CLIENT_ID;
const secret_id = import.meta.env.VITE_CLIENT_SECRET;

const obtenerNuevoToken = async () => {
  const refresh_token = localStorage.getItem("refresh_token");

  if (refresh_token === null)
    throw new Error("no existe refresh token, inicia sesion");

  const params = new URLSearchParams();
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", refresh_token);

  const scope = [
    "user-read-email",
    "user-read-private",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-position",
    "user-top-read",
  ];

  const { data } = await axios.post(
    `https://accounts.spotify.com/api/token?scope=${scope.join(" ")}`,
    params,
    {
      headers: {
        Authorization: `Basic ${btoa(`${client_id}:${secret_id}`)}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  localStorage.setItem("access_token", data.access_token);
  // localStorage.setItem("refresh_token", data.refreshToken);
  return data.access_token;
};

// Configuración de interceptores en Axios
axios.interceptors.response.use(
  (response) => {
    // Si la respuesta es exitosa, simplemente la retornamos
    return response;
  },
  async (error) => {
    // Si hay un error en la respuesta
    if (error.response.status === 401) {
      // Comprobamos si el error es por token expirado
      try {
        // Intentamos obtener un nuevo token
        const nuevoToken = await obtenerNuevoToken();
        // Actualizamos el token en el header de la petición original
        error.config.headers["Authorization"] = `Bearer ${nuevoToken}`;
        // Volvemos a enviar la petición original con el nuevo token
        return axios.request(error.config);
      } catch (error) {
        // Si no se puede obtener un nuevo token, redirigir a la página de inicio de sesión o realizar otras acciones necesarias
        // Puedes manejar este caso de acuerdo a tus requerimientos
        // Por ejemplo:
        // window.location.href = "/"; // Redirigir a la página de inicio de sesión
        return Promise.reject(error);
      }
    }
    if (error.response.status === 400) {
      // window.location.href = "/"; // Redirigir a la página de inicio de sesión
    }
    return Promise.reject(error);
  }
);

// Exportamos axios configurado
export default axios;
