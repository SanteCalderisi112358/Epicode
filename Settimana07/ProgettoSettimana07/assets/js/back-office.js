
/*MODIFICA PRODOTTO INSERENDO ID E CARATTERISTICHE DA MODIFICARE TRAMITE ID*/

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(id)
if (id === null) {
  document.getElementById("title-back-office").innerText = "Aggiungi nuovo prodotto"
  document.querySelectorAll('label').forEach(element => {
    element.innerHTML = ""
    document.getElementById('cancelProduct').style.display = 'none'
  });
}
else{

  const url = "https://striveschool-api.herokuapp.com/api/product/" + id
  fetch(url, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMmQ5NTg4Zjc0MDAwMTQyODc2ZjYiLCJpYXQiOjE2ODM4OTM2NTMsImV4cCI6MTY4NTEwMzI1M30.6wIJVNkiqCfPlq-P3vsZEx5E2Tv_Nkmrzs020xUbUpg',
    'Content-type': 'application/json'
  }
})
  .then(response => response.json())
  .then(dati => {
    console.log(dati)

    document.getElementById('modifica').innerHTML = `<button class="btn btn-success" id="btnModifica" title="Modifica Prodotto" onclick="modificaID(id)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button>`
    document.getElementById('name').value = dati.name
    document.getElementById('description').value = dati.description
    document.getElementById('brand').value = dati.brand
    document.getElementById('imageUrl').value = dati.imageUrl
    document.getElementById('price').value = dati.price
    document.getElementById('invia').style.display = 'none'
    document.getElementById('resetForm').style.display = 'none'
    document.getElementById('svuotaApi').style.display = 'none'
    
  })
  
  .catch(err => document.getElementById('result').innerHTML = `<span class="text-danger">ID inesistente</span>`)
}

function modificaID() {
  let modificaID = prompt("Desideri modificare il prodotto?\nY/N")
  if(modificaID==="Y"){

    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const brand = document.getElementById("brand").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const price = document.getElementById("price").value;
    
    const dataInsert = {
      name: name,
      description: description,
      brand: brand,
    imageUrl: imageUrl,
    price: price
  }

  
  fetch("https://striveschool-api.herokuapp.com/api/product/" + id, {
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMmQ5NTg4Zjc0MDAwMTQyODc2ZjYiLCJpYXQiOjE2ODM4OTM2NTMsImV4cCI6MTY4NTEwMzI1M30.6wIJVNkiqCfPlq-P3vsZEx5E2Tv_Nkmrzs020xUbUpg',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(dataInsert)
    
  })
  .then(response => {
    response.json()
    console.log(response)
    if (response.ok) {
      document.getElementById("result").innerHTML = "Modifica avvenuta con successo!"
      setTimeout(()=>{
        document.getElementById("result").style.opacity = '0'
      },2000)
      
    } else {
      
      document.getElementById("result").innerHTML = "Errore durante il caricamento!"
    }
  })
  
}

}



