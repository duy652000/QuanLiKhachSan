import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useCallback } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));

  //customer
  const [customerData, setCustomerData] = useState([]);

  //user
  const [userData, setUserData] = useState([]);

  //service
  const [serviceData, setServiceData] = useState([]);

  //manager room
  const [roomData, setRoomData] = useState([]);

  //bill data
  const [billData, setBillData] = useState([]);

  //room

  const [dataCleanRoom, setDataCleanRoom] = useState([]);
  const [dataCheckInRoom, setDataCheckInRoom] = useState([]);

  const [role, setRole] = useState();

  //lấy dữ liệu booked room
  const getDataCheckInRoom = useCallback(async () => {
    let res = await axios.get(
      "http://localhost:8000/room/filter?status_room=2",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    res = res.data.Rom;
    setDataCheckInRoom(res);
  }, []);

  //lấy dữ liệu phòng clean room
  const getDataCleanRoom = useCallback(async () => {
    //await here
    let res = await axios.get(
      "http://localhost:8000/room/filter?status_room=3",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    res = res.data.Rom;
    setDataCleanRoom(res);
  }, [token]);

  // end get data room

  // lấy dữ liệu của khách hàng
  const getDataCustomer = useCallback(async () => {
    let res = await axios.get("http://localhost:8000/client/getclient", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res = res.data.data;
    setCustomerData(res);
  }, [token]);

  // lấy dữ liệu của nhân viên
  const getDataUser = useCallback(async () => {
    let res = await axios.get("http://localhost:8000/all-account", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res = res.data.data;
    setUserData(res);
  }, [token]);

  //lấy dữ liệu dịch vụ
  const getDataService = useCallback(async () => {
    let res = await axios.get("http://localhost:8000/service/getservice", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res = res.data.data;
    setServiceData(res);
  }, [token]);
  ///

  // lấy dữ liệu phòng
  const getDataRoom = useCallback(async () => {
    let res = await axios.get("http://localhost:8000/room/getlist", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res = res.data.data;
    setRoomData(res);
  }, [token]);
  ///

  //lấy dữ liệu bill
  const getDataBill = useCallback(async () => {
    let res = await axios.get("http://localhost:8000/bill/billall", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res = res.data.data;
    setBillData(res);
  }, [token]);
  ///

  useEffect(() => {
    if (!!token) {
      getDataRoom();
      getDataUser();
      getDataCustomer();
      getDataService();
      getDataBill();
      getDataCleanRoom();
      getDataCheckInRoom();
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        customerData,
        userData,
        roomData,
        serviceData,
        billData,
        dataCleanRoom,
        dataCheckInRoom,
        role,
        setRole,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
