
//   let userData = null;
//   let pages = "";
//   let page_size = 5;
//   var currentPage = 0;

//   $.ajax({
// 	  url: "../datasample/7.list_of_operators.json",
// 	  type: "get",
// 	  async: false,
// 	  success: function(users) {
// 		  userData = users.data;
// 		  pages = paginate(userData, page_size);
// 		  pageLi = "";
// 		  pages.forEach((element, index) => {

// 				    pageLi += '<a href="javascript:pageChange(' + index + ',\'.list_ofoperators_pages>div\')" id="page_' + index + '" class="page-item-link btn btn-icon btn-circle btn-sm border-0 btn-hover-success mr-2 my-1 '+(currentPage===index?'active':'')+' " id="page_' + index + '"> ' + (index+1) + ' </a>';
// 		  });
// 		  if(pages)
// 		  $(".page-list").after(pageLi);
// 		  page = pages[currentPage];
// 		  printRows(page);

		 
// 	  }
	  
//   });
  


  
//   function firstPage() {
// 	if (currentPage < pages.length && currentPage != 0)
// 		 pageChange(0);
// }

// function prePage() {
// 	if (currentPage < pages.length && currentPage != 0)
// 		page = currentPage - 1;
// 	pageChange(page);
	
// }

//   function nextPage() {
// 	  if (pages.length - 1 > currentPage)
// 		  page = currentPage + 1;
// 	  pageChange(page);
//   }

 
//   function endPage() {
// 	if (pages.length - 1 > currentPage)
// 	pageChange("#page_".length);
// }


//   function pageChange(page) {
	
// 	  currentPage = page;
// 	  $(".page-item-link").removeClass("active");
// 	  $("#page_" + page).addClass("active");
// 	  $(".page-data").html("");
// 	  page = pages[page];
// 	  printRows(page);
//   }



//   function  printRows(operators) {
//     let domElements = operators
//     .map((item) => {
//         return `
// 					<tr>
// 						<td class="py-5 pl-0">
// 							<div class="symbol symbol-45 symbol-light mr-2">
// 							${item.id}
// 							</div>
// 						</td>
// 						<td class="pl-0">
// 							<a href="#"
// 							class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">${item.company}</a>
// 							<span class="text-muted font-weight-bold d-block">${item.category}</span>
// 						</td>
// 						<td class="text-right">
// 							<span class="text-muted font-weight-bolder d-block font-size-lg">${item.number}</span>
// 						</td>
// 						<td class="text-right">
// 							<span class="text-muted font-weight-500">${item.address}</span>
// 						</td>
// 						<td class="text-right">
// 							<span class="label label-lg label-light-success label-inline">${item.county}</span>
// 						</td>
// 					</tr>												
                              
//     `
//       })
//       .join('')

//     const list_of_operators = document.querySelector('.list_of_operators')
// 	$('.list_of_operators_count').text(' 共 '+ userData.length +' 家 ')
//     list_of_operators.innerHTML = domElements
//   }

//   function paginate(arr, size) {
// 	  return arr.reduce((acc, val, i) => {
// 		  let idx = Math.floor(i / size)
// 		  let page = acc[idx] || (acc[idx] = [])
// 		  page.push(val)
// 		  return acc
// 	  }, [])
//   }


  
// var KTDatatablesDataSourceAjaxServer = function() {

// 	var initTable1 = function() {
// 		var table = $('#ktdatatable');

// 		// begin first table
// 		table.KTDatatable({
// 			responsive: true,
// 			searchDelay: 500,
// 			processing: true,
// 			serverSide: false,
// 			ajax: {
// 				url: '../datasample/7.list_of_operators.json',
// 				type: 'GET',
// 				data: {
// 					// parameters for custom backend script demo
// 					columnsDef: [
// 						'company', 'category',
// 						'number', 'address', 'county',
// 						],
// 				},
// 			},
// 			columns: [
// 				{data: 'company'},
// 				{data: 'category'},
// 				{data: 'number'},
// 				{data: 'address'},
// 				{data: 'county'},

