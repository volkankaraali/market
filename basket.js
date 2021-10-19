let basket=[];

function addProduct(id){
    fetch("./products.json").then((response)=>response.json()).then((data)=> data.map(e=>{
        if (e.id==id) {
            basket.push(e)
            basketList()
            console.log(basket)

        }
    }))
}

function basketList(){
    document.getElementById("litest").innerHTML="";

    basket.forEach((product,index) => {
        document.getElementById("litest").innerHTML += 
    `
    <li class="list-group-item d-flex flex-row justify-content-between ">
        <div d-flex flex-row">
        <span class="my-auto lh-1" style="font-size:small; white-space: nowrap;width: 50px;overflow: hidden;text-overflow: ellipsis; ">${product.name}</span>
        </div> 
        <div>
        <span class="fw-bold">${product.price["2020"]}</span> 
        </div>
        <div class="my-auto d-flex flex-row">
        <span class="fw-bold me-2 my-auto " style="font-size:0.7rem;">1 Adet</span> 
        <button class="btn btn-danger" style="padding: 0px 5px;" onClick="deleteProduct(${index})"><i class="bi bi-x"></i></button>
        </div>
    </li>
  `
    });

    let totalPrice=0
    basket.forEach(element => {
        totalPrice+=element.price["2020"]
    });
    totalPrice > 0 ? document.getElementById("price").innerHTML="Toplam: "+totalPrice.toFixed(2)+" TL" : document.getElementById("price").innerHTML=""
    
}

function deleteProduct(index){
    basket = basket.filter((item,itemIndex) => itemIndex !== index)
    basketList()
}

{/* <li class="list-group-item d-flex flex-row justify-content-between">
                          <span class="my-auto">An item</span> 
                          <div class="my-auto">
                              <span class="fw-bold me-2">3 Adet</span> 
                              <button class="btn btn-danger">x</button>
                            </div>
</li>



<div class="card mt-3 ms-auto" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.brand}</p>
    <p class="card-text">${product.price} TL</p>
    <button class="btn btn-danger" onClick="deleteProduct(${index})">Sil</button>
    </div>
    </div> */}