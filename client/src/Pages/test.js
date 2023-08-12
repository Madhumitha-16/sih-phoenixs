import React,{useRef} from 'react';
import {firestore} from "../firebase"
import {addDoc,collection} from "@firebase/firestore";

export default function Test() {
    const msgRef= useRef();
    const ref=collection(firestore,"test");

    const handleSave=async(e)=>
    {
    e.preventDefault();
    console.log(msgRef.current.value);
    
    let data={
        message:msgRef.current.value
    }
    try
    {
        addDoc(ref,data);
    }
    catch(e)
    {
        console.log(e);
    }

    };    

return (
    <div>
    <form onSubmit={handleSave} >
        <label>Team name</label>
        <input type="text" ref={msgRef}/>
        <button type='submit'>Save</button>
    </form>
    </div>
  )
}
