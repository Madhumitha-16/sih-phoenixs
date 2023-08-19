import React, { useState } from 'react'

const Submissions = () => {

  const [phase1Details, setPhase1Details] = useState({});

  
  return (
    <div className='bodyWrap dashboardPage'>
    <div className='heading'>
        <h2>Submissions</h2>
        <hr></hr>
    </div>
    <div class="column">
    <div className='text-container'>
      <h3>Phase 1</h3>
    </div>
    </div>
    <div class="column">
    <div className='text-container'>
      <h3>Phase 2</h3>
    </div>
    </div>
    <div class="column">
    <div className='text-container'>
      <h3>Phase 3</h3>
    </div>
    </div>

</div>
  )
}

export default Submissions