// 			],
// 			columnDefs: [
// 				{
// 					targets: -1,
// 					title: 'Actions',
// 					orderable: false,
// 					render: function(data, type, full, meta) {
// 						return '\
// 							<div class="dropdown dropdown-inline">\
// 								<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" data-toggle="dropdown">\
// 	                                <i class="la la-cog"></i>\
// 	                            </a>\
// 							  	<div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
// 									<ul class="nav nav-hoverable flex-column">\
// 							    		<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-edit"></i><span class="nav-text">Edit Details</span></a></li>\
// 							    		<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-leaf"></i><span class="nav-text">Update Status</span></a></li>\
// 							    		<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-print"></i><span class="nav-text">Print</span></a></li>\
// 									</ul>\
// 							  	</div>\
// 							</div>\
// 							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Edit details">\
// 								<i class="la la-edit"></i>\
// 							</a>\
// 							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Delete">\
// 								<i class="la la-trash"></i>\
// 							</a>\
// 						';
// 					},
// 				},
// 				{
// 					width: '75px',
// 					targets: -3,
// 					render: function(data, type, full, meta) {
// 						var status = {
// 							1: {'title': 'Pending', 'class': 'label-light-primary'},
// 							2: {'title': 'Delivered', 'class': ' label-light-danger'},
// 							3: {'title': 'Canceled', 'class': ' label-light-primary'},
// 							4: {'title': 'Success', 'class': ' label-light-success'},
// 							5: {'title': 'Info', 'class': ' label-light-info'},
// 							6: {'title': 'Danger', 'class': ' label-light-danger'},
// 							7: {'title': 'Warning', 'class': ' label-light-warning'},
// 						};
// 						if (typeof status[data] === 'undefined') {
// 							return data;
// 						}
// 						return '<span class="label label-lg font-weight-bold' + status[data].class + ' label-inline">' + status[data].title + '</span>';
// 					},
// 				},
// 				{
// 					width: '75px',
// 					targets: -2,
// 					render: function(data, type, full, meta) {
// 						var status = {
// 							1: {'title': 'Online', 'state': 'danger'},
// 							2: {'title': 'Retail', 'state': 'primary'},
// 							3: {'title': 'Direct', 'state': 'success'},
// 						};
// 						if (typeof status[data] === 'undefined') {
// 							return data;
// 						}
// 						return '<span class="label label-' + status[data].state + ' label-dot mr-2"></span>' +
// 							'<span class="font-weight-bold text-' + status[data].state + '">' + status[data].title + '</span>';
// 					},
// 				},
// 			],
// 		});
// 	};

// 	return {

// 		//main function to initiate the module
// 		init: function() {
// 			initTable1();
// 		},

// 	};

// }();

// jQuery(document).ready(function() {
// 	KTDatatablesDataSourceAjaxServer.init();
// });




// "use strict";
// // Class definition

// var KTDatatableHtmlTableDemo = function() {
//     // Private functions

//     // demo initializer
//     var demo = function() {

// 		var datatable = $('#kt_datatable').KTDatatable({
// 			ajax: {
// 				url: '../datasample/7.list_of_operators.json'+ '/api/datatables/demos/default.php',
// 				type: 'GET',
// 				data: {
// 					// parameters for custom backend script demo
// 					columnsDef: [
// 						'company', 'category',
// 						'number', 'address', 'county',
// 						],
// 				},
// 			},
// 			columns: [
				
// 					{data: 'company'},
// 					{data: 'category'},
// 					{data: 'number'},
// 					{data: 'address'},
// 					{data: 'county'},
	
				
// 			],
// 		});



//     };

//     return {
//         // Public functions
//         init: function() {
//             // init dmeo
//             demo();
//         },
//     };
// }();

// jQuery(document).ready(function() {
// 	KTDatatableHtmlTableDemo.init();
// });


  let userData = null;
  $.ajax({
	  url: "../datasample/7.list_of_operators.json",
	  type: "get",
	  async: false,
	  success: function(users) {
		  userData = users.data;		
	  }
	  
  });
	$('.list_of_operators_count').text(' 共 '+ userData.length +' 家 ')



var datatable = $('#ktdatatable').KTDatatable({
	// datasource definition
		data: {
			type: 'remote',
			source: {
				read: {
					url: '../datasample/7.list_of_operators.json',
					map: function(raw) {
						var dataSet = raw;
						if (typeof raw.data !== 'undefined') {
							dataSet = raw.data;
						}
						return dataSet;
					},
				},
			},
			pageSize: 5,
			saveState: true,
		},
	
		layout: {
			scroll: false,
			footer: false,
		},
	
		sortable: true,
	
		pagination: true,
	
		columns: [{
			field: 'id',
			title: ''
		}, {
			field: 'company',
			title: '公司名'
		}, {
			field: 'category',
			title: '分類'
		}, {
			field: 'number',
			title: '統編'
		}, {
			field: 'address',
			title: '地址'
		}, {
			field: 'county',
			title: '縣市'
		}]
	});
	



// var KTDatatablesDataSourceAjaxClient = function() {

// 	var initTable1 = function() {
// 		var table = $('#ktdatatable');

// 		// begin first table
// 		table.KTDatatable({
// 			responsive: true,
// 			ajax: {
// 				url: '../datasample/7.list_of_operators.json' ,
// 				type: 'GET',
// 				data: {
// 					pagination: {
// 						perpage: 50,
// 					},
// 				},
// 			},
// 			columns: [{
// 				field: 'id',
// 				title: '編號'
// 			}, {
// 				field: 'company',
// 				title: '公司名'
// 			}, {
// 				field: 'category',
// 				title: '分類'
// 			}, {
// 				field: 'number',
// 				title: '統編'
// 			}, {
// 				field: 'address',
// 				title: '地址'
// 			}, {
// 				field: 'county',
// 				title: '縣市'
// 			}],
// 			layout: {
// 				scroll: false,
// 				footer: false,
// 			},
// 			sortable: true,
	
// 			pagination: true,
			
			
// 		});
// 	};

// 	return {

// 		//main function to initiate the module
// 		init: function() {
// 			initTable1();
// 		},

// 	};

// }();

// jQuery(document).ready(function() {
// 	KTDatatablesDataSourceAjaxClient.init();
// });

