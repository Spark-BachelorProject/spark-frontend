export const baseQueryConfig = {
  baseUrl: `${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_API_URL}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
}
