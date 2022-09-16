"use strict";

// sweetalert2
// Swal.fire({
// 		title: '<strong>審查案件提醒</strong>',
// 		icon: 'warning',
// 		html:
// 			'<b>地方登記</b>已逾期共<a href="https://rrms2.eri.com.tw/DNC/Factory_Data/Verify_Search?tp=1">10</a>件，7日內逾期共<a href="//sweetalert2.github.io">20</a>件</br>' +
// 			'<b>受補貼</b>已逾期共<a href="https://rrms2.eri.com.tw/DNC/Factory_Data/Verify_Search?tp=2">5</a>件，7日內逾期共<a href="//sweetalert2.github.io">15</a>件',
// 		showCloseButton: true,
// 		showCancelButton: false,
// 		focusConfirm: true,
// 		confirmButtonText:
// 			'我知道了',
// 		confirmButtonAriaLabel: '我知道了',
// 	})
// end::sweetalert2

// begin::ajax test
$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "https://randomuser.me/api/",
    // 有回傳資料才需要用data
    // data: 
  }).done(function (msg) {
    console.log("msg", msg);
    // console.log("email", msg.results[0].email);
    let email = msg.results[0].email;
   // 把email送到目的地
    $('#ajaxTest').append(email);
  });
});
// end::ajax test
