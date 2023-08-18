import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Styles/homepage.css";
import { AuthLoginInfo } from "./../AuthComponents/AuthLogin";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import ContentPasteRoundedIcon from "@mui/icons-material/ContentPasteRounded";
import Sidebar from "../Components/Sidebar";

function Homepage() {
  const userId = useParams();
  const ctx = useContext(AuthLoginInfo);
  const isAuthenticated = !Array.isArray(ctx);
  const [dashboardData, setDashboardData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/dashboard_data", { withCredentials: true })
      .then((res) => {
        if (res.data != null) {
          setDashboardData(res.data);
        }
      });
  }, []);

  const TopPanel = () => {
    const todaysDate = new Date().getTime();
    const historyDateRange = (days) => {
      let newDate = new Date();
      newDate.setHours(0, 0, 0, 1);
      newDate.setDate(newDate.getDate() - days);
      return newDate.getTime();
    };
    const [changedDate, setChangedDate] = useState(historyDateRange(0));
    const [selectedDateToText, setSelectedDateToText] = useState("today");

    // dokonczyc dzialanie filtrowania tablicy dashboardData z wybrana data
    const dashboardClientsDataFiltered = dashboardData[0]?.filter((item) => {
      let itemDate = new Date(item.clientDateCreated).getTime();
      return changedDate < itemDate && itemDate < todaysDate;
    });

    const dashboardDataFiltered = dashboardData[1]?.filter((item) => {
      let itemDate = new Date(item.date).getTime();
      return changedDate < itemDate && itemDate < todaysDate;
    });

    const getTotalSumOfDateRange = () => {
      if (typeof dashboardDataFiltered === "undefined") {
        return 0;
      }
      let totalSum = dashboardDataFiltered?.reduce((total, value) => {
        return total + value.price;
      }, 0);
      return totalSum.toFixed(2);
    };

    const getTotalNewOrdersDateRange = () => {
      if (typeof dashboardDataFiltered === "undefined") {
        return 0;
      }
      return dashboardDataFiltered?.length;
    };

    const getTotalNewClientsDateRange = () => {
      if (typeof dashboardDataFiltered === "undefined") {
        return 0;
      }
      return dashboardClientsDataFiltered?.length;
    };

    const dateRangeToText = (dateNumber) => {
      if (dateNumber === 0) {
        setSelectedDateToText("today");
      } else if (dateNumber > 100) {
        setSelectedDateToText("whole period");
      } else {
        setSelectedDateToText(`${dateNumber} days`);
      }
    };

    const upcomingEventDateText = (date) => {
      let todaysDate = new Date().toISOString().split("T")[0];
      let tommorowDate = new Date();
      tommorowDate.setDate(tommorowDate.getDate() + 1);
      let tommorowDateToCompare = tommorowDate.toISOString().split("T")[0];
      let eventDate = date.split("T")[0];
      if (eventDate === todaysDate) {
        return "Today";
      } else if (eventDate === tommorowDateToCompare) {
        return "Tommorow";
      } else {
        return eventDate;
      }
    };

    const UpcomingEvents = () => {
      let upcomingEventsExist = false;
      if (dashboardData[2] === undefined || dashboardData[2].length === 0) {
        upcomingEventsExist = false;
      } else {
        upcomingEventsExist = true;
      }
      return upcomingEventsExist ? (
        dashboardData[2]?.map((event) => {
          let dateText = upcomingEventDateText(event.deadlineDate);
          return (
            <div className="upcomingEventWrap" key={event.id}>
              <div className="upcomingEventDate">
                <span>-{dateText} </span>
                <span>{event.hours}</span>
              </div>
              <div className="upcomingEventTitle">
                <span>{event.title}</span>
              </div>
            </div>
          );
        })
      ) : (
        <div className="upcomingEventWrap">
          <span>There are no upcoming events</span>
        </div>
      );
    };

    return (<>
    <Sidebar userId/>
  <div className="bodyWrap dashboardPage">
      <div className="topPanelWrap">
      
        <div className="topPanelDataRangeBox">
          <h2>Welcome, Team!</h2>
          <div className="topPanelDataIcon">
            
          </div>
         
        </div>

        <div className="topPanelData">
          <div className="topPanelDataBox">
            

            <div className="topPanelDataSummary">
              
            </div>

            <div className="topPanelSeperator"></div>
            <div>
              <span className="topPanelBottomText">
                
              </span>
            </div>
          </div>

          <div className="topPanelDataBox">
            <div className="topPanelDataIcon">
              <TrendingUpRoundedIcon />
            </div>

            <div className="topPanelDataSummary">
              
            </div>

            <div className="topPanelSeperator"></div>
            <div>
              <span className="topPanelBottomText">
                <Link to="/orders" className="maincolor">
                
                </Link>
              </span>
            </div>
          </div>

          <div className="topPanelDataBox">
            <div className="topPanelDataIcon">
              <SupervisorAccountRoundedIcon />
            </div>

            <div className="topPanelDataSummary">
              
            </div>

            <div className="topPanelSeperator"></div>
            <div>
              <span className="topPanelBottomText">
                
              </span>
            </div>
          </div>

          <div className="topPanelDataBox">
            <div className="topPanelDataIcon topPanelHeaderInline">
             
            </div>

            <UpcomingEvents />

            <div className="topPanelSeperator"></div>
            <div>
              <span className="topPanelBottomText">
                <Link to="/calendar" className="maincolor">
                  See more events
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
    );
  };
  

  


  return (
    <div className="bodyWrap dashboardPage">
    <div className="topPanelWrap">
      <TopPanel />
      </div>
    </div>
  );
}

export default Homepage;
