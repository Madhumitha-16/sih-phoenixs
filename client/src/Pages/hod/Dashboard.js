import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import { Chart } from "react-google-charts";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';

function Dashboard() {
  const userId = useParams();
 
  const data = [
    ["Task", "Hours per Day"],
    ["Phase 1", 25],
    ["Phase 2", 40],
    ["Phase 3", 60],
  ];

  const options = {
    title: "Progress",
    is3D: true,
  };


  const TopPanel = () => {


    return (<>
  <div className="bodyWrap dashboardPage">
      <div className="topPanelWrap">
      
        <div className="topPanelDataRangeBox">
          <h2>Welcome!</h2>
          <div className="topPanelDataIcon">
            
          </div>
         
        </div>

        <div className="topPanelData">
          <div className="topPanelDataBox">
          <div className="topPanelDataIcon topPanelHeaderInline">
            <SupervisorAccountRoundedIcon /> <h2>21 </h2>  
            </div>
            <h2>Teams</h2>
            <div className="topPanelSeperator"></div>
            <div>
              <span className="topPanelBottomText">
            
              </span>
            </div>
          </div>
         
          <div className="topPanelDataBox">
          <div className="topPanelDataIcon topPanelHeaderInline">
            <LooksOneIcon />  <h2>Phase I </h2>
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
            <LooksTwoIcon />  <h2>Phase II </h2>
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
            <Looks3Icon />  <h2>Phase III </h2>
            </div>

            <div className="topPanelSeperator"></div>
            <div>
              <span className="topPanelBottomText">
               
                  
              </span>
            </div>
          </div>
    
        </div>
      </div>
      <Chart
      chartType="PieChart"
      data={data}
      options={{...options, backgroundColor:"transparent"}}
      width={"100%"}
      height={"400px"}
    />
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

export default Dashboard;
