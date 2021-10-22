let basket = [];

function addProduct(id) {

    fetch("./products.json").then((response) => response.json()).then((data) => {
        let product = data.find(p => p.id == id)
        basket.push(product)
        basketList()
    })

}

function basketList() {
  
    basket.length!==0 ? document.getElementById("emptyAlert").style.visibility="hidden" : "visible"
    document.getElementById("product").innerHTML = "";

    const counts = {}
    basket.forEach((product, index) => {
        counts[product.id] = (counts[product.id] || 0) + 1;
    });


    Object.entries(counts).forEach(([key, val]) => {

        let productInBasket = basket.find(item => item.id === parseInt(key))


        document.getElementById("product").innerHTML +=
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

    totalPrice()
    


}

function totalPrice(){
    let totalPrice = 0
    basket.forEach(product => {
        totalPrice += product.price[year]
    });
    totalPrice > 0 ? document.getElementById("totalPrice").innerHTML = "Toplam: " + totalPrice.toFixed(2) + " TL" : document.getElementById("totalPrice").innerHTML = ""
}

function deleteProduct(productId) {
    
    let delItemIndex = 0
    let delItem = basket.find((item, index) => {
        item.id === productId ? delItemIndex = index : false

    })
    basket = basket.filter((item, itemIndex) => itemIndex !== delItemIndex)
    basketList()
}
