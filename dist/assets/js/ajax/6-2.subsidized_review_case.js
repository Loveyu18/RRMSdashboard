$.ajax({
    type: 'GET',
    url: '../datasample/6.subsidized_review_case.json',
    dataType: 'json',
    async: false ,
    success: function (response) {
      const operators= []
      operators.push(...response.subsidizedUntrial)
      createDomElement(operators)
    },
    error: function (thrownError) {
      console.log(thrownError)
    },
  })

  function createDomElement(operators) {
    const domElements = operators
    .map((item) => {
        let a=item.recycleOverdue;  
        let b=item.recycleOverdue7;  
        let c=item.recycleOverdue14;  
        let d=item.recycleOverdue30;  
        let e=item.dealWithOverdue;  
        let f=item.dealWithOverdue7;  
        let g=item.dealWithOverdue14;  
        let h=item.dealWithOverdue30;  
        let k = Number(a) + Number(b) + Number(c) + Number(d) + Number(e) + Number(f) + Number(g) + Number(h); 
        return `
        <!--begin::Header-->
					<div class="card-header border-0  pt-6 pr-0">
						<h3 class="card-title align-items-start flex-column">
							<span class="card-label font-weight-bolder font-size-h2 text-dark-75">
								<a href="#" class="btn btn-light-danger font-weight-bold mr-2 disabled"
									aria-disabled="true">受補貼</a> 未審案件預警
							</span>
							<span class="text-muted mt-3 font-weight-bold font-size-lg">共 ${k} 件</span>
						</h3>
					</div>
					<!--end::Header-->
					<!--begin::Body-->
					<div class="card-body  pt-6 pr-1">
						<!--begin::Nav-->
						<ul class="nav nav-pills nav-fill flex-nowrap justify-content-between">
							<!--begin::Nav Item-->
							<li class="nav-item w-90px">
								<a class="nav-link active d-flex flex-column shadow-sm h-80px" data-toggle="tab"
									href="#kt_tab_mixed_4_1">
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
									href="#kt_tab_mixed_4_2">
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
							<div class="tab-pane fade active show" id="kt_tab_mixed_4_1" role="tabpanel"
								aria-labelledby="kt_tab_mixed_4_1">
								<!--begin::Item-->
								<div class="d-flex align-items-center justify-content-between mb-6">

									<!--begin::Text-->
									<div class="d-flex align-items-center">
										<!--begin::未審案件提醒圖標-->
										<a href="#" class="btn btn-icon btn-light-danger pulse pulse-danger mr-5">
											<i class="flaticon2-information"></i>
											<span class="pulse-ring"></span>
										</a>
										<!--end::未審案件提醒圖標-->
										<a href="#"
											class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">已逾期案件</a>
									</div>
									<!--end::Text-->
									<!--begin::pulse-ring-->
									<span class="label pulse pulse-danger mr-10">
										<span class="position-relative">${item.recycleOverdue}</span>
										<span class="pulse-ring"></span>
									</span>
									<!--end::pulse-ring-->
								</div>
								<!--end::Item-->
								<!--begin::Item-->
								<div class="d-flex align-items-center justify-content-between mb-6">

									<!--begin::Text-->
									<div class="d-flex align-items-center">
										<!--begin::未審案件提醒圖標-->
										<a href="#" class="btn btn-icon btn-light-warning pulse pulse-warning mr-5">
											<i class="flaticon2-bell-5"></i>
											<span class="pulse-ring"></span>
										</a>
										<!--end::未審案件提醒圖標-->
										<a href="#"
											class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">7日內逾期案件</a>
									</div>
									<!--end::Text-->
									<!--begin::pulse-ring-->
									<span class="label pulse pulse-warning mr-10">
										<span class="position-relative">${item.recycleOverdue7}</span>
										<span class="pulse-ring"></span>
									</span>
									<!--end::pulse-ring-->
								</div>
								<!--end::Item-->
								<!--begin::Item-->
								<div class="d-flex align-items-center justify-content-between mb-6">

									<!--begin::Text-->
									<div class="d-flex align-items-center">
										<!--begin::未審案件提醒圖標-->
										<a href="#" class="btn btn-icon btn-light-success pulse pulse-success mr-5">
											<i class="flaticon2-bell-5"></i>
											<span class="pulse-ring"></span>
										</a>
										<!--end::未審案件提醒圖標-->
										<a href="#"
											class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">8~14日逾期案件</a>
									</div>
									<!--end::Text-->
									<!--begin::pulse-ring-->
									<span class="label pulse pulse-success mr-10">
										<span class="position-relative">${item.recycleOverdue14}</span>
										<span class="pulse-ring"></span>
									</span>
									<!--end::pulse-ring-->
								</div>
								<!--end::Item-->
								<!--begin::Item-->
								<div class="d-flex align-items-center justify-content-between mb-6">

									<!--begin::Text-->
									<div class="d-flex align-items-center">
										<!--begin::未審案件提醒圖標-->
										<a href="#" class="btn btn-icon btn-light-primary pulse pulse-primary mr-5">
											<i class="flaticon2-protected"></i>
											<span class="pulse-ring"></span>
										</a>
										<!--end::未審案件提醒圖標-->
										<a href="#"
											class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">15~30日逾期案件</a>
									</div>
									<!--end::Text-->
									<!--begin::pulse-ring-->
									<span class="label pulse pulse-primary mr-10">
										<span class="position-relative">${item.recycleOverdue30}</span>
										<span class="pulse-ring"></span>
									</span>
									<!--end::pulse-ring-->
								</div>
								<!--end::Item-->


							</div>
							<!--end::Tab Pane-->
							<!--begin::Tab Pane-->
							<div class="tab-pane fade" id="kt_tab_mixed_4_2" role="tabpanel"
								aria-labelledby="kt_tab_mixed_4_2">
								
							<!--begin::Item-->
							<div class="d-flex align-items-center justify-content-between mb-6">

								<!--begin::Text-->
								<div class="d-flex align-items-center">
									<!--begin::未審案件提醒圖標-->
									<a href="#" class="btn btn-icon btn-light-danger pulse pulse-danger mr-5">
										<i class="flaticon2-information"></i>
										<span class="pulse-ring"></span>
									</a>
									<!--end::未審案件提醒圖標-->
									<a href="#"
										class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">已逾期案件</a>
								</div>
								<!--end::Text-->
								<!--begin::pulse-ring-->
								<span class="label pulse pulse-danger mr-10">
									<span class="position-relative">${item.dealWithOverdue}</span>
									<span class="pulse-ring"></span>
								</span>
								<!--end::pulse-ring-->
							</div>
							<!--end::Item-->
							<!--begin::Item-->
							<div class="d-flex align-items-center justify-content-between mb-6">

								<!--begin::Text-->
								<div class="d-flex align-items-center">
									<!--begin::未審案件提醒圖標-->
									<a href="#" class="btn btn-icon btn-light-warning pulse pulse-warning mr-5">
										<i class="flaticon2-bell-5"></i>
										<span class="pulse-ring"></span>
									</a>
									<!--end::未審案件提醒圖標-->
									<a href="#"
										class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">7日內逾期案件</a>
								</div>
								<!--end::Text-->
								<!--begin::pulse-ring-->
								<span class="label pulse pulse-warning mr-10">
									<span class="position-relative">${item.dealWithOverdue7}</span>
									<span class="pulse-ring"></span>
								</span>
								<!--end::pulse-ring-->
							</div>
							<!--end::Item-->
							<!--begin::Item-->
							<div class="d-flex align-items-center justify-content-between mb-6">

								<!--begin::Text-->
								<div class="d-flex align-items-center">
									<!--begin::未審案件提醒圖標-->
									<a href="#" class="btn btn-icon btn-light-success pulse pulse-success mr-5">
										<i class="flaticon2-bell-5"></i>
										<span class="pulse-ring"></span>
									</a>
									<!--end::未審案件提醒圖標-->
									<a href="#"
										class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">8~14日逾期案件</a>
								</div>
								<!--end::Text-->
								<!--begin::pulse-ring-->
								<span class="label pulse pulse-success mr-10">
									<span class="position-relative">${item.dealWithOverdue}</span>
									<span class="pulse-ring"></span>
								</span>
								<!--end::pulse-ring-->
							</div>
							<!--end::Item-->
							<!--begin::Item-->
							<div class="d-flex align-items-center justify-content-between mb-6">

								<!--begin::Text-->
								<div class="d-flex align-items-center">
									<!--begin::未審案件提醒圖標-->
									<a href="#" class="btn btn-icon btn-light-primary pulse pulse-primary mr-5">
										<i class="flaticon2-protected"></i>
										<span class="pulse-ring"></span>
									</a>
									<!--end::未審案件提醒圖標-->
									<a href="#"
										class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">15~30日逾期案件</a>
								</div>
								<!--end::Text-->
								<!--begin::pulse-ring-->
								<span class="label pulse pulse-primary mr-10">
									<span class="position-relative">${item.dealWithOverdue}</span>
									<span class="pulse-ring"></span>
								</span>
								<!--end::pulse-ring-->
							<!--end::Item-->
							</div>
						<!--end::Tab Pane-->
					</div>
					<!--end::Tab Content-->
							</div>
							<!--end::Tab Pane-->
						</div>
						<!--end::Tab Content-->
					</div>
					<!--end::Body-->
				</div>
				<!--end::Mixed Widget 2-->
                              
    `
      })
      .join('')

    const list_of_operators = document.querySelector('.subsidizedUntrial')
    list_of_operators.innerHTML = domElements
  }
