import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom'; // If you're using React Router
import { db } from '../../firebaseConfig';
import { Card } from 'antd';
export default function PhaseIDataPage() {
  const { userId } = useParams(); // Get the user ID from the URL params
  const [phaseIData, setPhaseIData] = useState([]); // Use phaseIData as the state variable

  useEffect(() => {
    const fetchPhaseIData = async () => {
      try {
        const phaseIRef = collection(db, 'PhaseI');
        const phaseISnapshot = await getDocs(phaseIRef);

        const userData = [];
        phaseISnapshot.docs.forEach(doc => {
          const phaseData = doc.data(); // Use phaseData to store the document data
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
            {/* Display each field from the PhaseI data */}
            Project Title: {data.Project_Title}<br></br>
            Domain: {data.Domain}<br></br>
            Abstract: {data.Abstract}
            {/* Add other fields as needed */}
          </Card>
        ))}
      </ul>
    </div>
    </div>
  );
}
