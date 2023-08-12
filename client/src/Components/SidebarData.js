import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
export const SidebarData = [
  {
    title: "Dashboard",
    icon: <HomeRoundedIcon />,
    link: "/"
  },
  {
    title: "Team",
    icon: <ContentPasteRoundedIcon />,
    link: "/orders"
  },
  {
    title: "Phase I",
    icon: <PeopleOutlineRoundedIcon />,
    link: "/clients"
  },
  {
    title: "Phase II",
    icon: <TodayRoundedIcon />,
    link: "/phase2"
  },
  {
    title: "Phase III",
    icon: <TodayRoundedIcon />,
    link: "/phase3"
  },
  {
    title: "Submissions",
    icon: <TodayRoundedIcon />,
    link: "/submissions"
  },

];
