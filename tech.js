// import productsData from "./apiData";
let productsData = [
    {
        id: 1,
        tag: "hero-product",
        tagline: "Keep the noise out, or in. You choose.",
        heroImage: "/images/products/jbl660nc-1.png",
        images: [
            "./assests/jbl660nc-1.png",
            // "/images/products/jbl660nc-2.png",
            // "/images/products/jbl660nc-3.png",
            // "/images/products/jbl660nc-4.png",
        ],
        brand: "JBL",
        title: "JBL Live 660NC",
        info: "Wireless Over-Ear NC Headphones",
        category: "Headphones",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 9999,
        originalPrice: 14999,
        quantity: 1,
        ratings: 1234,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 2,
        tag: "featured-product",
        images: [
            "./assests/boat518-1.png",
            // "/images/products/boat518-2.png",
            // "/images/products/boat518-3.png",
            // "/images/products/boat518-4.png"
        ],
        brand: "boAt",
        title: "boAt Rockerz 518",
        info: "On-Ear Wireless Headphones",
        category: "Headphones",
        type: "On Ear",
        connectivity: "Wireless",
        finalPrice: 1299,
        originalPrice: 3990,
        quantity: 1,
        ratings: 1321,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 3,
        tag: "hero-product",
        tagline: "Featherweight for comfort all-day.",
        heroImage: "/images/products/boat131-3.png",
        images: [
            "./assests/boat131-1.png",
            // "/images/products/boat131-2.png",
            // "/images/products/boat131-3.png",
            // "/images/products/boat131-4.png",
        ],
        brand: "boAt",
        title: "boAt Airdopes 131",
        info: "Wireless In-Ear Earbuds",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 1099,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1244,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 4,
        images: [
            "./assests/boat110-1.png",
            // "/images/products/boat110-2.png",
            // "/images/products/boat110-3.png",
            // "/images/products/boat110-4.png",
        ],
        brand: "boAt",
        title: "boAt BassHeads 110",
        info: "In-Ear Wired Earphones",
        category: "Earphones",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 449,
        originalPrice: 999,
        quantity: 1,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 5,
        images: [
            "./assests/boat410-1.png",
            // "/images/products/boat410-2.png",
            // "/images/products/boat410-3.png",
            // "/images/products/boat410-4.png",
        ],
        brand: "boAt",
        title: "boAt Rockerz 410",
        info: "Bluetooth & Wired On-Ear Headphones",
        category: "Headphones",
        type: "On Ear",
        connectivity: "Bluetooth & Wired",
        finalPrice: 1599,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1563,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 6,
        images: [
            "./assests/jbl200bt-1.png",
            // "/images/products/jbl200bt-2.png",
            // "/images/products/jbl200bt-3.png",
            // "/images/products/jbl200bt-4.png",
        ],
        brand: "JBL",
        title: "JBL Live 200BT",
        info: "In-Ear Wireless Neckbands",
        category: "Neckbands",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 3699,
        originalPrice: 5299,
        quantity: 1,
        ratings: 836,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 7,
        tag: "hero-product",
        tagline: "Give your favourite music a boost.",
        heroImage: "/images/products/sonyxb910n-1.png",
        images: [
            "./assests/sonyxb910n-1.png",
            // "/images/products/sonyxb910n-2.png",
            // "/images/products/sonyxb910n-3.png",
            // "/images/products/sonyxb910n-4.png",
        ],
        brand: "Sony",
        title: "Sony WH-XB910N",
        info: "Wireless Over-Ear Headphones",
        category: "Headphones",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 13489,
        originalPrice: 19990,
        quantity: 1,
        ratings: 679,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 8,
        tag: "featured-product",
        images: [
            "./assests/jbl760nc-1.png",
            // "/images/products/jbl760nc-2.png",
            // "/images/products/jbl760nc-3.png",
            // "/images/products/jbl760nc-4.png",
        ],
        brand: "JBL",
        title: "JBL Tune 760NC",
        info: "Wireless Over-Ear NC Headphones",
        category: "Headphones",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 5999,
        originalPrice: 7999,
        quantity: 1,
        ratings: 755,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 9,
        tag: "featured-product",
        images: [
            "./assests/boat255r-1.png",
            // "/images/products/boat255r-2.png",
            // "/images/products/boat255r-3.png",
            // "/images/products/boat255r-4.png",
        ],
        brand: "boAt",
        title: "boAt Rockerz 255",
        info: "In-Ear Wireless Neckbands",
        category: "Neckbands",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 899,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1464,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 10,
        images: [
            "./assests/jbl100-1.png",
            // "/images/products/jbl100-2.png",
            // "/images/products/jbl100-3.png",
            // "/images/products/jbl100-4.png",
        ],
        brand: "JBL",
        title: "JBL Wave 100",
        info: "In-Ear Truly Wireless Earbuds",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 2999,
        originalPrice: 6999,
        quantity: 1,
        ratings: 801,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 11,
        images: [
            "./assests/sony1000xm4-1.png",
            // "/images/products/sony1000xm4-2.png",
            // "/images/products/sony1000xm4-3.png",
            // "/images/products/sony1000xm4-4.png"
        ],
        brand: "Sony",
        title: "Sony WF-1000XM4",
        info: "Wireless In-Ear NC Headphones",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 19990,
        originalPrice: 24990,
        quantity: 1,
        ratings: 382,
        rateCount: 3,
        path: "/product-details/",
    },
    {
        id: 12,
        images: [
            "./assests/boat228-1.png",
            // "/images/products/boat228-2.png",
            // "/images/products/boat228-3.png",
            // "/images/products/boat228-4.png",
        ],
        brand: "boAt",
        title: "boAt BassHeads 228",
        info: "In-Ear Wired Earphones",
        category: "Earphones",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 1,
        ratings: 1178,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 13,
        tag: "featured-product",
        images: [
            "./assests/jbl-endu-1.png",
            // "/images/products/jbl-endu-2.png",
            // "/images/products/jbl-endu-3.png",
            // "/images/products/jbl-endu-4.png",
        ],
        brand: "JBL",
        title: "JBL Endurance Run Sports",
        info: "In-Ear Wired Earphones",
        category: "Earphones",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 999,
        originalPrice: 1599,
        quantity: 1,
        ratings: 1144,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 14,
        tag: "featured-product",
        images: [
            "./assests/boat203-1.png",
            // "/images/products/boat203-2.png",
            // "/images/products/boat203-3.png",
            // "/images/products/boat203-4.png",
        ],
        brand: "boAt",
        title: "boAt Airdopes 203",
        info: "In-Ear Truly Wireless Earbuds",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 1074,
        originalPrice: 3999,
        quantity: 1,
        ratings: 1340,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 15,
        images: [
            "./assests/sonych710n-1.png",
            // "/images/products/sonych710n-2.png",
            // "/images/products/sonych710n-3.png",
            // "/images/products/sonych710n-4.png",
        ],
        brand: "Sony",
        title: "Sony WH-CH710N",
        info: "Wireless Over-Ear NC Headphones",
        category: "Headphones",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 8520,
        originalPrice: 14990,
        quantity: 1,
        ratings: 853,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 16,
        images: [
            "./assests/jbl500bt-1.png",
            // "/images/products/jbl500bt-2.png",
            // "/images/products/jbl500bt-3.png",
            // "/images/products/jbl500bt-4.png",
        ],
        brand: "JBL",
        title: "JBL Tune 500BT",
        info: "On-Ear Wireless Headphones",
        category: "Headphones",
        type: "On Ear",
        connectivity: "Wireless",
        finalPrice: 3282,
        originalPrice: 3999,
        quantity: 1,
        ratings: 364,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 17,
        images: [
            "./assests/boat381-1.png",
            // "/images/products/boat381-2.png",
            // "/images/products/boat381-3.png",
            // "/images/products/boat381-4.png",
        ],
        brand: "boAt",
        title: "boAt Airdopes 381",
        info: "In-Ear Wireless Earbuds",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 1699,
        originalPrice: 4990,
        quantity: 1,
        ratings: 1011,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 18,
        images: [
            "./assests/sony-ex14ap-1.png",
            // "/images/products/sony-ex14ap-2.png",
            // "/images/products/sony-ex14ap-3.png",
            // "/images/products/sony-ex14ap-4.png"
        ],
        brand: "Sony",
        title: "Sony MDR-EX14AP",
        info: "In-Ear Wired Earphones",
        category: "Earphones",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 549,
        originalPrice: 1290,
        quantity: 1,
        ratings: 530,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 19,
        images: [
            "./assests/sonyxb400-1.png",
            // "/images/products/sonyxb400-2.png",
            // "/images/products/sonyxb400-3.png",
            // "/images/products/sonyxb400-4.png",
        ],
        brand: "Sony",
        title: "Sony WI-XB400",
        info: "Wireless Extra Bass In-Ear Neckbands",
        category: "Neckbands",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 2690,
        originalPrice: 4990,
        quantity: 1,
        ratings: 474,
        rateCount: 4,
        path: "/product-details/",
    },
];

