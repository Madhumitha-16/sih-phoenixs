// import React, { useEffect, useState } from 'react';
// import {db} from "../firebaseConfig"
// import { collection, query, where, getDocs } from "@firebase/firestore";
// import { doc, getDoc} from "firebase/firestore"; 
// import "firebase/firestore";


// export default function Fetch() {
// //   async function Fetchsingle(e)
// //   {
// //     e.preventDefault();
// //     const docRef = doc(db, "Team_Details","vI5k1qjYBkH6qQo4qZZA");
// //     const docSnap = await getDoc(docRef);
  
// //     if (docSnap.exists()) 
// //   {
// //     console.log("Document data:", docSnap.data());
// //   } 
// //   else 
// //   {
// //   console.log("No such document!");
// //   }
// //   }


// //   async function Fetchmul(e)
// //   {
// // const q = query(collection(db, "test2"), where("Email", "==", true));
// // const querySnapshot = await getDocs(q);
// // querySnapshot.forEach((doc) => {
// // console.log(doc.id, " => ", doc.data());
// // });
// //   }


// //   async function Fetchall(e)
// //   {    
// //     const querySnapshot = await getDocs(collection(db, "test2"));
// //     querySnapshot.forEach((doc) => {
// //       console.log(doc.id, " => ", doc.data());
// //     });
// //   }
// const [mergedData, setMergedData] = useState([]);

// useEffect(() => {
//   const docRef = collection(db, 'Team_Details'); 
//    const teamDetailsSnapshot = getDocs(docRef)
//    const teamDetailsData = [];
//       teamDetailsSnapshot.forEach((doc) => {
//         const teamDetail = doc.data();
//         teamDetailsData.push({ id: doc.id, ...teamDetail });
//       });

//       const phaseRef = collection(db, 'Phase1'); 
//         const phase1Snapshot = getDocs(phaseRef)
//         const phase1Data = [];
//           phase1Snapshot.forEach((doc) => {
//             const phase1 = doc.data();
//             phase1Data.push({ id: doc.id, ...phase1 });
//           });

//           const mergedData = teamDetailsData.map((teamDetail) => {
//             const userId = teamDetail.userid;
//             const associatedPhase1 = phase1Data.find((phase1) => phase1.userid === userId);
//             return {
//               ...teamDetail,
//               phase1: associatedPhase1 || null,
//             };
//           });
//           setMergedData(mergedData);
//         },[]);

// return (
//   <div>
//     <h1>Team Phase Data</h1>
//     <ul>
//       {mergedData.map((item) => (
//         <li key={item.id}>
//           <strong>Team Name:</strong> {item.teamName},{" "}
//           <strong>Phase 1 Data:</strong> {item.phase1 ? item.phase1.dataField : "N/A"}
//         </li>
//       ))}
//     </ul>
//   </div>
// );
// }

import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig"; // Adjust the import path to match your file structure
import { collection, getDocs, query, where } from "firebase/firestore"; // Import necessary Firestore functions

const TeamPhaseData = () => {
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    // Step 1: Fetch Team_details
    const teamDetailsData = [];
    const teamDetailsCollection = collection(db, "Team_Details"); // Get the collection reference

    getDocs(teamDetailsCollection)
      .then((teamDetailsSnapshot) => {
        teamDetailsSnapshot.forEach((doc) => {
          const teamDetail = doc.data();
          teamDetailsData.push({ id: doc.id, ...teamDetail });
        });

        // Get all userids from the Team_details data
        const userIds = teamDetailsData.map((teamDetail) => teamDetail.userid);
        console.log(userIds);
        // Step 2: Fetch Phase1 using query
        const phase1Collection = collection(db, "PhaseI"); // Get the collection reference

        const phase1Query = query(phase1Collection, where("userid", "in", userIds));

        getDocs(phase1Query)
          .then((phase1Snapshot) => {
            const phase1Data = [];
            phase1Snapshot.forEach((doc) => {
              const phase1 = doc.data();
              phase1Data.push({ id: doc.id, ...phase1 });
            });

            // Step 3: Merge the data based on userid
            const mergedData = teamDetailsData.map((teamDetail) => {
              const userId = teamDetail.userid;
              const associatedPhase1 = phase1Data.find((phase1) => phase1.userid === userId);
              return {
                ...teamDetail,
                phase1: associatedPhase1 || null,
              };
            });

            setMergedData(mergedData);
            console.log(mergedData);
          })
          .catch((error) => {
            console.error("Error fetching Phase1 data: ", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching Team_details data: ", error);
      });
  }, []);

  return (
    <div>
      <h1>Team Phase Data</h1>
      <ul>
        {mergedData.map((item) => (
          <li key={item.id}>
            <strong>Team Name:</strong> {item.Team_Leader_firstname},{" "}
            <strong>Phase 1 Data:</strong> {item.phase1 ? item.phase1.Project_Title : "N/A"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamPhaseData;



