import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Inbox from "./Components/screens/Inbox/InboxComponent.jsx";
import LabResults from "./Components/screens/Lab Results/LabResults";
import MedicationsRefills from "./Components/screens/Medications Refills/MedicationsRefills";
import Allergies from "./Components/screens/Allergies/Allergies";
import Bills from "./Components/screens/Bills/Bills";
import ScheduleAppoinment from "./Components/screens/Schedule Appoinment/ScheduleAppoinment";
import VisitHistory from "./Components/screens/Visit History/VisitHistory";
import PrivateRoute from "./PrivateRoutes.jsx";

const privateRoutes = [
  { path: "inbox", component: <Inbox /> },
  { path: "schedule-Appointment", component: <ScheduleAppoinment /> },
  { path: "visit-History", component: <VisitHistory /> },
  { path: "medication-Refills", component: <MedicationsRefills /> },
  { path: "lab-Results", component: <LabResults /> },
  { path: "allergies", component: <Allergies /> },
  { path: "bills", component: <Bills /> },
];

const publicRoutes = [
  { path: "/", component: <h1>home</h1> },
  { path: "login", component: <h1>login</h1> },
  { path: "register", component: <h1>register</h1> },
];

function App() {
  return (
    // <Router>
    //   <Routes>
    //     {publicRoutes.map((route, index) => (
    //       <Route key={index} path={route.path} element={route.component} />
    //     ))}
    //     <Route path="dashboard" element={<PrivateRoute />}>

    //       {/* ////.....Render this  */}
    //       {/* <Route index element={<h1>Hassan</h1>} /> */}

    //       ///.......Just show parent on Path
    //       <Route index element={<Inbox />} />

    //       ////.......Stay active with others Links
    //       {/* <Route exact path="" element={<Inbox />} /> */}

    //       {/* <Route index element={<Navigate to="inbox" replace />} /> */}

    //       <Route path="schedule-Appointment" element={<ScheduleAppoinment />} />
    //       {/* {privateRoutes.map((route, index) => (
    //         <Route
    //           index={index === 0}
    //           key={index}
    //           path={route.path}
    //           element={
    //             // route.path === "inbox" ? (
    //             //   <Navigate to="/inbox" replace />
    //             // ) : (
    //               route.component
    //             // )
    //           }
    //         />
    //       ))} */}
    //     </Route>
    //   </Routes>
    // </Router>
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
        <Route path="dashboard" element={<PrivateRoute />}>
          <Route index element={<Navigate to="inbox" replace />} />

          {privateRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