//Header Part
//toggle visibility of the account section
document.querySelector('.techUser').addEventListener('mouseover', function() {
    document.querySelector('.account').style.display = 'block';
  });

  document.querySelector('.account').addEventListener('mouseleave', function() {
    document.querySelector('.account').style.display = 'none';
  });

  document.querySelector('.search').addEventListener('mouseover', function() {
    document.querySelector('#icons_name_1').style.display = 'block';
  });

  document.querySelector('.search').addEventListener('mouseout', function() {
    document.querySelector('#icons_name_1').style.display = 'none';
  });

  document.querySelector('.shop').addEventListener('mouseover', function() {
    document.querySelector('#icons_name_2').style.display = 'block';
  });

  document.querySelector('.shop').addEventListener('mouseout', function() {
    document.querySelector('#icons_name_2').style.display = 'none';
  });

  document.querySelector('.search').addEventListener('click',function(){
    document.querySelector("#search").style.display='block';
  })

  document.querySelector('#search').addEventListener('mouseleave',function(){
    document.querySelector("#search").style.display='none';
  })


// Empty Shopping cart

  document.querySelector('.shop').addEventListener('click', function() {
    document.querySelector('#hideAll').style.display = 'none';
  });

  document.querySelector('.shop').addEventListener('click', function() {
    document.querySelector('.cart_empty').style.display = 'block';
  });

  document.querySelector('.title').addEventListener('click', function() {
    document.querySelector('#hideAll').style.display = 'block';
  });

  document.querySelector('.title').addEventListener('click', function() {
    document.querySelector('.cart_empty').style.display = 'none';
  });
  

  // Login Details

  document.querySelector('.account-bt').addEventListener('click',function(){
    document.querySelector(".login_detail").style.display='block';
  });

  document.querySelector('.cancel').addEventListener('click',function(){
    document.querySelector(".login_detail").style.display='none';
  });


  //Sign up Details
  
  document.querySelector('.cancel_signup').addEventListener('click',function(){
    document.querySelector(".signup_detail").style.display='none';
  });

  document.querySelector("#create_account").addEventListener('click',function(){
    document.querySelector(".signup_detail").style.display='block';
  });

  document.querySelector("#create_account").addEventListener('click',function(){
    document.querySelector(".login_detail").style.display='none';
  });
   
  document.querySelector("#login").addEventListener('click',function(){
    document.querySelector(".login_detail").style.display='block';
  });
   
  document.querySelector("#login").addEventListener('click',function(){
    document.querySelector(".signup_detail").style.display='';
  });
   

  //Feature images extended 
  document.querySelector("#boat518-1").addEventListener('click',function(){
    document.querySelector(".boat518_Extended").innerHTML="<img src=./assests/boat518-1.png width=600px height=500px>";
  })
  
  document.querySelector("#boat518-2").addEventListener('click',function(){
    document.querySelector(".boat518_Extended").innerHTML="<img src=./assests/boat518-2.png width=600px height=500px>";
  })

  document.querySelector("#boat518-3").addEventListener('click',function(){
    document.querySelector(".boat518_Extended").innerHTML="<img src=./assests/boat518-3.png width=650px height=500px>";
  })
  
  document.querySelector("#boat518-4").addEventListener('click',function(){
    document.querySelector(".boat518_Extended").innerHTML="<img src=./assests/boat518-4.png width=600px height=500px>";
  })
  

  

