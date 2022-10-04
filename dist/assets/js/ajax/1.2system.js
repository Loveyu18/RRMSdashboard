
$.ajax({
  type: 'GET',
  url: '../datasample/1.system_bulletin.json',
  dataType: 'json',
  async: false ,
  success: function (response) {
  const charge = []
  charge.push(...response.data)
  createDomElement(charge, 'system_bulletin',4)
  },
  error: function (thrownError) {
  console.log(thrownError)
  },
})

$.ajax({
  type: 'GET',
  url: '../datasample/2.message_announcement.json',
  dataType: 'json',
  async: false,
  success: function (response) {
  const charge = []
  charge.push(...response.data)
  createDomElement(charge, 'message_announcement',4)
  },
  error: function (thrownError) {
  console.log(thrownError)
  },
})

function createDomElement(charge, elementName, limit=0) {
  console.log(elementName)
  if(limit>0){
    charge = charge.filter((item,index) => index < limit)
  }
  const domElements = charge
  .map((item, index) => {
   
    return `
    <tr>
        <th scope="row">${index + 1}</th>
          <td> 
            <span class="label label-inline label-light-success font-weight-bold">${
      item.date
    }</span>
          </td>
          <td class="text-left">${item.content}</td>
          <td>
            <span class="label label-inline label-light-primary font-weight-bold author">${
      item.author
    }</span>
          </td>
    </tr>
  `
  })
  
  .join('')

  const system_bulletin = document.querySelector(`.${elementName}`)
  console.log(system_bulletin)
  system_bulletin.innerHTML = domElements


  $(function(){
    var len = 30; 
    $(".text-left").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...more";
            $(this).text(text);
        }
    });
});
  
 }

