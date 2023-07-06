import React, { useEffect } from 'react'

import axios from 'axios'

const GoogleLogin = () => <div id="signInDiv"></div>

const useGoogleLogin = () => {
  const handleCallbackResponse = (res) => {
    const fetchData = async () => {
      try {
        const token = {
          googleToken: res.credential,
        }

        const response = await axios.post('http://localhost:8080/api/v1/auth/google', token)
        console.log('User created/logged in succesfully (Google)', response)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    })

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'white',
      text: 'signin',
      size: 'large',
      width: '170px',
    })
  }, [])

  return { GoogleLogin }
}

export default useGoogleLogin
