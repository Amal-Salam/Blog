import { useState } from "react";

export default function RegisterPage() {
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  
  async function register(ev) {
    ev.preventDefault();
  
    const response = await fetch('http://localhost:4000/register', {
     method: 'POST',
     body: JSON.stringify({ firstname,surname,username, password }),
     headers: { 'Content-Type': 'application/json' },
   });
   
   if (response.status === 200){
    alert('User Registration Successful');
   
   }
   else{
    alert('User Registration Failed');
   }
    
  }
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="firstname"
        value={firstname}
        onChange={ev => setFirstname(ev.target.value)}
      />
      <input
        type="text"
        placeholder="surname"
        value={surname}
        onChange={ev => setSurname(ev.target.value)}
      />
      <input
        type=" text "
        placeholder="username"
        value={username}
        onChange={ev => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={ev => setPassword(ev.target.value)}
      />
      <button> Register </button>
    </form>
  );
}
