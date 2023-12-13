export const baseQueryConfig = (isAuth = false) => ({
  baseUrl: `${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_API_URL}`,
  headers: {
    Authorization: !isAuth && `Bearer ${localStorage.getItem('token')}`,
  },
})
