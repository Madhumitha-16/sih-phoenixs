import React from 'react'
import { useParams } from 'react-router-dom';

const Phase2 = () => {
  const userId = useParams();
  return (
    <div className='bodyWrap dashboardPage'>
        <div className='heading'>
            <h2>Phase-II</h2>
            <hr></hr>
        </div>
    </div>
  )
}

export default Phase2