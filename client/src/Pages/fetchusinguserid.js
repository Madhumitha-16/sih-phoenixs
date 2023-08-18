
import { db } from "../firebaseConfig.js";
import { query, where,collection,getDocs } from "firebase/firestore";

async function fetchuser()
{
    const q = query(collection(db, "Team_Details"), where("userid", "==", "RRH9ngOiNocRCn81uSjZeLjaXT43"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) =>
    {
    console.log(doc.id, " => ", doc.data());
    });
}
fetchuser();


