let clothing = JSON.parse(localStorage.getItem('product')) ?
JSON.parse(localStorage.getItem('product')) :
[
    {
        id:1,
        img:"https://i.postimg.cc/Hkbr0YkW/Tee1Back.png",
        description:{
            name:"Men Bear Cartoon Graphic Tee",
            color:"Light Grey"
        },
        price:135,
        type:"T-shirt"
    },
    {
        id:2,
        img:"https://i.postimg.cc/h43QcZYn/Tee3-Front.png",
        description:{
            name:"Men Reflective Bear & Slogan Graphic Tee",
            color:"Black"
        },
        price:146,
        type:"T-shirt"
    },
    {
        id:3,
        img:"https://i.postimg.cc/0jHw4cT8/Shorts1-Front.png",
        description:{
            name:"Men Drawstring Waist Straight Leg Shorts",
            color:"Apricot"
        },
        price:263,
        type:"Shorts"
    },
    {
        id:4,
        img:"https://i.postimg.cc/tJR3w17z/Pants2-Front.png",
        description:{
            name:"Men Plaid Slant Pocket Tailored Pants",
            color:"Navy Blue"
        },
        price:286,
        type:"Trousers"
    },
    {
        id:5,
        img:"https://i.postimg.cc/hG9VG8dr/Pants5front.png",
        description:{
            name:"Drawstring Waist Gingham Pants",
            color:"Black and White"
        },
        price:310,
        type:"Trousers"
    },
    {
        id:6,
        img:"https://i.postimg.cc/3wHDzycD/Shorts2-Front.png",
        description:{
            name:"Letter Embroidery Flap Pocket Shorts",
            color:"Black"
        },
        price:280,
        type:"Shorts"
    },
    {
        id:7,
        img:"https://i.postimg.cc/HLpkQbN3/Tee4-Front.png",
        description:{
            name:"Men Astronaut & Letter Graphic Tee",
            color:"Apricot"
        },
        price:148,
        type:"T-shirt"
    },
    {
        id:8,
        img:"https://i.postimg.cc/wj5Byww7/Tee5-Front.png",
        description:{
            name:"Men Bear Print Round Neck Tee",
            color:"Black"
        },
        price:120,
        type:"T-shirt"
    },
];

function displayed(){
    clothing.forEach((product)=> {
        document.querySelector('#card').innerHTML+=`
        <div class="card m-3 p-2 text-center" style="width: 18rem;">
  <img src="${product.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.description.name}</h5>
    <p class="card-text">Color: ${product.description.color}</p>
    <p class="card-text">Price: R${product.price}</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>`
    })
};

displayed()

localStorage.setItem('product', JSON.stringify(clothing));

let cart = [];

localStorage.setItem('cart', JSON.stringify(cart));
