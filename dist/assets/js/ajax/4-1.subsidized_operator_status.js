
  $.ajax({
    type: 'GET',
    url: '../datasample/4-1.subsidized_operator_status.json',
    dataType: 'json',
    async: false ,
    success: function (response) {
      const localTotal= []
      localTotal.push(...response.subsidizedRegistry)
      createDomElement(localTotal,'subsidized_operator')
    },
    error: function (thrownError) {
      console.log(thrownError)
    },
  })
  
  function createDomElement(localTotal,elName) {
    console.log(elName)
    const domElements = localTotal
    .map((item) => {
      let i=item.recycle;  
      let j=item.dealwith;  
      let k = Number(i) + Number(j); 
        return `
  
        <!--begin::Chart-->
        <div class="d-flex flex-center position-relative">
          <div class="chartjs-size-monitor">
            <div class="chartjs-size-monitor-expand">
              <div class=""></div>
            </div>
            <div class="chartjs-size-monitor-shrink">
              <div class=""></div>
            </div>
          </div>
          <div class="font-weight-bolder font-size-h2 text-dark-75 position-absolute" id="localTotalQuantity">${k} 家 
          </div>
          <canvas id="kt_stats_widget_2_2_chart"
            style="height: 130px; width: 130px; display: block;" width="110" height="110"
            class="chartjs-render-monitor"></canvas>
        </div>
        <!--end::Chart-->
        <!--begin::legends-->
        <div class="d-flex flex-column mr-4 mt-3">
          <!--begin::legend-->
          <div class="legend d-flex align-items-center py-1">
            <span class="label label-dot label-danger mr-2"></span>
            <span id="localRecycleQuantity" class="font-weight-bolder font-size-lg text-muted">回收業 ${item.recycle} 家</span>
          </div>
          <!--end::legend-->
          <!--begin::legend-->
          <div class="legend d-flex align-items-center py-1">
            <span class="label label-dot label-primary mr-2"></span>
            <span class="font-weight-bolder font-size-lg text-muted">處理業 ${item.dealwith} 家</span>
          </div>
          <!--end::legend-->
        </div>
                              
    `
      })
      .join('')
  
    const Quantity = document.querySelector(`.${elName}`)
    console.log(Quantity)
    Quantity.innerHTML = domElements
  
  }

  // 圖表
  
  var _initStatsWidget2_2 =  async function () {
    var element = document.getElementById("kt_stats_widget_2_2_chart");

    if (!element) {
      return;
    }

    var randomScalingFactor = function () {
      return Math.round(Math.random() * 100);
    };

    let url = '../datasample/4-1.subsidized_operator_status.json';
    let data2 = {}
    await $.getJSON(url, function (response) {
      data2 = response.subsidizedRegistry[0]
    });
    console.log(data2)

    var config = {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [data2.recycle,data2.dealwith],
            backgroundColor: [
              KTApp.getSettings()["colors"]["theme"]["base"]["danger"],
              KTApp.getSettings()["colors"]["theme"]["base"]["primary"],
            ],
          },
        ],
        labels: ["回收業", "處理業"],
      },
      options: {
        cutoutPercentage: 75,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
          position: "bottom",
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
        //     KTApp.getSettings()["colors"]["theme"]["base"]["danger"],
          
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
