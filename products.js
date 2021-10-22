
//data change as year
let year=""
function getData(handleYear="2021"){
  year=handleYear

  basket=[]
  document.getElementById("product").innerHTML="";
  document.getElementById("totalPrice").innerHTML=""
  document.getElementById("products").innerHTML="";
  document.getElementById("emptyAlert").style.visibility="visible"
  basketList()

  fetch("./products.json").then((response) => response.json()).then((data) => data.forEach(product => {
    document.getElementById("products").innerHTML += 
    `
    <div class="col-md-6 col-lg-6 d-flex justify-content-center">
        <div class="card mt-3" style="width: 18rem; border:none;">
        <img style="width: 200px;height: 200px;" src="${product.img}" class="card-img-top mx-auto mt-2" alt="${product.brand}">
        <div class="card-body text-center">
        <h6 class="card-title">${product.name}</h6>
        <p class="card-text">${product.brand}</p>
        <p class="card-text fw-bold">${product.price[handleYear]}TL</p>
        <div class="d-flex justify-content-center">
        <button class="btn btn-primary" onClick="addProduct(${product.id})">Sepete Ekle</button>
        </div>
        
        </div>
        </div>
    </div>
    
  `
  }))
}

getData()
