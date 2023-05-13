import React, { useEffect } from 'react'

const GoogleLogin = () => <div id="signInDiv"></div>

const useGoogleLogin = () => {
  const handleCallbackResponse = (res) => {
    console.log('encoded JWT ID token: ' + res.credential)
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: '1018465811730-prs9cp8c8ob35hrcagvqt6qs8bg44g1p.apps.googleusercontent.com',
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
