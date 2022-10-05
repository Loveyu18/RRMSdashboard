$.ajax({
	type: 'GET',
	url: '../datasample/8.exception_notification.json',
	dataType: 'json',
	async: false ,
	success: function (response) {   
	  createDomElement(response.data)
	},
	error: function (thrownError) {
	  console.log(thrownError)
	},
  })



  function createDomElement(exception) {
    const domElements = exception
    .map((item) => {
        return `
        <div class="d-flex align-items-center justify-content-between mb-6 ">
            <div class="d-flex align-items-center">
                <a href="#" class="btn btn-icon btn-light-danger pulse pulse-danger mr-5">
                    <i class="flaticon2-information"></i>
                    <span class="pulse-ring"></span>
                </a>
                <a href="#" class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">${ item.message }
                </a>
            </div>
    
            <div class="d-flex align-items-center">
                <span class="label pulse mr-10">
                    <span class="position-relative">${ item.total }</span>
                    <span class="pulse-ring"></span>
                </span>
            </div>
        
            </div>
         </div>
    `
      })
      .join('')

    const system_exception = document.querySelector('.exception_notification')
    system_exception.innerHTML = domElements
  }