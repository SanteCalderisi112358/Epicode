

            
            
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const id = urlParams.get('id');
            console.log(id)
            fetch("https://striveschool-api.herokuapp.com/api/product/"+id,{
                  method: 'GET',
                  headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMmQ5NTg4Zjc0MDAwMTQyODc2ZjYiLCJpYXQiOjE2ODM4OTM2NTMsImV4cCI6MTY4NTEwMzI1M30.6wIJVNkiqCfPlq-P3vsZEx5E2Tv_Nkmrzs020xUbUpg',
                    'Content-type':'application/json'
                  }})
            .then(response => response.json())
            .then(dettagliID => {
               
               console.log(dettagliID)
                dettagli.innerHTML = `<div class="card" >
            <img src="${dettagliID.imageUrl}" style="object-fit:none;" class="card-img-top img-fluid" width="50px">
            <div class="card-body">
              <h5 class="card-title text-center">${dettagliID.name}</h5>
              <p class="card-text text-center">${dettagliID.description}</p>
              <p class="card-text text-center">${dettagliID.brand}</p>
              <p class="card-text text-center">${dettagliID.price} €</p>
              
            </div>
          </div>`
            })
