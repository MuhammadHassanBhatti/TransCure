import { Outlet } from "react-router-dom";
import MainLayout from "./Components/common/MainLayout";

const PrivateRoute = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default PrivateRoute;
