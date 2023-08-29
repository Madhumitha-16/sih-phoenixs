import React, { useState,useEffect } from 'react';
import { getDocs,collection, doc, getDoc,updateDoc, Firestore, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { InfoCircleOutlined } from '@ant-design/icons';
import {Button, Card,Select,notification,Modal} from "antd";
const { Option } = Select;



export default function ViewTeams() {
  const [loading, setLoading] = useState(true);
  const [teamLeaders, setTeamLeaders] = useState([]); 
  const [mentors, setMentors] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const [modalTeamLeader, setModalTeamLeader] = useState(null);
 

  useEffect(() => {

    const fetchData = async () => {
      try {
        const teamDetailsRef = collection(db, 'Team_Details');
        const phaseIRef = collection(db, 'PhaseI');

        const teamDetailsSnapshot = await getDocs(teamDetailsRef);
        const phaseISnapshot = await getDocs(phaseIRef);

        const teamDetailsData = teamDetailsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const combinedData = teamDetailsData.map(teamLeader => {
          const phaseIDoc = phaseISnapshot.docs.find(phaseI => phaseI.data().userid === teamLeader.userid);
          if (phaseIDoc) {
            return {
              ...teamLeader,
              Project_Title: phaseIDoc.data().Project_Title,
              Domain: phaseIDoc.data().Domain
            };
          } else {
            return {
              ...teamLeader,
              Project_Title: 'NA',  
              Domain: 'NA'          
            };
          }
        });

        setTeamLeaders(combinedData);
        console.log(combinedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
   
  


  
    const fetchMentors = async () => {
    
      const mentorsCollectionRef = collection(db, 'Staffs');

      try {
        const querySnapshot = await getDocs(mentorsCollectionRef);
        const mentorList = querySnapshot.docs.map((doc) => doc.data());
        setMentors(mentorList);
        
      } catch (error) {
        console.error('Error fetching mentors:', error);
      }
    };

    fetchMentors();
    

  }, []);

  //button func
  const handleUpdateMentor = async (userId, mentorName) => {
    if (!mentorName) {
      console.log('Select a mentor before setting.');
      return;
    }

    const teamQueryRef = query(collection(db, 'Team_Details'), where('userid', '==', userId));
    const teamQuerySnapshot = await getDocs(teamQueryRef);

    if (!teamQuerySnapshot.empty) {
      const teamDocRef = teamQuerySnapshot.docs[0].ref;

      try {
        await updateDoc(teamDocRef, {
          Mentor: mentorName
        });
        console.log(`Mentor set to: ${mentorName}`);
        notification.success({
          message: 'Mentor Update Successful',
          description: `Mentor set to: ${selectedMentor}`,
        });
      } 
      catch (error) {
        console.error('Error updating mentor:', error);
        notification.error({
          message: 'Mentor Update Failed',
          description: 'An error occurred while updating the mentor.',
        });
      }
    }
  };


  
  
  if (loading) {
    return <div>Loading...</div>; 
  }

  return (<>
    <div className="bodyWrap dashboardPage">
    <h1 className='teams'>Teams</h1>
    <div className="divider"></div> 
    <div className="app-container">
    <div className="team-column">
    <div className="team-cards">
   
    {teamLeaders.map(teamLeader => (
               <Card key={teamLeader.id} title={`Team Leader: ${teamLeader.Team_Leader_firstname}`}>
               <p>Mail ID: <br></br>{teamLeader.Team_Leader_Mailid}</p>
               <p>Registration Number:<br></br> {teamLeader.Team_Leader_Regnum}</p>
               <p>Project Title: <br></br>{teamLeader.Project_Title}</p>
               <p>Domain:<br></br> {teamLeader.Domain}</p>
         
               <Select
                 placeholder="Select a mentor"
                 onChange={(selectedMentor) => setSelectedMentor(selectedMentor)}
                 style={{ width: '100%', marginBottom: '15px' }}
               >
                 {mentors.map(mentor => (
                   <Option key={mentor.id} value={mentor.Name}>
                     {mentor.Name}
                   </Option>
                 ))}
               </Select>
         
               <Button
                 type="primary"
                 onClick={() => handleUpdateMentor(teamLeader.userid,selectedMentor)}
               >
                 Set Mentor
               </Button>


               <Button
                    type="link"
                    className="red-button"
                    icon={<InfoCircleOutlined className="red-button" />}
                    onClick={() => {
                      setIsModalVisible(true);
                      setModalTeamLeader(teamLeader); // Store the current team leader for the modal
                    }}
                  />

               <Modal
        title={`Details for ${modalTeamLeader ? modalTeamLeader.Team_Leader_firstname : ''}`}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setIsModalVisible(false)}>
            Close
          </Button>
        ]}
      >
        {modalTeamLeader && (
          <div>
            <p><strong>Team Member 1</strong></p>
            <p>First name: {modalTeamLeader.Team_Member1_firstname}</p>
            <p>Registration Number: {modalTeamLeader.Team_Member1_Regnum}</p>
            <p>Mail ID: {modalTeamLeader.Team_Member1_Mailid}</p>
            
            <p><strong>Team Member 2</strong></p>
            <p>First name: {modalTeamLeader.Team_Member2_firstname}</p>
            <p>Registration Number: {modalTeamLeader.Team_Member2_Regnum}</p>
            <p>Mail ID: {modalTeamLeader.Team_Member2_Mailid}</p>

            <p><strong>Team Member 3</strong></p>
            <p>First name: {modalTeamLeader.Team_Member3_firstname}</p>
            <p>Registration Number: {modalTeamLeader.Team_Member3_Regnum}</p>
            <p>Mail ID: {modalTeamLeader.Team_Member3_Mailid}</p>
            
            {/* Include other details you want to show in the modal */}
          </div>
        )}
      </Modal>

                
             </Card>
            ))}
   </div>
    </div>
  </div>
  </div>
  </>

  );

}
