import {  createContext, useEffect, useState } from "react";
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

  //room
  const [dataAllRoom, setDataAllRoom] = useState([]);
  const [dataFreeRoom, setDataFreeRoom] = useState([]);
  const [dataBookedRoom, setDataBookedRoom] = useState([]);
  const [dataCleanRoom, setDataCleanRoom] = useState([]);
  const [dataCheckInRoom, setDataCheckInRoom] = useState([]);

  const [role, setRole] = useState();

  //count room

  // const [dataCountAllRoom, setDataCountAllRoom] = useState([]);
  // const [dataCountFreeRoom, setDataCountFreeRoom] = useState([]);
  // const [dataCountBookedRoom, setDataCountBookedRoom] = useState([]);
  // const [dataCountCleanRoom, setDataCountCleanRoom] = useState([]);

  //get infor
  // const getProFile = useCallback(async () => {
  //   let res = await axios.get("http://localhost:8000/view-account", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   res = await res.data;
  //   setRole(res.group_id);
  // }, [token]);

  //get data room

  // all room
  const getDataAllRoom = useCallback(async () => {
    let res = await axios.get("http://localhost:8000/room/getlist", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res = await res.data.data;
    setDataAllRoom(res);
  }, [token]);

  // const getDataAllRoom = useAsync (async () => {
  //   let res = await axios.get("http://localhost:8000/room/getlist", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   return {
  //     dataAllRoom: res.data.data,
  //     dataCount:res.data.total
  //   };
  // }, [token]);
  // const { loading, value } = getDataAllRoom;

  // const loadingOfAllRoom = loading
  // const countOfAllRoom = value?.dataCount??0
  // const dataOfAllRoom = value?.dataAllRoom??[];

  // free room
  const getDataFreeRoom = useCallback(async () => {
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
    res = res.data.Rom;
    setDataFreeRoom(res);
  }, [token]);

  //booked room
  const getDataBookedRoom = useCallback ( async () => {
    let res = await axios.get(
      "http://localhost:8000/room/filter?status_room=4",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // let countDataBookedRoom = res.data.client.length
    res = res.data.Rom;

    setDataBookedRoom(res);
  },[]);


  //booked room
  const getDataCheckInRoom = useCallback( async () => {
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
  },[]);

  //clean room
  const getDataCleanRoom = useCallback( async () => {
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
  },[token]);

  // end get data room

  // get data customer
  const getDataCustomer = useCallback( async () => {
    let res = await axios.get("http://localhost:8000/client/getclient", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res = res.data.data;
    setCustomerData(res);
  },[token]);

  // get data user
  const getDataUser =useCallback( async () => {
    let res = await axios.get("http://localhost:8000/all-account", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res = res.data.data;
    setUserData(res);
  },[token]);

  // get data service
  const getDataService = useCallback( async () => {
    let res = await axios.get("http://localhost:8000/service/getservice", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res = res.data.data;
    setServiceData(res);
  },[token]);
  ///

  // get data room
  const getDataRoom = useCallback( async () => {
    let res = await axios.get("http://localhost:8000/room/getlist", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res = res.data.data;
    setRoomData(res);
  },[token]) ;
  ///

  useEffect(() => {
    if(!!token){
      getDataRoom();
      getDataUser();
      getDataCustomer();
      getDataService();
      getDataAllRoom();
      // getDataFreeRoom();
      // getDataBookedRoom();
      getDataCleanRoom();
      getDataCheckInRoom();
      // getProFile();
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        customerData,
        userData,
        roomData,
        serviceData,
        dataAllRoom,
        // dataFreeRoom,
        // dataBookedRoom,
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
