// document.getElementById('search-input').addEventListener('input',function(){
//     let searchValue = this.value.toLowerCase()
//     console.log(searchValue)
//     let products = document.querySelectorAll('.product-card')
//     console.log(products)
//     products.forEach(function(product){
//         let productName = product.getAttribute('data-name').toLowerCase()
//         if(productName.includes(searchValue)){
//             product.style.display = 'block'
//             console.log(searchValue)
//         } else {
//             product.style.display = 'none'
//         }
//     })
// })


let cart = []
let cartCount = 0
document.querySelectorAll('.add-cart').forEach((button) => {
    button.addEventListener('click',function(){
        const productName = this.getAttribute('data-name')
        alert(`${productName} telah ditambahkan`)
    })

}
)