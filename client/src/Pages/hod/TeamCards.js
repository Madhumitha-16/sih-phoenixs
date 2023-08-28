import React from 'react';

const TeamCard = ({ teamLeaderName}) => {
  return (
    <div className='teamcards'>
     
    <p className='card-content'>Team Leader: {teamLeaderName}</p>
    </div>
  
    
  );
};

export default TeamCard;
