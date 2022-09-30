

// begin::subsidyChart1 Scripts
var subsidyChartOptions1 = {
    series: [],
    chart: {
      type: "bar",
    },
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        barHeight: "100%",
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: "bottom",
        },
      },
    },
    colors: [
      "#33b2df",
      "#546E7A",
      "#d4526e",
      "#13d8aa",
      "#A5978B",
      "#2b908f",
      "#f9a3a4",
      "#f48024",
    ],
    dataLabels: {
      enabled: true,
      textAnchor: "start",
      style: {
        colors: ["#fff"],
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + " " + val;
      },
      offsetX: 0,
    //   dropShadow: {
    //     enabled: true,
    //   },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
    },
  };
  var subsidyChart1 = new ApexCharts(
    document.querySelector("#subsidyChart1"),
    subsidyChartOptions1
  );
  subsidyChart1.render();
    
  var url = '../datasample/3-2.local_operator_status.json';
  $.getJSON(url, function (response) {
    subsidyChart1.updateSeries(response);
  });
// end::subsidyChart1 Scripts

// begin::caseChart1 Scripts
var caseOptions1 = {
    series: [],
    chart: {
      height: 300,
      type: "area",
      toolbar: {
        show: true,
  
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false | '<img src="/static/icons/reset.png" width="20">',
          customIcons: [],
        },
        export: {
          svg: {
            filename: "案件決策支援圖",
          },
          csv: {
            filename: "案件決策支援統計表",
            columnDelimiter: ",",
            headerCategory: "category",
            headerValue: "value",
            dateFormatter(timestamp) {
              return new Date(timestamp).toDateString();
            },
          },
          png: {
            filename: "案件決策支援圖",
          },
        },
        autoSelected: "zoom",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
    tooltip: {
      x: {
        format: "dd/MM",
      },
    },
  };
  var caseChart1 = new ApexCharts(
    document.querySelector("#caseChart1"),
    caseOptions1
  );
  caseChart1.render();
  
  
  var url = '../datasample/3-3.local_operator_status.json';
  $.getJSON(url, function (response) {
    caseChart1.updateSeries(response);
  });

// end::caseChart1 Scripts

// begin::subsidyChart1 Scripts
var subsidyChartOptions2 = {
    series: [],
    chart: {
      type: "bar",
    },
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        barHeight: "100%",
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: "bottom",
        },
      },
    },
    colors: [
      "#33b2df",
      "#546E7A",
      "#d4526e",
      "#13d8aa",
      "#A5978B",
      "#2b908f",
      "#f9a3a4",
      "#f48024",
    ],
    dataLabels: {
      enabled: true,
      textAnchor: "start",
      style: {
        colors: ["#fff"],
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + " " + val;
      },
      offsetX: 0,
    //   dropShadow: {
    //     enabled: true,
    //   },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
    },
  };
  var subsidyChart2 = new ApexCharts(
    document.querySelector("#subsidyChart2"),
    subsidyChartOptions1
  );
  subsidyChart2.render();
    
  var url = '../datasample/4-2.subsidized_operator_status.json';
  $.getJSON(url, function (response) {
    subsidyChart2.updateSeries(response);
  });
// end::subsidyChart2 Scripts

// begin::caseChart2 Scripts
  var caseOptions2 = {
    series: [],
    chart: {
      height: 300,
      type: "area",
      toolbar: {
        show: true,
  
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false | '<img src="/static/icons/reset.png" width="20">',
          customIcons: [],
        },
        export: {
          svg: {
            filename: "案件決策支援圖",
          },
          csv: {
            filename: "案件決策支援統計表",
            columnDelimiter: ",",
            headerCategory: "category",
            headerValue: "value",
            dateFormatter(timestamp) {
              return new Date(timestamp).toDateString();
            },
          },
          png: {
            filename: "案件決策支援圖",
          },
        },
        autoSelected: "zoom",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
    tooltip: {
      x: {
        format: "dd/MM",
      },
    },
  };
  var caseChart2 = new ApexCharts(
    document.querySelector("#caseChart2"),
    caseOptions2
  );
  caseChart2.render();

  
  var url = '../datasample/4-3.subsidized_operator_status.json';
  $.getJSON(url, function (response) {
    caseChart2.updateSeries(response);
  });
  
  // end::caseChart2 Scripts