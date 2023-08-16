// import React, { useState } from 'react';
// import {auth} from "../firebaseConfig"
// import { createUserWithEmailAndPassword } from 'firebase/auth';

// export default function Signuptest() {
  
//     const [email,setemail]=useState("");
//     const[psw,setpsw]=useState("");
    
//     const signup=(e)=>
//     {
//         e.preventDefault();
//     createUserWithEmailAndPassword(auth, email, psw)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     console.log(user);
//   })
  
//   .catch((error) => {
//     const errorMessage = error.message;
//     console.log(errorMessage);
//   });
// };
  

  
//     return (

//     <div>Signuptest
//         <form onSubmit={signup}>
//         <input
//         type='email'
//         onChange={(e)=>setemail(e.target.value)}
//         placeholder='email'
//         value={email}
//         ></input>
//         <input
//         type='password'
//         value={psw}
//         onChange={(e)=>setpsw(e.target.value)}
//         placeholder='psw'></input>
        
//         <button type='submit'>sign up</button>
//         </form>
//     </div>
//   )
// }
