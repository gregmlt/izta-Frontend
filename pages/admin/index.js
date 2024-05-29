import React, { useState, useEffect } from 'react'

const adminEmail = "v@g.com";
const adminPassword = "ad";

function index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [usersAlreadyChecked, setUsersAlreadyChecked] = useState([]);

  useEffect(() => {
    // Fetch the list of users from the server
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then((data) => {

        // Update the users state with users that have a non-empty company array
        setUsers(data.users.filter(user => ((user.company.length > 0) && (user.verification === false))))
    })
    .catch(error => console.error('Error fetching users:', error));
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior


     // Check if the entered email and password match the predefined admin credentials
    if (email === adminEmail && password === adminPassword) {
      setIsLoggedIn(true); // Set the login state to true if credentials are correct
      
    } else {
      alert('Email ou mot de passe incorrect.');
      setEmail(""); // Clear the email input
      setPassword(""); // Clear the password input
    }
  };


  

  const handleVerificationChange = (userId, verificationStatus) => {
    fetch(`http://localhost:3000/users/verification/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ verification: verificationStatus })
    })
      .then(response => response.json())
      .then((data) => {
        setUsers(users.map(user => user._id === userId ? { ...user, verification: verificationStatus, company: verificationStatus ? user.company : [] } : user));
      })
      .catch(error => {
        console.error('Error updating verification status:', error);
      });
  };

  
  // logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    {!isLoggedIn ? (
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
          >
            Connexion
          </button>
        </form>
      </div>
    ) : (
        <div className="bg-white p-8 rounded-lg shadow-xl w-[500px]">
  <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Bienvenue Melanie</h2>
  <p className="py-5 underline font-semibold text-center text-gray-700">Personnes en attente de vérification</p>
  <ul className="space-y-4">
            {users.map(user => (
              <li key={user._id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                <div className="flex-1">
                  <p className="block text-lg text-gray-800"><span className='font-bold mb-2'>Nom:</span> {user.firstname} {user.lastname}</p>
                  <p className="text-gray-600 mb-2"><span className='font-bold'>Email:</span> {user.email}</p>
                  {user.company.length > 0 && (
                    <p className="text-gray-600 mb-2"><span className='font-bold'>Nom de l'entreprise:</span> {user.company[0].companyName}</p>
                  )}
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-4 flex space-x-2">
                  <button
                    className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
                    onClick={() => handleVerificationChange(user._id, true)}
                  >
                    Accepter
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                    onClick={() => handleVerificationChange(user._id, false)}
                  >
                    Refuser
                  </button>
                </div>
              </li>
            ))}
          </ul>
  <button
    onClick={handleLogout}
    className="w-full bg-red-600 text-white py-2 px-4 rounded-lg mt-6 hover:bg-red-700 transition"
  >
    Déconnexion
  </button>
</div>

    )}
  </div>
  )
}

export default index