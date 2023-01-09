import React, { useState, useEffect, memo } from "react";
import { FadeLoader } from "react-spinners";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { useAsync } from "react-use";
import { useCallback } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Statistic() {
  //tên room 
  const [staticRoom,setStaticRoom] = useState([])
  //value theo tên room
  const [staticValueRoom,setStaticValueRoom] = useState([])
///lấy dữ liệu từ token
  const token = JSON.parse(localStorage.getItem("token"));
  //hàm lấy dữ liệu api thống kê từng phòng



 //lấy dữ liệu bill
 const getDataBill = useCallback(async () => {
  let res = await axios.get("http://localhost:8000/bill/viewsta", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  res = await res
  const dataOb=res.data.data
  //chuyển từ object sang array
  const arrayNameRoom = Object.keys(dataOb);
    //chuyển từ object sang array
  const arrayValueRoom = Object.values(dataOb);
  setStaticRoom(arrayNameRoom)
  setStaticValueRoom(arrayValueRoom)
}, [token]);
///




  // const getDataRoom = useAsync(async () => {
  //   let res = await axios.get(
  //     "http://localhost:8000/bill/viewsta",
   
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );
  //   res = await res
  //   const dataOb=res.data.data
  //   //chuyển từ object sang array
  //   const arrayNameRoom = Object.keys(dataOb);
  //     //chuyển từ object sang array
  //   const arrayValueRoom = Object.values(dataOb);
  //   setStaticRoom(arrayNameRoom)
  //   setStaticValueRoom(arrayValueRoom)
  // }, [token]);

//lấy dữ liệu thống kê của web trong 30 ngày
  const getDataByMonth = useAsync(async () => {
    let res = await axios.post(
      "http://localhost:8000/bill/getByMoth?by=m",
      "",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      getDataByMonth: res.data.data,
    };
  }, [token]);

//lấy dữ liệu thống kê của web trong 7 ngày
  const getDataByWeek = useAsync(async () => {
    let res = await axios.post(
      "http://localhost:8000/bill/getByMoth?by=d",
      "",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      getDataByWeek: res.data.data,
    };
  }, [token]);

//lấy dữ liệu thống kê của web trong 1 ngày
  const getDataByDay = useAsync(async () => {
    let res = await axios.post(
      "http://localhost:8000/bill/getByMoth?by=h",
      "",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      getDataByDay: res.data.data,
    };
  }, [token]);


  const dataDay =
    getDataByDay.loading === false ? getDataByDay.value.getDataByDay : 0;
  const dataWeek =
    getDataByWeek.loading === false ? getDataByWeek.value.getDataByWeek : 0;
  const dataMonth =
    getDataByMonth.loading === false ? getDataByMonth.value.getDataByMonth : 0;

  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});



  const [chartDataRoom, setChartDataRoom] = useState({
    datasets: [],
  });

  const [chartOptionsRoom, setChartOptionsRoom] = useState({});


  useEffect(() => {
  if(!!token){

    getDataBill()
  }
    setChartDataRoom({
      //tên cột theo từng room
      labels: staticRoom,
      //data cột theo từng room
      datasets: [
        {
          label: "Thống kê doanh số theo phòng",
          data: staticValueRoom,
          borderColor: "rgb(53,162,235)",
          backgroundColor: "rgba(53,162,235,0.4)",
        },
      ],
    });
    setChartOptionsRoom({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Doanh số theo Phòng",
        },
      },
    });



///////////////////////////




    setChartData({
      labels: ["Total 30 days ", "Total 7 days", "Total 1 days"],
      datasets: [
        {
          label: "Thống kê doanh số ",
          data: [dataMonth, dataWeek, dataDay],
          borderColor: "rgb(53,162,235)",
          backgroundColor: "rgba(53,162,235,0.4)",
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Doanh số theo ngày",
        },
      },
    });
  }, [getDataByDay]);

  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-start mb-4">
        <h1 className="h3 mb-0 text-dark-800 font-weight-bold ">Thống Kê</h1>
        <FadeLoader
          className="justify-content-center hight-load load-spinner   ml-5 "
          color="#007bff"
          loading={getDataByMonth.loading}
          data-testid="loader"
          size={6}
          speedMultiplier={1}
        />
      </div>

      <Bar options={chartOptions} data={chartData} />
      <hr/>
      <Bar options={chartOptionsRoom} data={chartDataRoom} />

    </div>
  );
}

export default memo(Statistic) ;
