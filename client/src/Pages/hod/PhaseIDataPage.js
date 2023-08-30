import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom'; 
import { db } from '../../firebaseConfig';
import { Card } from 'antd';


export default function PhaseIDataPage() {
  const { userId } = useParams(); 
  const [phaseIData, setPhaseIData] = useState([]); 

  useEffect(() => {
    const fetchPhaseIData = async () => {
      try {
        const phaseIRef = collection(db, 'PhaseI');
        const phaseISnapshot = await getDocs(phaseIRef);

        const userData = [];
        phaseISnapshot.docs.forEach(doc => {
          const phaseData = doc.data(); 
          if (phaseData.userid === userId) {
            userData.push(phaseData);
          }
        });

        setPhaseIData(userData);
        console.log('Fetched PhaseI Data:', userData);
      } catch (error) {
        console.error('Error fetching PhaseI data:', error);
      }
    };

    fetchPhaseIData();
  }, [userId]);

  return (
    <div className="bodyWrap dashboardPage">
    <div>
      <h2>PhaseI Data for User ID: {userId}</h2>
      <div className="divider"></div> 
      <ul>
        {phaseIData.map(data => (
          <Card key={data.id}>
            
            Project Title: {data.Project_Title}<br></br>
            Domain: {data.Domain}<br></br>
            Abstract: {data.Abstract}
            
          </Card>
        ))}
      </ul>
    </div>
    </div>
  );
}
