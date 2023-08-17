// import React, {useRef, useState} from 'react';
// //import axios from 'axios';
// import './Styles/register.css';
// import register from "../Assets/Images/regsiteration.png";
// import {db} from "../firebaseConfig"
// import {addDoc,collection} from "@firebase/firestore";
// import {auth} from "../firebaseConfig"
// import { createUserWithEmailAndPassword } from 'firebase/auth';


// // export default function Register() {
//   const [firstName, setFirstName] = useState("")
//   const [lastName, setLastName] = useState("")
// //   const [password, setPassword] = useState("")
// //   const [email, setEmail] = useState("")
// //   const [curpassword, setCurPassword] = useState("")
// //   const [regno,setRegNo] = useState("")
// //   const [selectedOption, setSelectedOption] = useState('');
  
//   const handleSelectChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

// //   //sending data from xxfield to db 
// const fname=useRef();
// const lname=useRef();
// const mailid=useRef();
// const regnum=useRef();
// const course=useRef();
// const dept=useRef();
// const psw=useRef();

// // const ref=collection(db,"Registeration"); 


// const login=async(e)=>
// {
// e.preventDefault();
// console.log(fname.current.value);
// console.log(lname.current.value);
// console.log(mailid.current.value);
// console.log(regnum.current.value);
// console.log(course.current.value);
// console.log(dept.current.value);
// console.log(psw.current.value);

// let data={
//     First_name:fname.current.value,
//     Last_name:lname.current.value,
//     Email:mailid.current.value,
//     Register_number:regnum.current.value,
//     Course: course.current.value,
//     Department:dept.current.value,
//     Password:psw.current.value
// }
// try
// {
//     addDoc(ref,data);
// }
// catch(e)
// {
//     console.log(e);
// }

// };    


// export default function Register()
// {
//  const [email,setemail]=useState("");
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

//   return (<div className="bodyWrap">
//     <div className="contentRegisterWrap">
//     <form className="registerForm" onSubmit={login}>
//       <div className="RegisterSide">
//         <div className="loginWrap">
//           <h1>Register</h1>
//           <div className="input-row">
//             <div className="input-group">
//                 <input type="text" className="input"  required/>
//                 <label className={`input-label ${firstName.length > 0 ? "focusLabel" : ""}`}>First Name</label>
//             </div>
//             <div className="input-group">
//                 <input type="text" className="input"  required />
//                 <label className={`input-label ${lastName.length > 0 ? "focusLabel" : ""}`}>Last Name</label>
//             </div>
//             </div>
//             <div className="input-row">

//         <div className="input-group">
//         <input type="email" className="input" onChange={e => setemail(e.target.value)}  ref={mailid} required/>
//         <label className={`input-label ${email.length > 0 ? "focusLabel" : ""}`}>Email</label>
//         </div>
//         </div>
//         <div className="input-group">
//         <input
//         type="text"
//         className="input"
//         ref={regnum}
//         required
//         pattern="[0-9]*"
//         inputMode="numeric"
//     />
//         <label   >Register No. [Only numbers]</label>
//         </div>
//         <div className="input-group">
//         <label>Course</label>
//         <input type="radio" className="input-radio" ref={course} required value="BE" name="course"/>BE
//         <input type="radio" className="input-radio"  required value="BTech" name="course"/>BTech
//         </div>
//         <div className='input-group'>
//         <label>Department</label>
//         <select className='select' id="dropdown" ref={dept} value={selectedOption} onChange={handleSelectChange}> <option value="IT">IT</option>
//             <option value="CSE">CSE</option>
//             <option value="ADS">ADS</option>
//             <option value="CSBS">CSBS</option>
//         </select>
        
//         </div>
//         </div>
//         <div className="input-row">
//             <div className="input-group">
//                 <input type="password" className="input"  onChange={e => setPassword(e.target.value)} ref={psw} required/>
//                 <label className={`input-label ${password.length > 0 ? "focusLabel" : ""}`}>Password</label>
//             </div>
//             <div className="input-group">
//                 <input type="password" className="input" onChange={e => setCurPassword(e.target.value)} required />
//                 <label className={`input-label ${curpassword.length > 0 ? "focusLabel" : ""}`}>Confirm Password</label>
//             </div>
//             </div>
//         <div>
//         <input type='submit' className='button'  value="Register"/>
//         {/* <button onClick={login}>Register</button> */}
//         </div>
       
//         </div>
//         </form>
//       </div>
//       <div className="infoSide">
//         <div className="loginWrap">
//           <h2>Nalaiyathiran</h2>
//           <hr></hr>
//           <p>Log in, collaborate with your team and submit your innovations here!  .</p>
//           <img src={register} />
//         </div>
//       </div>
//     </div>
//   )
// }
