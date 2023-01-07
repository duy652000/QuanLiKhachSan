import React, { memo, useCallback, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Room from "../pages/Room";
import User from "../pages/User";
import Oder from "../pages/services/Oder";
import Customer from "../pages/Customer";
import Content from "../layouts/Content";
import Service from "../pages/services/Service";
import ShowProfile from "../components/profile/ShowProfile";
import ChangePassword from "../components/profile/ChangePassword";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
import RoomManager from "../pages/RoomManager";
import Statistic from "../pages/Statistic";
import Bill from "../pages/Bill";

function Router() {
  const { role } = useContext(AppContext);
  const roleAccount = role;
 

  return (
    <Routes>
      {roleAccount === 1 ? (
        //admin
        <>
          <Route path="*" element={<Content />} />
          <Route path="/profile" element={<ShowProfile />} />
          <Route path="/change_password" element={<ChangePassword />} />
          <Route path="/room/*" element={<Room />} />
          <Route path="/oder/*" element={<Oder />} />
          <Route path="/customer/*" element={<Customer />} />
          <Route path="/service/*" element={<Service />} />
          <Route path="/room-manager/*" element={<RoomManager />} />
          <Route path="/statistic" element={<Statistic />} />
          <Route path="/user/*" element={<User />} />
          <Route path="/bill" element={<Bill />} />

        </>
      ) : roleAccount === 2 ? (
        // Le tan
        <>
          <Route path="*" element={<Content />} />
          <Route path="/profile" element={<ShowProfile />} />
          <Route path="/change_password" element={<ChangePassword />} />
          <Route path="/room/*" element={<Room />} />
          <Route path="/customer/*" element={<Customer />} />
        </>
      ) : (
        //Cleaner
        <>
          <Route path="/room/*" element={<Room />} />

          <Route path="*" element={<Content />} />
          <Route path="/profile" element={<ShowProfile />} />
          <Route path="/change_password" element={<ChangePassword />} />
        </>
      )}
      {/* {roleAdmin(roleAccount)} */}
    </Routes>
  );
}

export default memo(Router);
