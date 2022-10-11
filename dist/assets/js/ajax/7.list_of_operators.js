
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
		  pages = paginate(userData, page_size);
		  pageLi = "";
		 
		  pages.forEach((element, index) => {
			  
				    pageLi += '<a href="javascript:pageChange(' + index + ',\'.list_ofoperators_pages>div\')" id="page_' + index + '" class="page-item-link btn btn-icon btn-circle btn-sm border-0 btn-hover-success mr-2 my-1 '+(currentPage===index?'active':'')+' " id="page_' + index + '"> ' + (index+1) + ' </a>';
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
	  $(".page-item-link").removeClass("active");
	  $("#page_" + page).addClass("active");
	  $(".page-data").html("");
	  page = pages[page];
	  printRows(page);
  }

  function  printRows(operators) {
    let domElements = operators
    .map((item) => {
        return `
					<tr>
						<td class="py-5 pl-0">
							<div class="symbol symbol-45 symbol-light mr-2">
							${item.id}
							</div>
						</td>
						<td class="pl-0">
							<a href="#"
							class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">${item.company}</a>
							<span class="text-muted font-weight-bold d-block">${item.category}</span>
						</td>
						<td class="text-right">
							<span class="text-muted font-weight-bolder d-block font-size-lg">${item.number}</span>
						</td>
						<td class="text-right">
							<span class="text-muted font-weight-500">${item.address}</span>
						</td>
						<td class="text-right">
							<span class="label label-lg label-light-success label-inline">${item.county}</span>
						</td>
					</tr>												
                              
    `
      })
      .join('')

    const list_of_operators = document.querySelector('.list_of_operators')
	$('.list_of_operators_count').text(' 共 '+ userData.length +' 家 ')
    list_of_operators.innerHTML = domElements
  }

  function paginate(arr, size) {
	  return arr.reduce((acc, val, i) => {
		  let idx = Math.floor(i / size)
		  let page = acc[idx] || (acc[idx] = [])
		  page.push(val)
		  return acc
	  }, [])
  }


