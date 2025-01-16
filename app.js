let displaymenus = document.getElementById("displaymenus");
function clickevent() {
  displaymenus.classList.toggle("hidden");
  displaymenus.style.transition = "0.1s";
}

let btn=document.querySelectorAll('.btn');
let product=document.querySelectorAll('.product');
for(i=0;i<btn.length;i++){
  btn[i].addEventListener('click',(e)=>{
    e.preventDefault();
    const filter=e.target.dataset.filter;
    product.forEach((product)=>{
      if(filter=='All'){
        product.style.display='block';
      }else{
        if(product.classList.contains(filter)){
          product.style.display='block';
        }else{
          product.style.display='none';
        }
      }
    })
  })
}


function searchfunction(){
  let search=document.getElementById('search').value.toLowerCase();
  let product1=document.querySelectorAll('.product');
   product1.forEach((product)=>{
    let data=product.getAttribute('data-name').toLowerCase();
    if(data.includes(search)){
      product.style.display='block'
    }else{
      product.style.display='none'
    }
   })
}


function addtocart(name,price,img){
let cart = JSON.parse(localStorage.getItem('cart'))||[]
let existingitem=cart.find((item)=>item.name===name);
if(existingitem){
  existingitem.quantity+=1;
}else{
  cart.push({name,price,img,quantity:1})
}
localStorage.setItem('cart',JSON.stringify(cart));
alert(name + " added in your cart")
}

