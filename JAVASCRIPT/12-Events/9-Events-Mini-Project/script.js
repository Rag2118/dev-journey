let cart=[];
const cartCount=document.getElementById("cart-count");
const cartItems=document.getElementById("cart-items");
const clearCart=document.getElementById("clear-cart");
const addtoCart=document.getElementsByClassName("add-to-cart");
let totalPrice=document.getElementById("total-price");
function updateCart(){
    cartItems.innerHTML="";
    let j=cart.length;
    for(let i=0; i<j; i++){
        let item=document.createElement("div");
        item.innerHTML=`${cart[i].name} - ${cart[i].price} <button class="remove-btn">Remove</button>`;
        let index=i;
        let removeBtn=item.querySelector(".remove-btn");
        removeBtn.addEventListener("click",()=>{
            cart.splice(index,1);
            updateCart();
            cartCount.textContent=cart.length;
        });
        cartItems.appendChild(item);
    }
    let total=0;
    for(let i=0; i<cart.length; i++){
        total=total + cart[i].price;
    }
    totalPrice.textContent=total;
}
let j=addtoCart.length;
for (let i=0; i<j; i++){
    addtoCart[i].addEventListener("click",()=>{
        let productCard;
        productCard=addtoCart[i].parentElement;
        let productName=productCard.querySelector(".product-name").textContent;
        let productPrice=Number(productCard.querySelector(".product-price").textContent.replace(/[^\d]/g,""));
        let product={
            name:productName,
            price:productPrice
        };
        cart.push(product);
        updateCart();
        cartCount.textContent=cart.length;
    })
};
clearCart.addEventListener("click",()=>{
    cart.length=0;
    updateCart();
    cartCount.textContent=cart.length;
});