$.ajax({
    type: 'GET',
    url: '../datasample/7.list_of_operators.json',
    dataType: 'json',
    async: false ,
    success: function (response) {
      const operators= []
      operators.push(...response.data)
      createDomElement(operators)
    },
    error: function (thrownError) {
      console.log(thrownError)
    },
  })

  function createDomElement(operators) {
    const domElements = operators
    .map((item, index) => {
        return `
      
        <div class="table-responsive">
			<table class="table  table-borderless table-vertical-center">
				<thead>
					<tr>
						<th class="p-0 w-50px"></th>
						<th class="p-0 min-w-50px"></th>
						<th class="p-0 w-50px"></th>
						<th class="p-0 min-w-110px"></th>
						<th class="p-0 min-w-110px"></th>
						<th class="p-0 w-50px"></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="py-5 pl-0">
							<div class="symbol symbol-45 symbol-light mr-2">
							${index + 1}
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
				</tbody>
                              
    `
      })
      .join('')

    const list_of_operators = document.querySelector('.list_of_operators')
	$('.list_of_operators_count').text(' 共 '+ operators.length +' 家 ')
    list_of_operators.innerHTML = domElements
  }