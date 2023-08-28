import { getDocs } from 'firebase/firestore';
import React, { useState } from 'react';
import { collection, } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import Loading from '../../Components/Loading';
import { Table } from 'antd';


export default function ViewSubmissions() {
    //const [subsData,setSubsData]=useState;

    

    async function Fetchsubmissions(e)
    {
        e.preventDefault();
        const querySnapshot=await getDocs(collection(db,"PhaseI"));
        querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>",doc.data());
            
            
        });
    }
    const columns = [
        {
          title: "Team Leader",
          dataIndex: 'team_leader',
          filters: [
            {
              text: 'Joe',
              value: 'Joe',
            },
            {
              text: 'Category 1',
              value: 'Category 1',
            },
            {
              text: 'Category 2',
              value: 'Category 2',
            },
          ],
          filterMode: 'tree',
          filterSearch: true,
          onFilter: (value, record) => record.name.startsWith(value),
          width: '10%',
        },
        {
          title: 'Mentor',
          dataIndex: 'mentor',
          width: '10%',
        },
        {
            title: 'Project Domain',
            dataIndex: 'project_domain',
            width: '10%',
          },
        {
          title: 'Project Title',
          dataIndex: 'project_title',
          width: '20%',
        },
        {
            title: 'Phase 1',
            dataIndex: 'phase_1',
            width: '10%',
          },
          {
            title: 'Phase 2',
            dataIndex: 'phase_2',
            width: '10%',
          },
          {
            title: 'Phase 3',
            dataIndex: 'phase_3',
            width: '10%',
          },

       
      ];
      const data = [
        {
          key: '1',
          team_leader: 'John Brown',
          mentor: 32,
          project_title: 'New York No. 1 Lake Park',
          project_domain: 'IoT',
        },
        {
          key: '2',
          team_leader: 'Jim Green',
          mentor: 42,
          project_title: 'London No. 1 Lake Park',
          project_domain: 'IoT',
        },
        {
          key: '3',
          team_leader: 'Joe Black',
          mentor: 32,
          project_title: 'Sydney No. 1 Lake Park',
          project_domain: 'IoT',
        },
        {
          key: '4',
          team_leader: 'Jim Red',
          mentor: 32,
          project_title: 'London No. 2 Lake Park',
          project_domain: 'IoT',

        },
      ];

      const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };
  
    return (
        <div className='bodyWrap dashboardPage'>
        <div className='heading'>
        <h2>Submissions</h2>  
        <hr></hr>
        <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
    <div>
   
</div>
</div>

 
  )
}
