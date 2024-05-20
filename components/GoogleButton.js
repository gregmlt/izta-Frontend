import Link from 'next/link';
import React from 'react'

const GoogleOAuthButton = () => {

    const googleClientId = '24258699258-dtqkmonsm6v4id8jmt5pap5g1kbg17di.apps.googleusercontent.com'; 
    const redirectUri = 'http://localhost:3000/google'; 
    const responseType = 'code'; 
    const scope = 'email profile openid'; 
    const googleOAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=${responseType}&scope=${encodeURIComponent(scope)}`;

    const handleGoogleSignIn = () => {
        window.location.href = googleOAuthUrl;
    }

    return (
      <button onClick={handleGoogleSignIn}
    className="flex items-center justify-center px-4 py-3 bg-white-500 text-black border border-gray-400 rounded-md hover:bg-white w-[300px]"
    >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5 mr-2" > <path fill="#4285F4" d="M24 9.5c3.87 0 7.04 1.44 9.29 3.76l6.92-6.92C35.82 2.59 30.28 0 24 0 14.91 0 7.43 5.64 4.26 13.74l7.94 6.13C13.73 14.1 18.49 9.5 24 9.5z" /> <path fill="#34A853" d="M46.08 24.51c0-1.62-.14-3.17-.4-4.67H24v9.5h12.4c-.54 2.92-2.11 5.39-4.48 7.05l7.03 5.42C44.35 37.18 46.08 31.33 46.08 24.51z" /> <path fill="#FBBC05" d="M12.2 28.87a9.58 9.58 0 01-.52-3.37c0-1.17.2-2.31.52-3.37L4.26 13.74C2.49 16.96 1.5 20.36 1.5 24c0 3.64.99 7.04 2.76 10.26l7.94-6.13z" /> <path fill="#EA4335" d="M24 48c6.28 0 11.55-2.09 15.4-5.69l-7.03-5.42c-2.02 1.36-4.56 2.17-7.37 2.17-5.51 0-10.27-3.6-11.93-8.53l-7.94 6.13C7.43 42.36 14.91 48 24 48z" /> <path fill="none" d="M0 0h48v48H0z" /> </svg>
      Se connecter avec Google
    </button>
      );
  };
  
  export default GoogleOAuthButton;
  

