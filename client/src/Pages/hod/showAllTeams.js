import React from 'react';
import { getDocs,collection } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export default function ShowAllTeams() {

    async function Fetchall(e)
  {    
    e.preventDefault();
    const querySnapshot = await getDocs(collection(db, "Team_Details"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  }
  return (
    <div>hi
        <button onClick={Fetchall}>show teams</button>
    </div>
  )
}
