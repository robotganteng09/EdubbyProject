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
        const productPrice = this.getAttribute('data-price')
        let existingProduct = cart.find((item) => {
            item.name == productName;
        })
        if(existingProduct){
            existingProduct.quantity++
        }  else{
            cart.push({
                name:productName,
                price:productPrice,
                quantity:1
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
    let cartTotalcontainer = document.getElementById("cart-total")
    
    cartcountcontainer.textContent = cartCount
    cartItemContainer.innerHTML = "" 
    let total = 0
    cart.forEach((item) => {
        let listItem = document.createElement("li");
        listItem.classList.add(
            "list-group-item","d-flex","justify-content-between","align-items-center"
        );
        listItem.innerHTML = `
        ${item.name}- Rp.${item.price}x${item.quantity}
          <button class="btn btn-sm btn-danger remove-item" data-name = "${item.name}"> hapus</button>
        `
        cartItemContainer.appendChild(listItem)
        total += item.price*item.quantity

    })
    cartTotalcontainer.textContent = total
    document.querySelectorAll(".remove-item")
    .forEach((button) =>{
        button.addEventListener("click",function(){
            let name = this.getAttribute('data-name')
            removeCart(name)
        })
    })
 
}
function removeCart(name){
    let itemIndex = cart.findIndex((product) => product.name == name)
    if(itemIndex > 0){
        cartCount-= cart[itemIndex].quantity
        cart.splice(itemIndex,1)
        
    }
    updateCart()
}