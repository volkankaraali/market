let data = fetch("./products.json").then((response) => response.json()).then((json) => json.forEach(product => {
    //console.log(product);
    document.getElementById("test3").innerHTML += 
    `
    <div class="col-md-6 col-lg-4 d-flex justify-content-center">
        <div class="card mt-3" style="width: 18rem; border:none;">
        <img style="width: 200px;height: 200px;" src="${product.img}" class="card-img-top mx-auto mt-2" alt="${product.brand}">
        <div class="card-body text-center">
        <h6 class="card-title">${product.name}</h6>
        <p class="card-text">${product.brand}</p>
        <p class="card-text fw-bold">${product.price["2020"]} TL</p>
        <div class="d-flex justify-content-center">
        <button class="btn btn-primary" onClick="addProduct(${product.id})">Sepete Ekle</button>
        </div>
        
        </div>
        </div>
    </div>
    
  `
}))

{/* <div class="col-md-4 col-lg-3 d-flex justify-content-center ">
        <div class=" card mt-3" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.brand}</p>
        <p class="card-text">${product.price} TL</p>
        <form onsubmit="return false">
        <button class="btn btn-primary" onClick="addProduct(${product.id})">${product.id}</button>
        </form>
        
        </div>
        </div>
    </div> */}