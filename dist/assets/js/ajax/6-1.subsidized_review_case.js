$.ajax({
    type: 'GET',
    url: '../datasample/6.subsidized_review_case.json',
    dataType: 'json',
    async: false ,
    success: function (response) {
      const operators= []
      operators.push(...response.subsidizedPending)
      createDomElement(operators)
    },
    error: function (thrownError) {
      console.log(thrownError)
    },
  })

  function createDomElement(operators) {
    const domElements = operators
    .map((item) => {
        var a=item.recycleNew;  
        var b=item.recycleChange;  
        var c=item.recycleExtend;  
        var d=item.recycleReview;  
        var e=item.dealWithNew;  
        var f=item.dealWithChange;  
        var g=item.dealWithExtend;  
        var h=item.dealWithReview;  
        var k = Number(a) + Number(b) + Number(c) + Number(d) + Number(e) + Number(f) + Number(g) + Number(h); 
        return `
        <!--begin::Header-->
        <div class="card-header border-0 pt-6">
            <h3 class="card-title align-items-start flex-column">
                <span class="card-label font-weight-bolder font-size-h2 text-dark-75">
                    <a href="#" class="btn btn-light-danger font-weight-bold mr-2 disabled"
                        aria-disabled="true">受補貼</a>待審案件
                </span>
                <span class="text-muted mt-3 font-weight-bold font-size-lg">共 ${k} 件</span>
            </h3>
        </div>
        <!--end::Header-->
        <!--begin::Body-->
        <div class="card-body pt-6">
            <!--begin::Nav-->
            <ul class="nav nav-pills nav-fill flex-nowrap justify-content-between">
                <!--begin::Nav Item-->
                <li class="nav-item w-90px">
                    <a class="nav-link active d-flex flex-column shadow-sm h-80px" data-toggle="tab"
                        href="#kt_tab_mixed_3_1">
                        <span class="nav-icon">
                            <span class="svg-icon">
                                <span class="svg-icon svg-icon-xxl">
                                    <!--begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg-->
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                                        height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect x="0" y="0" width="24" height="24"></rect>
                                            <rect fill="#000000" opacity="0.3" x="13" y="4" width="3"
                                                height="16" rx="1.5"></rect>
                                            <rect fill="#000000" x="8" y="9" width="3" height="11" rx="1.5">
                                            </rect>
                                            <rect fill="#000000" x="18" y="11" width="3" height="9"
                                                rx="1.5">
                                            </rect>
                                            <rect fill="#000000" x="3" y="13" width="3" height="7" rx="1.5">
                                            </rect>
                                        </g>
                                    </svg>
                                    <!--end::Svg Icon-->
                                </span>
                            </span>
                        </span>
                        <span class="nav-text pt-3 font-weight-bold">回收業</span>
                    </a>
                </li>
                <!--begin::Nav Item-->
                <!--end::Nav Item-->
                <li class="nav-item w-90px mx-5">
                    <a class="nav-link d-flex flex-column shadow-sm h-80px" data-toggle="tab"
                        href="#kt_tab_mixed_3_2">
                        <span class="nav-icon">
                            <span class="svg-icon">
                                <span class="svg-icon svg-icon-xxl">
                                    <!--begin::Svg Icon | path:assets/media/svg/icons/Home/Library.svg-->
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                                        height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect x="0" y="0" width="24" height="24"></rect>
                                            <path
                                                d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
                                                fill="#000000"></path>
                                            <rect fill="#000000" opacity="0.3"
                                                transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)"
                                                x="16.3255682" y="2.94551858" width="3" height="18" rx="1">
                                            </rect>
                                        </g>
                                    </svg>
                                    <!--end::Svg Icon-->
                                </span>
                            </span>
                        </span>
                        <span class="nav-text pt-3 font-weight-bold">處理業</span>
                    </a>
                </li>
                <!--begin::Nav Item-->

            </ul>
            <!--end::Nav-->
            <!--begin::Tab Content-->
            <div class="tab-content mt-9" id="myTabMixed2">
                <!--begin::Tab Pane-->
                <div class="tab-pane fade active show" id="kt_tab_mixed_3_1" role="tabpanel"
                    aria-labelledby="kt_tab_mixed_3_1">
                    <!--begin::Item-->
                    <div class="d-flex align-items-center justify-content-between mb-6">
                        <!--begin::Text-->
                        <div class="d-flex align-items-center">
                            <a href="#" class="btn btn-light-success pulse pulse-primary mr-5">
                                &nbsp;&nbsp;&nbsp;&nbsp;NEW&nbsp;&nbsp;&nbsp;&nbsp;
                            </a>
                            <a href="#"
                                class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">新登記</a>
                        </div>
                        <!--end::Text-->
                        <!--begin::text-->
                        <div class="d-flex align-items-center">
                            <span class="label pulse mr-10">
                                <span class="position-relative">${item.recycleNew}</span>
                                <span class="pulse-ring"></span>
                            </span>
                        </div>
                        <!--end::text-->
                    </div>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <div class="d-flex align-items-center justify-content-between mb-6">
                        <!--begin::Text-->
                        <div class="d-flex align-items-center">
                            <a href="#" class="btn  btn-light-warning pulse pulse-primary mr-5">
                                CHANGE
                            </a>
                            <a href="#"
                                class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">變更登記</a>
                        </div>
                        <!--end::Text-->
                        <!--begin::text-->
                        <div class="d-flex align-items-center">
                            <span class="label pulse mr-10">
                                <span class="position-relative">${item.recycleChange}</span>
                                <span class="pulse-ring"></span>
                            </span>
                        </div>
                        <!--end::text-->
                    </div>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <div class="d-flex align-items-center justify-content-between mb-6">
                        <!--begin::Text-->
                        <div class="d-flex align-items-center">
                            <a href="#" class="btn  btn-light-danger pulse pulse-primary mr-6">
                                &nbsp;EXTEND&nbsp;
                            </a>
                            <a href="#"
                                class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">展延登記</a>
                        </div>
                        <!--end::Text-->
                        <!--begin::text-->
                        <div class="d-flex align-items-center">
                            <span class="label pulse mr-10">
                                <span class="position-relative">${item.recycleExtend}</span>
                                <span class="pulse-ring"></span>
                            </span>
                        </div>
                        <!--end::text-->
                    </div>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <div class="d-flex align-items-center justify-content-between mb-6">
                        <!--begin::Text-->
                        <div class="d-flex align-items-center">
                            <a href="#" class="btn  btn-light-primary pulse pulse-primary mr-5">
                                &nbsp;REVIEW&nbsp;
                            </a>
                            <a href="#"
                                class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">申請覆核</a>
                        </div>
                        <!--end::Text-->
                        <!--begin::text-->
                        <div class="d-flex align-items-center">
                            <span class="label pulse mr-10">
                                <span class="position-relative">${item.recycleReview}</span>
                                <span class="pulse-ring"></span>
                            </span>
                        </div>
                        <!--end::text-->
                    </div>
                    <!--end::Item-->

                </div>
                <!--end::Tab Pane-->
                <!--begin::Tab Pane-->
                <div class="tab-pane fade" id="kt_tab_mixed_3_2" role="tabpanel"
                    aria-labelledby="kt_tab_mixed_3_2">
                    <!--begin::Item-->
                    <div class="d-flex align-items-center justify-content-between mb-6">
                        <!--begin::Text-->
                        <div class="d-flex align-items-center">
                            <a href="#" class="btn btn-light-success pulse pulse-primary mr-5">
                                &nbsp;&nbsp;&nbsp;&nbsp;NEW&nbsp;&nbsp;&nbsp;&nbsp;
                            </a>
                            <a href="#"
                                class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">新登記</a>
                        </div>
                        <!--end::Text-->
                        <!--begin::text-->
                        <div class="d-flex align-items-center">
                            <span class="label pulse mr-10">
                                <span class="position-relative">${item.dealWithNew}</span>
                                <span class="pulse-ring"></span>
                            </span>
                        </div>
                        <!--end::text-->
                    </div>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <div class="d-flex align-items-center justify-content-between mb-6">
                        <!--begin::Text-->
                        <div class="d-flex align-items-center">
                            <a href="#" class="btn  btn-light-warning pulse pulse-primary mr-5">
                                CHANGE
                            </a>
                            <a href="#"
                                class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">變更登記</a>
                        </div>
                        <!--end::Text-->
                        <!--begin::text-->
                        <div class="d-flex align-items-center">
                            <span class="label pulse mr-10">
                                <span class="position-relative">${item.dealWithChange}</span>
                                <span class="pulse-ring"></span>
                            </span>
                        </div>
                        <!--end::text-->
                    </div>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <div class="d-flex align-items-center justify-content-between mb-6">
                        <!--begin::Text-->
                        <div class="d-flex align-items-center">
                            <a href="#" class="btn  btn-light-danger pulse pulse-primary mr-6">
                                &nbsp;EXTEND&nbsp;
                            </a>
                            <a href="#"
                                class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">展延登記</a>
                        </div>
                        <!--end::Text-->
                        <!--begin::text-->
                        <div class="d-flex align-items-center">
                            <span class="label pulse mr-10">
                                <span class="position-relative">${item.dealWithExtend}</span>
                                <span class="pulse-ring"></span>
                            </span>
                        </div>
                        <!--end::text-->
                    </div>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <div class="d-flex align-items-center justify-content-between mb-6">
                        <!--begin::Text-->
                        <div class="d-flex align-items-center">
                            <a href="#" class="btn  btn-light-primary pulse pulse-primary mr-5">
                                &nbsp;REVIEW&nbsp;
                            </a>
                            <a href="#"
                                class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">申請覆核</a>
                        </div>
                        <!--end::Text-->
                        <!--begin::text-->
                        <div class="d-flex align-items-center">
                            <span class="label pulse mr-10">
                                <span class="position-relative">${item.dealWithReview}</span>
                                <span class="pulse-ring"></span>
                            </span>
                        </div>
                        <!--end::text-->
                    </div>
                    <!--end::Item-->
                </div>
                <!--end::Tab Pane-->
    `
      })
      .join('')

    const list_of_operators = document.querySelector('.subsidizedPending')
    list_of_operators.innerHTML = domElements
  }



