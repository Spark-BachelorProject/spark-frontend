import React, { useEffect } from 'react'

const GoogleLogin = () => <div id="signInDiv"></div>

const useGoogleLogin = () => {
  const handleCallbackResponse = (res) => {
    console.log('encoded JWT ID token: ' + res.credential)
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    })

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'filled_black',
      text: 'signin',
      size: 'large',
      width: '170px',
    })
  }, [])

  return { GoogleLogin }
}

export default useGoogleLogin
