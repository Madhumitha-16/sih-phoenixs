import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { useParams } from 'react-router-dom';

function MainSideBar() {
const uid = useParams();
  useEffect(() => {
  return () => {
    if(uid){
        console.log('uid',uid);
    }
  }
}, [uid]);

  return (
    <div>
      <Sidebar userId={uid} />
    </div>
  );
}

export default MainSideBar;
