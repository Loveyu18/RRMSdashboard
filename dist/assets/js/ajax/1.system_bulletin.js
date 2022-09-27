$.ajax({
    type: 'GET',
    url: '../datasample/1.system_bulletin.json',
    dataType: 'json',
    success: function (response) {
      const bulletin= []
      bulletin.push(...response.data)
      createDomElement(bulletin)
    },
    error: function (thrownError) {
      console.log(thrownError)
    },
  })

  function createDomElement(bulletin) {
    const domElements = bulletin
    .map((item, index) => {
        return `
        <tr>
            <th scope="row">${index+1}</th>
                    <td> 
                        <span class="label label-inline label-light-success font-weight-bold">${item.date}</span>
                    </td>
                    <td class="text-left">${item.content}</td>
                    <td>
                        <span class="label label-inline label-light-primary font-weight-bold">${item.author}</span>
                    </td>
        </tr>
    `
      })
      .join('')

    const system_bulletin = document.querySelector('.system_bulletin')
    system_bulletin.innerHTML = domElements
  }