/*ELIMINA PRODOTTO INSERENDO ID TRAMITE PROMPT*/
function eliminaID(id) {
  const queryString2 = window.location.search;
  const urlParams2 = new URLSearchParams(queryString);
  const id2 = urlParams.get('id');
  console.log(id2)
  let eliminazioID = prompt("Sei sicuro di voler eliminare il prodotto?\nY/N")
      if(eliminazioID==="Y"){
        document.getElementById('cancelProduct').style.display = 'block'
  console.log(id)
  fetch("https://striveschool-api.herokuapp.com/api/product/" + id2, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMmQ5NTg4Zjc0MDAwMTQyODc2ZjYiLCJpYXQiOjE2ODM4OTM2NTMsImV4cCI6MTY4NTEwMzI1M30.6wIJVNkiqCfPlq-P3vsZEx5E2Tv_Nkmrzs020xUbUpg',
      'Content-type': 'application/json'

    },
  })
    .then(response => response.json())
    .then(dati => {
      console.log(dati)
      
      document.getElementById('name').value = ""
      document.getElementById("description").value = ""
      document.getElementById("brand").value = ""
      document.getElementById("imageUrl").value = ""
      document.getElementById("price").value = ""
      document.getElementById("result").innerHTML = "Eliminazione dall'API avvenuta con successo!"
      document.getElementById("invia").style.display = "block"
      document.getElementById("title-back-office").innerText = "Aggiungi nuovo prodotto"
      document.getElementById("modifica").style.display = "none"
      document.querySelectorAll('label').forEach(element => {
      element.innerText = ""
    console.log(id2)
  })
      id2 = null
    }
    )
      }
  
}
/*SVUOTA INPUT FIELDS*/
function svuotaForm(id) {

  let svuotaForm = prompt("Vuoi resettare il form\nY/N?")
  if (svuotaForm === 'Y') {
    
    document.getElementById('name').value = ""
    document.getElementById("description").value = ""
    document.getElementById("brand").value = ""
    document.getElementById("imageUrl").value = ""
    document.getElementById("price").value = ""
    document.getElementById("result").innerHTML = ""
    document.getElementById("invia").style.display = "block"
    document.getElementById("title-back-office").innerText = "Aggiungi nuovo prodotto"
    document.getElementById("modifica").style.display = "none"
    document.getElementById("cancelProduct").style.display = "none"

  // const queryString3 = window.location.search;
  
  // console.log(queryString3)
  // const urlParams3 = new URLSearchParams(queryString3);
  // console.log(urlParams3)
  // const id3 = urlParams.get('id');
  // console.log(id3)
    
  }



}

/*SVUOTA API*/
function svuotaTutto() {

  let cancelAPI = prompt("Stai per svuotare l'API! Sei sicuro?\nY/N")
  console.log(cancelAPI)
  if (cancelAPI === 'Y') {
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMmQ5NTg4Zjc0MDAwMTQyODc2ZjYiLCJpYXQiOjE2ODM4OTM2NTMsImV4cCI6MTY4NTEwMzI1M30.6wIJVNkiqCfPlq-P3vsZEx5E2Tv_Nkmrzs020xUbUpg',
        'Content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(dati => {
        dati.forEach(element => {
          fetch(`https://striveschool-api.herokuapp.com/api/product/${element._id}`, {
            method: 'DELETE',
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMmQ5NTg4Zjc0MDAwMTQyODc2ZjYiLCJpYXQiOjE2ODM4OTM2NTMsImV4cCI6MTY4NTEwMzI1M30.6wIJVNkiqCfPlq-P3vsZEx5E2Tv_Nkmrzs020xUbUpg',
              'Content-type': 'application/json'

            },
          })
        })
      })

      document.getElementById('result').innerText = "L'API è stata svuotata con successo!"
  }


}


function sendProduct(event) {
  event.preventDefault();


  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const brand = document.getElementById("brand").value;
  const imageUrl = document.getElementById("imageUrl").value;
  const price = document.getElementById("price").value;

  const dataInsert = {
    name: name,
    description: description,
    brand: brand,
    imageUrl: imageUrl,
    price: price
  }


  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMmQ5NTg4Zjc0MDAwMTQyODc2ZjYiLCJpYXQiOjE2ODM4OTM2NTMsImV4cCI6MTY4NTEwMzI1M30.6wIJVNkiqCfPlq-P3vsZEx5E2Tv_Nkmrzs020xUbUpg',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(dataInsert)

  })
    .then(response => {
      response.json()
      console.log(response)
      if (response.ok) {
        document.getElementById("result").innerHTML = "Caricamento avvenuto con successo!"
      } else {
        document.getElementById("result").innerHTML = "Errore durante il caricamento!"
      }
    })



    
    
    .catch(error => document.getElementById("result").innerHTML += "\nErrore:" + error);



}






