// $.ajax({
// 	type: 'GET',
// 	url: '../datasample/7.list_of_operators.json',
// 	dataType: 'json',
// 	async: false ,
// 	success: function (response) {   
// 	  createDomElement(response.data)
// 	},
// 	error: function (thrownError) {
// 	  console.log(thrownError)
// 	},
//   })

//   function createDomElement(operators) {
//     let domElements = operators
//     .map((item, index) => {
//         return `
      
//         <div class="table-responsive">
// 			<table class="table  table-borderless table-vertical-center">
// 				<thead>
// 					<tr>
// 						<th class="p-0 w-50px"></th>
// 						<th class="p-0 min-w-50px"></th>
// 						<th class="p-0 w-50px"></th>
// 						<th class="p-0 min-w-110px"></th>
// 						<th class="p-0 min-w-110px"></th>
// 						<th class="p-0 w-50px"></th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					<tr>
// 						<td class="py-5 pl-0">
// 							<div class="symbol symbol-45 symbol-light mr-2">
// 							${index + 1}
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
// 				</tbody>
                              
//     `
//       })
//       .join('')

//     const list_of_operators = document.querySelector('.list_of_operators')
// 	$('.list_of_operators_count').text(' 共 '+ operators.length +' 家 ')
//     list_of_operators.innerHTML = domElements
//   }



  let userData = null;
  let pages = "";
  let page_size = 4;
  var currentPage = 0;
  $.ajax({
	  url: "../datasample/7.list_of_operators.json",
	  type: "get",
	  async: false,
	  success: function(users) {
		  userData = users.data;
		  console.log(users)
		  
		  pages = paginate(userData, page_size);
		  pageLi = "";
		  console.log(pages)
		  pages.forEach((element, index) => {
			  
				  pageLi += '<li onclick="pageChange(' + index + ')" id="page_' + index + '" class="page-item list-item" id="page_' + index + '"><a class="page-link" href="javascript:void(0)">' + (index+1) + '</a></li>';
		  });
		  $(".page-list").after(pageLi);
		  page = pages[currentPage];
		  printRows(page);
	  }
  });
  
  

  function nextPage() {
	  if (pages.length - 1 > currentPage)
		  page = currentPage + 1;
	  pageChange(page);
  }

  function prePage() {
	  if (currentPage < pages.length && currentPage != 0)
		  page = currentPage - 1;
	  pageChange(page);
  }

  function pageChange(page) {
	  currentPage = page;
	  $(".list-item").removeClass("active");
	  $("#page_" + page).addClass("active");
	  $(".page-data").html("");
	  page = pages[page];
	  printRows(page);
  }

  function printRows(arr) {
	arr.forEach(element => {
		$(".page-data").append("<tr><td>" + element.id + "</td><td>" + element.company + "</td><td>" + element.number + "</td><td>" + element.address + "</td></tr>" + element.county);

	});
}

  function paginate(arr, size) {
	  return arr.reduce((acc, val, i) => {
		  let idx = Math.floor(i / size)
		  let page = acc[idx] || (acc[idx] = [])
		  page.push(val)
		  return acc
	  }, [])
  }
 