import React, { useState,useEffect } from 'react';
import { getDocs,collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import TeamCard from './TeamCards';
import Sidebar from '../../Components/Sidebar';


export default function ViewTeams() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      
      const collectionRef = collection(db, 'Team_Details'); // Replace with your collection name

      try {
        const querySnapshot = await getDocs(collectionRef);
        const documents = [];
        
        querySnapshot.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
        });

        setData(documents);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>; 
  }

 console.log(data);

  return (<>
    <Sidebar userId/>
    <div className="bodyWrap dashboardPage">
    <h1>Fetched Data:</h1>
    <div className="team-cards">
      {data.map((doc, index) => (
        <TeamCard
        key={index}
            teamLeaderName={doc.Team_Leader_firstname}
        />
      ))}
    </div>
  </div>
  </>

  );

}
