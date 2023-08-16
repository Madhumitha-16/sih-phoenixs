// import React, { useState } from 'react';
// import {auth} from "../firebaseConfig"
// import { signInWithEmailAndPassword } from 'firebase/auth';

// export default function Logintest() {
  
//     const [email,setemail]=useState("");
//     const[psw,setpsw]=useState("");
// signInWithEmailAndPassword(auth, email, psw)
//   .then((userCredential) => {
//     // Signed in 
    // const user = userCredential.user;
    // console.log(user);
//   })
  
//   .catch((error) => {
    // const errorMessage = error.message;
    // console.log(errorMessage);
//   });
  

  
//     return (

//     <div>Logintest
//         <form onSubmit={Logintest}>
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
//         <button type='submit'>log in</button>
//         </form>
//     </div>
//   )
// }
