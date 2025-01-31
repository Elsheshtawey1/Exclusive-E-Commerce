window.addEventListener('scroll',function(){const navbar=document.querySelector('.navbar');if(window.scrollY>50){navbar.classList.add('scrolled')}else{navbar.classList.remove('scrolled')}});let cart=document.querySelector('.cart');let cartShopIcon=document.querySelector('.cart-shop');let closeCartIcon=document.querySelector('.close-cart');function openCart(){cart.classList.add('active')}
function closeCart(){cart.classList.remove('active')}
cartShopIcon.addEventListener('click',openCart);closeCartIcon.addEventListener('click',closeCart);let product_cart=JSON.parse(localStorage.getItem('product_cart'))||[];var items_in_cart=document.querySelector(".items-in-cart");function addToCart(id,btn){product_cart.push(all_products_json[id]);btn.classList.toggle("active");localStorage.setItem('product_cart',JSON.stringify(product_cart));console.log(product_cart);getCartItems()}
let cartCount=document.getElementById('cart-count');let total=document.getElementById('total');function getCartItems(){let total_price=0;let items_c="";for(let i=0;i<product_cart.length;i++){items_c+=`  
        <div class="items-cart">
            <img src="${product_cart[i].img}" alt="${product_cart[i].name}">
            <div class="content">  
                <h4>${product_cart[i].name}</h4>  
                <p class="price-cart">${product_cart[i].price}</p> 
            </div>  
            <button onclick="remove_items(${i})" class="delete-item"><i class="fa-solid fa-trash-can"></i></button>  
        </div>`;total_price+=parseFloat(product_cart[i].price)}
items_in_cart.innerHTML=items_c;cartCount.innerHTML=product_cart.length;total.innerHTML="$"+total_price.toFixed(2)}
function remove_items(index){product_cart.splice(index,1);localStorage.setItem('product_cart',JSON.stringify(product_cart));getCartItems();let add_to_cart=document.querySelectorAll('.fa-cart-plus');add_to_cart.forEach((btn,idx)=>{const productId=btn.getAttribute('data-id');if(product_cart.some(product=>product.id==productId)){btn.classList.add('active')}else{btn.classList.remove('active')}})}
function heart(element){element.classList.toggle("active")}
const counters=document.querySelectorAll('.counter');const section=document.getElementById('counter-section');function startCounter(counter){const target=+counter.getAttribute('data-target');const speed=50;const increment=Math.ceil(target/100);let current=0;function updateCounter(){current+=increment;if(current>=target){counter.innerText=(target/1000)+"K"}else{counter.innerText=(current/1000).toFixed(1)+"K";setTimeout(updateCounter,speed)}}
updateCounter()}
const observer=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting){counters.forEach((counter)=>startCounter(counter));observer.disconnect()}})},{threshold:0.5});observer.observe(section)