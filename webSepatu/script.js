document.getElementById('search-input').addEventListener('input',function(){
    let searchValue = this.value.toLowerCase()
    console.log(searchValue)
    let products = document.querySelectorAll('.product-card')
    console.log(products)
    products.forEach(function(product){
        let productName = product.getAttribute('data-name').toLowerCase()
        if(productName.includes(searchValue)){
            product.style.display = 'block'
            console.log(searchValue)
        } else {
            product.style.display = 'none'
        }
    })
})


let cart = []
let cartCount = 0
document.querySelectorAll('.add-cart').forEach((button) => {
    button.addEventListener('click',function(){
        const productName = this.getAttribute('data-name')
        let existingProduct = cart.find((item) => {
            item.name == productName;
        })
        if(existingProduct){
            existingProduct.quantity++
        }  else{
            cart.push({
                name:productName,
            })
        }
        cartCount++;
        document.getElementById("cart-count").innerText = cartCount

        alert(`${productName} telah ditambahkan`)
        updateCart()

    })

}
)

function updateCart(){
    let cartItemContainer = document.getElementById("cart-items")
    let cartcountcontainer = document.getElementById("cart-count")

    cartcountcontainer.textContent = cartCount
    cartItemContainer.innerHTML = "" 
    cart.forEach((item) => {
        let listItem = document.createElement("li");
        listItem.classList.add(
            "list-group-item","d-flex","justify-content-between","align-items-center"
        );
        listItem.innerHTML = `
        ${item.name}
          <button class="btn btn-sm btn-danger remove-item" data-name = "${item.name}"> hapus</button>
        `
        cartItemContainer.appendChild(listItem)
    })

}