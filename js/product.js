fetch('/jsonFile/items.json').then((response)=>{if(!response.ok){throw new Error('Network response was not ok')}
return response.json()}).then((data)=>{console.log(data);const items=document.getElementById('product');all_products_json=data;data.forEach((product)=>{items.innerHTML+=`
        <div class="swiper-slide">
          <div class="card m-1">
            <div class="icon">
              <span><i onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus" data-id="${product.id}"></i></span>
              <i onclick="heart(this)" class="fa-regular fa-heart"></i> 
              <span><i class="fa-solid fa-share"></i></span>
            </div>
            <img src="${product.img}" class="card-img-top" loading="lazy" alt="phone">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <p class="card-price">$${product.price}</p>
            </div>
          </div>
        </div>
      `})}).catch((error)=>{console.error('Error fetching the JSON file:',error)})