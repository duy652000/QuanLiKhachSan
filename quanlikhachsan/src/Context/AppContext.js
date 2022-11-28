import { Children, createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));

  //customer
  const [customerData, setCustomerData] = useState([]);

  //user
  const [userData, setUserData] = useState([]);

  //service
  const [serviceData, setServiceData] = useState([]);


  //room
  const [dataAllRoom, setDataAllRoom] = useState([]);
  const [dataFreeRoom, setDataFreeRoom] = useState([]);
  const [dataBookedRoom, setDataBookedRoom] = useState([]);
  const [dataCleanRoom, setDataCleanRoom] = useState([]);
  //count room
  const [dataCountAllRoom, setDataCountAllRoom] = useState([]);
  const [dataCountFreeRoom, setDataCountFreeRoom] = useState([]);
  const [dataCountBookedRoom, setDataCountBookedRoom] = useState([]);
  const [dataCountCleanRoom, setDataCountCleanRoom] = useState([]);

  //get data room


  //all room
  const getDataAllRoom = async () => {
    let res = await axios.get("http://localhost:8000/room/getlist", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    let count = await res.data.total;
    setDataCountAllRoom(count);
    res = await res.data.data;
    setDataAllRoom(res);
  };


  //free room
  const getDataFreeRoom = async () => {
    //await here
    let res = await axios.get(
      "http://localhost:8000/room/filter?status_room=1",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    let count = await res.data.client.length;
    setDataCountFreeRoom(count);

    res = await res.data.client;

    setDataFreeRoom(res);
  };




  //booked room
  const getDataBookedRoom = async () => {
    let res = await axios.get(
      "http://localhost:8000/room/filter?status_room=2",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    let count = await res.data.client.length;
    setDataCountBookedRoom(count);
    res = await res.data.client;

    setDataBookedRoom(res);
  };




  //clean room
  const getDataCleanRoom = async () => {
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
    let count = await res.data.client.length;
    setDataCountCleanRoom(count);
    res = await res.data.client;
    setDataCleanRoom(res);
  };

  // end get data room




  // get data customer
  const getDataCustomer = async () => {
    let res = await axios.get("http://localhost:8000/client/client-profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res = await res.data.data;
    setCustomerData(res);
  };



  // get data user
  const getDataUser = async () => {
    let res = await axios.get("http://localhost:8000/all-account", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res = await res.data.data;
    setUserData(res);
  };





  // get data service
  const getDataService = async () => {
    let res = await axios.get("http://localhost:8000/service/service-info", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res = await res.data.data;
    setServiceData(res);
  };
  ///




  useEffect(() => {
    getDataUser();
    getDataCustomer();
    getDataService();
    getDataAllRoom();
    getDataFreeRoom();
    getDataBookedRoom();
    getDataCleanRoom();
  }, [token]);

  return (
    <AppContext.Provider value={{ customerData, userData, serviceData ,
      dataAllRoom,
      dataFreeRoom,
      dataBookedRoom,
      dataCleanRoom,
      dataCountAllRoom,
      dataCountFreeRoom,
      dataCountBookedRoom,
      dataCountCleanRoom }}>
      {children}
    </AppContext.Provider>
  );
};
