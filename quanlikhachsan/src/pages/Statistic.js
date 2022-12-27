import React, { useState, useEffect, useCallback } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Statistic() {
  const token = JSON.parse(localStorage.getItem("token"));

const getDataByMonth = useAsync (async () => {
    let res = await axios.post("http://localhost:8000/bill/getByMoth?by=m","", {
     headers: {
       "Content-Type": "application/json",
       Authorization: `Bearer ${token}`,
     },
   });
   return {
       getDataByMonth: res.data.data,
   };
 }, [token]);

const getDataByWeek = useAsync (async () => {
    let res = await axios.post("http://localhost:8000/bill/getByMoth?by=d","", {
     headers: {
       "Content-Type": "application/json",
       Authorization: `Bearer ${token}`,
     },
   });
   return {
       getDataByWeek: res.data.data,
   };
 }, [token]);

  const getDataByDay = useAsync (async () => {
    let res = await axios.post("http://localhost:8000/bill/getByMoth?by=h","", {
     headers: {
       "Content-Type": "application/json",
       Authorization: `Bearer ${token}`,
     },
   });
   return {
       getDataByDay: res.data.data,
   };
 }, [token]);


const dataDay=getDataByDay.loading===false? getDataByDay.value.getDataByDay:0
const dataWeek=getDataByWeek.loading===false? getDataByWeek.value.getDataByWeek:0
const dataMonth=getDataByMonth.loading===false? getDataByMonth.value.getDataByMonth:0




  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {

    setChartData({
      labels: ["Total 30 days ", "Total 7 days", "Total 1 days"],
      datasets: [
        {
          label: "Thống kê doanh số ",
          data: [dataDay, dataWeek, dataMonth],
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
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-dark-800 font-weight-bold ">Thống Kê</h1>
      </div>

      <Bar options={chartOptions} data={chartData} />
    </div>
  );
}

export default Statistic;
