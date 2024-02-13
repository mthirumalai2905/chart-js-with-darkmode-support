import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import './App.css';


const App = () => {
  const jsChartRef = useRef(null);
  const pythonChartRef = useRef(null);
  const javaChartRef = useRef(null);
  const phpChartRef = useRef(null);
  const radarChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const scatterChartRef = useRef(null);
  const polarChartRef = useRef(null);
  const areaChartRef = useRef(null);
  const bubbleChartRef = useRef(null);

  const [backgroundColor, setBackgroundColor] = useState('black');


  const toggleBackgroundColor = () => {
    document.body.classList.toggle('body-white');
  };


  useEffect(() => {
    // JavaScript Frameworks Chart
    const jsCtx = jsChartRef.current.getContext('2d');
    const jsChart = new Chart(jsCtx, {
      type: 'bar',
      data: {
        labels: ['React', 'Angular', 'Vue.js', 'jQuery', 'Node.js', 'Express.js'],
        datasets: [{
          label: 'Popularity of JavaScript Frameworks',
          data: [80, 65, 70, 55, 60, 45],
          borderWidth: 1,
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ]
        }]
      },
      options: {
        animation: {
          duration: 3000 // Set animation duration to 2 seconds
      },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              padding: 10
            },
            scaleLabel: {
              display: true,
              labelString: 'Popularity (%)',
              padding: {
                top: 15
              }
            }
          },
          x: {
            ticks: {
              padding: 10
            },
            scaleLabel: {
              display: true,
              labelString: 'JavaScript Frameworks',
              padding: {
                top: 15
              }
            }
          }
        },
        layout: {
          padding: {
            top: 20,
            right: 20,
            bottom: 80,
            left: 20
          }
        }
      }
    });

    // Python Frameworks Chart
    const pythonCtx = pythonChartRef.current.getContext('2d');
    const pythonChart = new Chart(pythonCtx, {
      type: 'bar',
      data: {
        labels: ['Django', 'Flask', 'Pyramid', 'FastAPI', 'Tornado', 'Bottle'],
        datasets: [{
          label: 'Popularity of Python Frameworks',
          data: [75, 60, 45, 80, 30, 25],
          borderWidth: 1,
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ]
        }]
      },
      options: {
        animation: {
          duration: 3000 // Set animation duration to 2 seconds
      },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              padding: 10
            },
            scaleLabel: {
              display: true,
              labelString: 'Popularity (%)',
              padding: {
                top: 15
              }
            }
          },
          x: {
            ticks: {
              padding: 10
            },
            scaleLabel: {
              display: true,
              labelString: 'Python Frameworks',
              padding: {
                top: 15
              }
            }
          }
        },
        layout: {
          padding: {
            top: 20,
            right: 20,
            bottom: 80,
            left: 20
          }
        }
      }
    });

    // Java Frameworks Chart
    const javaCtx = javaChartRef.current.getContext('2d');
    const javaChart = new Chart(javaCtx, {
      type: 'bar',
      data: {
        labels: ['Spring', 'Hibernate', 'Struts', 'JSF', 'Vaadin', 'Dropwizard'],
        datasets: [{
          label: 'Popularity of Java Frameworks',
          data: [70, 50, 40, 30, 25, 20],
          borderWidth: 1,
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ]
        }]
      },
      options: {
        animation: {
          duration: 3000 // Set animation duration to 2 seconds
      },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              padding: 10
            },
            scaleLabel: {
              display: true,
              labelString: 'Popularity (%)',
              padding: {
                top: 15
              }
            }
          },
          x: {
            ticks: {
              padding: 10
            },
            scaleLabel: {
              display: true,
              labelString: 'Java Frameworks',
              padding: {
                top: 15
              }
            }
          }
        },
        layout: {
          padding: {
            top: 20,
            right: 20,
            bottom: 80,
            left: 20
          }
        }
      }
    });

    // PHP Frameworks Chart
    const phpCtx = phpChartRef.current.getContext('2d');
    const phpChart = new Chart(phpCtx, {
      type: 'bar',
      data: {
        labels: ['Laravel', 'Symfony', 'CodeIgniter', 'Yii', 'CakePHP', 'Zend'],
        datasets: [{
          label: 'Popularity of PHP Frameworks',
          data: [80, 60, 50, 40, 35, 30],
          borderWidth: 1,
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ]
        }]
      },
      options: {
        animation: {
          duration: 3000 // Set animation duration to 2 seconds
      },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              padding: 10
            },
            scaleLabel: {
              display: true,
              labelString: 'Popularity (%)',
              padding: {
                top: 15
              }
            }
          },
          x: {
            ticks: {
              padding: 10
            },
            scaleLabel: {
              display: true,
              labelString: 'PHP Frameworks',
              padding: {
                top: 15
              }
            }
          }
        },
        layout: {
          padding: {
            top: 20,
            right: 20,
            bottom: 80,
            left: 20
          }
        }
      }
    });

    // Radar Chart
    const radarCtx = radarChartRef.current.getContext('2d');
    const radarChart = new Chart(radarCtx, {
      type: 'radar',
      data: {
        labels: ['React', 'Angular', 'Vue.js', 'jQuery', 'Node.js', 'Express.js'],
        datasets: [
          {
            label: 'JavaScript',
            data: [80, 65, 70, 55, 60, 45],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Java',
            data: [70, 50, 40, 30, 25, 20],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Python',
            data: [75, 60, 45, 80, 30, 25],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: 'PHP',
            data: [80, 60, 50, 40, 35, 30],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        animation: {
          duration: 3000 // Set animation duration to 2 seconds
      },
        scales: {
          r: {
            angleLines: {
              display: true,
            },
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      },
    });
// Pie Chart
const pieCtx = pieChartRef.current.getContext('2d');
const pieChart = new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: ['React', 'Angular', 'Vue.js', 'jQuery', 'Node.js', 'Express.js'],
    datasets: [{
      label: 'Popularity of JavaScript Frameworks',
      data: [80, 65, 70, 55, 60, 45],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    animation: {
      duration: 3000 // Set animation duration to 2 seconds
  },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Scatter Plot
const scatterCtx = scatterChartRef.current.getContext('2d');
const scatterChart = new Chart(scatterCtx, {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'Scatter Dataset',
      data: [
        { x: 10, y: 20 },
        { x: 15, y: 10 },
        { x: 25, y: 15 },
        { x: 30, y: 25 },
        { x: 35, y: 30 },
        { x: 40, y: 35 },
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    animation: {
      duration: 3000 // Set animation duration to 2 seconds
  },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      },
      y: {
        min: 0
      }
    }
  }
});

 // Polar Chart
 const polarCtx = polarChartRef.current.getContext('2d');
 const polarChart = new Chart(polarCtx, {
   type: 'polarArea',
   data: {
     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
     datasets: [{
       label: 'Polar Area Dataset',
       data: [11, 16, 7, 3, 14, 20],
       backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)'
       ],
       borderColor: [
         'rgba(255, 99, 132, 1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)'
       ],
       borderWidth: 1
     }]
   },
   options: {
    animation: {
      duration: 3000 // Set animation duration to 2 seconds
  },
     scales: {
       r: {
         suggestedMin: 0,
         suggestedMax: 25
       }
     }
   }
 });

 // Area Chart
 const areaCtx = areaChartRef.current.getContext('2d');
 const areaChart = new Chart(areaCtx, {
   type: 'line',
   data: {
     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
     datasets: [{
       label: 'My First Dataset',
       data: [65, 59, 80, 81, 56, 55, 40],
       fill: true,
       backgroundColor: 'rgba(75, 192, 192, 0.2)',
       borderColor: 'rgba(75, 192, 192, 1)',
       tension: 0.1
     }]
   }
 });

 // Bubble Chart
 const bubbleCtx = bubbleChartRef.current.getContext('2d');
 const bubbleChart = new Chart(bubbleCtx, {
   type: 'bubble',
   data: {
     datasets: [{
       label: 'Bubble Dataset',
       data: [
         { x: 10, y: 20, r: 4 },
         { x: 15, y: 10, r: 8 },
         { x: 25, y: 15, r: 12 },
         { x: 30, y: 25, r: 16 },
         { x: 35, y: 30, r: 20 },
         { x: 40, y: 35, r: 24 },
       ],
       backgroundColor: 'rgba(255, 99, 132, 0.2)',
       borderColor: 'rgba(255, 99, 132, 1)',
       borderWidth: 1
     }]
   },
   options: {
    animation: {
      duration: 3000 // Set animation duration to 2 seconds
  },
     scales: {
       x: {
         min: 0,
         max: 50,
       },
       y: {
         min: 0,
         max: 50,
       }
     }
   }
 });

 return () => {
   jsChart.destroy();
   pythonChart.destroy();
   javaChart.destroy();
   phpChart.destroy();
   radarChart.destroy();
   pieChart.destroy();
   scatterChart.destroy();
   polarChart.destroy();
   areaChart.destroy();
   bubbleChart.destroy();
 };
}, []);


  return (
    <div className="container">
     <button  className="toggle-button" onClick={toggleBackgroundColor}>Change Modes</button>
    <div className='bar-g'>
    <div className="chart-wrapper">
      <canvas ref={jsChartRef} className="chart-canvas" style={{ height: '400px' }}></canvas>
    </div>
    <div className="chart-wrapper">
      <canvas ref={pythonChartRef} className="chart-canvas" style={{ height: '400px' }}></canvas>
    </div>
    <div className="chart-wrapper">
      <canvas ref={javaChartRef} className="chart-canvas" style={{ height: '400px' }}></canvas>
    </div>
    <div className="chart-wrapper">
      <canvas ref={phpChartRef} className="chart-canvas" style={{ height: '400px' }}></canvas>
    </div>
  </div>
  
      <div className='various'>
      <div className="chart-wrapper-radar">
        <canvas ref={radarChartRef} className="chart-canvas"></canvas>
      </div>
      <div className="chart-wrapper">
      <canvas ref={pieChartRef} className="chart-canvas"></canvas>
    </div>
    <div className="chart-wrapper">
      <canvas ref={scatterChartRef} className="chart-canvas"></canvas>
    </div>
      </div>
      <div className='other'>
      <div className="chart-wrapper">
        <canvas ref={polarChartRef} className="chart-canvas"></canvas>
      </div>
      <div className="chart-wrapper">
        <canvas ref={areaChartRef} className="chart-canvas"></canvas>
      </div>
      <div className="chart-wrapper">
        <canvas ref={bubbleChartRef} className="chart-canvas"></canvas>
      </div>
      </div>
    </div>
  );
};

export default App;
