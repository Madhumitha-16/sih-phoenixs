import React, { useState,useEffect } from 'react';
import { getDocs,collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import TeamCard from './TeamCards';
import Sidebar from '../../Components/Sidebar';
import {Card} from "antd";


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
    <div className="bodyWrap dashboardPage">
    <h1 className='teams'>Teams</h1>
    <div className="app-container">

      <div className="team-column">
   
    <div className="team-cards">
    {data.map((doc, index) => (
            <Card key={index} title={`Team Leader: ${doc.Team_Leader_firstname}`}>
              <p><strong>Mail ID:</strong> {doc.Team_Leader_Mailid}</p>
              <p><strong>Registration Number:</strong> {doc.Team_Member1_Regnum}</p>
            </Card>
          ))}
          </div>
    </div>

    <div className="team-column">
    <div className="team-cards">
    {data.map((doc, index) => (
            <Card key={index} title={`Team Leader: ${doc.Team_Leader_firstname}`}>
              <p><strong>Mail ID:</strong> {doc.Team_Leader_Mailid}</p>
              <p><strong>Registration Number:</strong> {doc.Team_Member1_Regnum}</p>
            </Card>
          ))}
          </div>
    </div>
  </div>
  </div>
  </>

  );

}