// Featured images
// let boat = document.querySelector("#boat518");
// boat.addEventListener("click",function(){
           
// })

//        TOP PRODUCTS

// let containerAll = document.querySelector(".cardProduct");
// let productDetails= (product)=>{
//        let productEle = document.createElement("div");
//        productEle.classList.add('cardProduct');
//        productEle.innerHTML=`
//        <div class="container cardProduct">
//        <div class="row">
//          <div class="card cardProduct">
//            <img src="./assests/jbl660nc-1.png" class="card-img-top imgProduct" alt="...">
//            <div class="card-body cardBodyProduct ">
//              <h5 class="card-title">${product.title}</h5>
//              <p class="card-text">${product.info}</p>
//              <span>
//                <p>&#8377; ${product.finalPrice} <del>&#8377; ${product.originalPrice} </del></p>
//              </span>
//              <button class="bt-card">Add To Cart</button>
//            </div>
//          </div>
//        </div>
//      </div>`
//      containerAll.appendChild(productDetails);

    
// }
// productDetails(productsData);

// let containerAll = document.querySelector(".cardConatiner");

// let productDetails = (product) => {
//   let productEle = document.createElement("div");
//   productEle.classList.add('cardConatiner');
//   productEle.innerHTML = `
//     <div class="container cardConatiner ">
//       <div class="row">
//         <div class="card cardProduct">
//           <img src="./assests/jbl660nc-1.png" class="card-img-top imgProduct" alt="...">
//           <div class="card-body cardBodyProduct ">
//             <h5 class="card-title">${product.title}</h5>
//             <p class="card-text">${product.info}</p>
//             <span>
//               <p>&#8377; ${product.finalPrice} <del>&#8377; ${product.originalPrice}</del></p>
//             </span>
//             <button class="bt-card">Add To Cart</button>
//           </div>
//         </div>
//       </div>
//     </div>`;


// };

// productDetails(productsData);



const topContainer = document.querySelector(".cardConatiner");
const  insertCards = ()=>{
    productsData.map((products)=>{
            const cardEle = document.createElement("div");
            cardEle.classList.add('card');
            cardEle.innerHTML=`<div class=" cardConatiner ">
            
              <div class="card cardProduct">
                <img src="${products.images}"  alt="...">
                <div class="card-body cardBodyProduct ">
                  <h5 class="card-title">${products.title}</h5>
                  <p class="card-text">${products.info}</p>
                  <span>
                    <p>&#8377; ${products.finalPrice}<del>&#8377; ${products.originalPrice}</del></p>
                  </span>
                  <button class="bt-card">Add To Cart</button>
        
              </div>
            </div>
          </div>
            `
            topContainer.appendChild(cardEle)
    })    
}
insertCards()

