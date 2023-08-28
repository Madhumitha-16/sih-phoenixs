import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import { Chart } from "react-google-charts";


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
