

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
    let chart_data =[{data:response.data.recycle}]
    response.data.dealwith.map((item,index)=>{chart_data[0].data[index].y=parseInt(chart_data[0].data[index].y)+parseInt(item.y)}) 
    console.log(chart_data)
    subsidyChart1.updateSeries(chart_data);
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
    let chart_data2 =[{data:response.data.recycle}]
    response.data.dealwith.map((item,index)=>{chart_data2[0].data[index].y=parseInt(chart_data2[0].data[index].y)+parseInt(item.y)}) 
    console.log(chart_data2)
    subsidyChart2.updateSeries(chart_data2);
  });

  // var url = '../datasample/4-2.subsidized_operator_status.json';
  // $.getJSON(url, function (response) {
  //   subsidyChart2.updateSeries(response);
  // });
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


  // Class definition
var KTWidgets = (function () {
  // Private functions
  var _daterangepickerInit = function () {
    if ($("#kt_dashboard_daterangepicker").length == 0) {
      return;
    }

    var picker = $("#kt_dashboard_daterangepicker");
    var start = moment();
    var end = moment();

    function cb(start, end, label) {
      var title = "";
      var range = "";

      if (end - start < 100 || label == "Today") {
        title = "Today:";
        range = start.format("MMM D");
      } else if (label == "Yesterday") {
        title = "Yesterday:";
        range = start.format("MMM D");
      } else {
        range = start.format("MMM D") + " - " + end.format("MMM D");
      }

      picker.find("#kt_dashboard_daterangepicker_date").html(range);
      picker.find("#kt_dashboard_daterangepicker_title").html(title);
    }

    picker.daterangepicker(
      {
        direction: KTUtil.isRTL(),
        startDate: start,
        endDate: end,
        opens: "left",
        applyClass: "btn btn-sm btn-primary",
        cancelClass: "btn btn-sm btn-secondary",
        ranges: {
          Today: [moment(), moment()],
          Yesterday: [
            moment().subtract(1, "days"),
            moment().subtract(1, "days"),
          ],
          "Last 7 Days": [moment().subtract(6, "days"), moment()],
          "Last 30 Days": [moment().subtract(29, "days"), moment()],
          "This Month": [moment().startOf("month"), moment().endOf("month")],
          "Last Month": [
            moment().subtract(1, "month").startOf("month"),
            moment().subtract(1, "month").endOf("month"),
          ],
        },
      },
      cb
    );

    cb(start, end, "");
  };

  // Stats widgets
  var _initStatsWidget2_1 = async function () {
    var element = document.getElementById("kt_stats_widget_2_1_chart");

    if (!element) {
      return;
    }

    var randomScalingFactor = function () {
      return Math.round(Math.random() * 100);
    };

    let url = '../datasample/3-1.local_operator_status.json';
    let data1 = {}
    await $.getJSON(url, function (response) {
      data1 = response.localRegistry[0]
    });
    console.log(data1)

    var config = {
      type: "doughnut",
      data: {
        datasets: [
          {
            data:[data1.recycle,data1.dealwith],
            backgroundColor: [
                KTApp.getSettings()["colors"]["theme"]["base"]["danger"],
                KTApp.getSettings()["colors"]["theme"]["base"]["primary"],
            ],
          },
        ],
        labels: ["回收", "處理業"],
      },
      options: {
        cutoutPercentage: 75,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
          position: "top",
        },
        title: {
          display: false,
          text: "Technology",
        },
        animation: {
          animateScale: true,
          animateRotate: true,
        },
        tooltips: {
          enabled: true,
          intersect: false,
          mode: "nearest",
          bodySpacing: 5,
          yPadding: 10,
          xPadding: 10,
          caretPadding: 0,
          displayColors: false,
        //   backgroundColor:
        //     KTApp.getSettings()["colors"]["theme"]["base"]["primary"],
          titleFontColor: "#ffffff",
          cornerRadius: 4,
          footerSpacing: 0,
          titleSpacing: 0,
        },
      },
    };

    var ctx = element.getContext("2d");
    var myDoughnut = new Chart(ctx, config);
  };

  
  
  
  // Public functions
  return {
    init: function () {
      // Init Daterangepicker
      _daterangepickerInit();

      // Init Stats Widgets
      _initStatsWidget2_1();
      _initStatsWidget2_2();




    },
  };
})();

// Webpack support
if (typeof module !== "undefined") {
  module.exports = KTWidgets;
}

jQuery(document).ready(function () {
  KTWidgets.init();
});


