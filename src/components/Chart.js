import React, { useEffect } from "react";
// npm i chart.js
import Chart from "chart.js";
const Grafico = () => {
  const cr = React.createRef();
  useEffect(() => {
    const ctx = cr.current.getContext("2d");
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ["React", "Vue", "Vanillajs", "Php", "Html", "Css"],
        datasets: [
          {
            label: ["React", "Vue", "Vanillajs", "Php", "Html", "Css"],
            data: [20, 65, 80, 80, 95, 90],
            backgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235,1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255,1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  });

  return <canvas ref={cr} width="300px" height="100vh"></canvas>;
};

export default Grafico;
