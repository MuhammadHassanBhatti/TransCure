import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HistoryIcon from "@mui/icons-material/History";
import MedicationIcon from "@mui/icons-material/Medication";
import ScienceIcon from "@mui/icons-material/Science";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const listItems = [
    { id: "inbox", icon: <InboxIcon />, text: "Inbox", path: "" },
    {
      id: "schedule",
      icon: <CalendarMonthIcon />,
      text: "Schedule Appointment",
      path: "schedule-Appointment",
    },
    {
      id: "history",
      icon: <HistoryIcon />,
      text: "Visit History",
      path: "visit-History",
    },
    {
      id: "medication",
      icon: <MedicationIcon />,
      text: "Medications & Refills",
      path: "medication-Refills",
    },
    {
      id: "labResults",
      icon: <ScienceIcon />,
      text: "Lab Results",
      path: "lab-Results",
    },
    {
      id: "allergies",
      icon: <CoronavirusIcon />,
      text: "Allergies",
      path: "allergies",
    },
    {
      id: "bills",
      icon: <MonetizationOnIcon />,
      text: "Bills",
      path: "bills",
    },
  ];
  return (
    <div>
      <List>
        {listItems.map((item) => (
          <ListItem
            key={item.id}
            to={item.path}
            component={NavLink}
            disablePadding
            style={({ isActive }) => ({
              textDecoration: "none",
              color: "black",
              backgroundColor: isActive ? "#e8a1f4" : "transparent",
              display: "block",
            })}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SideBar;
