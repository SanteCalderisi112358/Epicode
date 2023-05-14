

            
            const progressBar = document.querySelector('.progress-bar')
            const progress = document.querySelector('.progress')    
            const prod = document.getElementById('products') 
            progress.style.opacity = '0'
            

            window.onload =()=>{
                
            
            progress.style.opacity = '1'
           
            const url = "https://striveschool-api.herokuapp.com/api/product/"
            fetch(url,{
                  method: 'GET',
                  headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMmQ5NTg4Zjc0MDAwMTQyODc2ZjYiLCJpYXQiOjE2ODM4OTM2NTMsImV4cCI6MTY4NTEwMzI1M30.6wIJVNkiqCfPlq-P3vsZEx5E2Tv_Nkmrzs020xUbUpg',
                    'Content-type':'application/json'
                  }},
                progressBar.classList.remove('w-25'),
                progressBar.classList.add('w-50')  
                )
            .then(response => 
            response.json())
            .then(dati => {
                console.log(dati)
                dati.forEach((element,index) => {
                    prod.innerHTML += `<div class="col-md-3 mt-3 me-2">
                                            <div class="card mb-5">
                                                 <img src="${element.imageUrl}" class="card-img-top img-fluid" alt="${element.name}" style="height:300px;">
                                                    <div class="card-body">
                                                        <h5 class="card-title  text-center" style="height:80px">${element.name}</h5>
                                                        <div class="d-flex justify-content-around">
                                                            <a class="btn btn-primary " title="Scopri di più" href="./dettagli.html?id=${element._id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg></a> 
                                        <a class="btn btn-success " title="Modifica prodotto" href="./back-office.html?id=${element._id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></a>
                                                            </div>
                                        
                                        </div>
                                    </div>
                                    </div>`


                })
                progressBar.classList.remove('w-50'),
                progressBar.classList.add('w-100') 
                setTimeout(()=>

                
                progress.style.display = 'none'
                
                ,1000)  
        }
        
        
        )
        .catch(err => document.getElementById('result').innerHTML = `<span class="text-danger">${err}</span>`)
        
            }
            
        

        
       
  