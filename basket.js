let basket=[];

function addProduct(id,year){
    // fetch("./products.json").then((response)=>response.json()).then((data)=> data.map(e=>{
    //     console.log(e);
    //     if (e.id==id) {
    //         console.log(e);
    //         basket.push(e)
    //         console.log(e.price);
    //         basketList()
    //     }
    // }))

    console.log("add: "+year);
    fetch("./products.json").then((response)=>response.json()).then((data)=> {
        let product=data.find(p => p.id==id)
        console.log(product);
        basket.push(product)
        basketList()
    })
    
}

function basketList(){
    
    //console.log(basket);
    document.getElementById("litest").innerHTML="";
    const counts={}
    basket.forEach((product,index) => {
       counts[product.id]=(counts[product.id] || 0) + 1;
    });
    Object.entries(counts).forEach(([key,val]) => {
        //console.log(key,val);

        let productInBasket=basket.find(item=>item.id===parseInt(key))
        //console.log(productInBasket.name+val);
        document.getElementById("litest").innerHTML += 
            `
            <li class="list-group-item d-flex flex-row justify-content-between ">
                <div d-flex flex-row">
                <span class="my-auto lh-1" style="font-size:small; white-space: nowrap;width: 50px;overflow: hidden;text-overflow: ellipsis; ">${productInBasket.name}</span>
                </div> 
                <div>
                <span class="fw-bold">${productInBasket.price[year]}</span> 
                </div>
                <div class="my-auto d-flex flex-row">
                <span class="fw-bold me-2 my-auto " style="font-size:0.7rem;">${val} Adet</span> 
                <button class="btn btn-danger" style="padding: 0px 5px;" onClick="deleteProduct(${productInBasket.id})"><i class="bi bi-x"></i></button>
                </div>
            </li>
        `
    });
    

    


    //console.log(counts);
    // basket.forEach(element => {

        
    //     console.log(element.id===1);
    //     //console.log(counts);
    // });

    // console.log("id: "+Object.keys(counts));
    // console.log("adet: "+Object.values(counts));
    // console.log("****");
    // Object.entries(counts).forEach(([key,val]) => {
    //     //console.log("key:"+key+" "+"val: "+val);
        

    // });

//     basket.forEach((product,index) => {
//     document.getElementById("litest").innerHTML += 
//     `
//     <li class="list-group-item d-flex flex-row justify-content-between ">
//         <div d-flex flex-row">
//         <span class="my-auto lh-1" style="font-size:small; white-space: nowrap;width: 50px;overflow: hidden;text-overflow: ellipsis; ">${product.name}</span>
//         </div> 
//         <div>
//         <span class="fw-bold">${product.price["2020"]}</span> 
//         </div>
//         <div class="my-auto d-flex flex-row">
//         <span class="fw-bold me-2 my-auto " style="font-size:0.7rem;">1 Adet</span> 
//         <button class="btn btn-danger" style="padding: 0px 5px;" onClick="deleteProduct(${index})"><i class="bi bi-x"></i></button>
//         </div>
//     </li>
// `})
    
    

    let totalPrice=0
    basket.forEach(product => {
        totalPrice+=product.price[year]
    });
    totalPrice > 0 ? document.getElementById("totalPrice").innerHTML="Toplam: "+totalPrice.toFixed(2)+" TL" : document.getElementById("totalPrice").innerHTML=""
    
}

function deleteProduct(productId){
    //basket = basket.filter((item,itemIndex) => itemIndex !== index)
    let delItemIndex=0
    let delItem=basket.find((item,index)=>{
        item.id===productId ? delItemIndex=index : false
                
    })
    console.log(delItemIndex);
    basket = basket.filter((item,itemIndex) => itemIndex !== delItemIndex)
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

//sdads

// basket.forEach((product,index) => {
//     document.getElementById("litest").innerHTML += 
// `
// <li class="list-group-item d-flex flex-row justify-content-between ">
//     <div d-flex flex-row">
//     <span class="my-auto lh-1" style="font-size:small; white-space: nowrap;width: 50px;overflow: hidden;text-overflow: ellipsis; ">${product.name}</span>
//     </div> 
//     <div>
//     <span class="fw-bold">${product.price["2020"]}</span> 
//     </div>
//     <div class="my-auto d-flex flex-row">
//     <span class="fw-bold me-2 my-auto " style="font-size:0.7rem;">1 Adet</span> 
//     <button class="btn btn-danger" style="padding: 0px 5px;" onClick="deleteProduct(${index})"><i class="bi bi-x"></i></button>
//     </div>
// </li>
// `})