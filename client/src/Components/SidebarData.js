import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import Groups from '@mui/icons-material/Groups';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
export const SidebarData = [
  {
    title: "Dashboard",
    icon: <HomeRoundedIcon />,
    link: "/home/:userId"
  },
  {
    title: "Team",
    icon: <Groups />,
    link: "/team/:userId"
  },
  {
    title: "Phase I",
    icon: <PeopleOutlineRoundedIcon />,
    link: "/phase1/:userId"
  },
  {
    title: "Phase II",
    icon: <TodayRoundedIcon />,
    link: "/phase2/:userId"
  },
  {
    title: "Phase III",
    icon: <AssistantPhotoIcon />,
    link: "/phase3/:userId"
  },
  {
    title: "Submissions",
    icon: <RemoveRedEyeIcon />,
    link: "/submissions/:userId"
  },
  {
    title: "Logout",
    icon: <MeetingRoomIcon />,
    link: "/login"
  },

];
