let clothing = JSON.parse(localStorage.getItem('product')) ?
JSON.parse(localStorage.getItem('product')) :
[
    {
        id:1,
        img:"../assets/Tee1Back.png",
        description:{
            name:"Men Bear Cartoon Graphic Tee",
            availSizes:"S, M, L, XL, XXL",
            color:"Light Grey"
        },
        price:135,
        type:"T-shirt"
    },
    {
        id:2,
        img:"../assets/Tee3Front.png",
        description:{
            name:"Men Reflective Bear & Slogan Graphic Tee",
            availSizes:"S, M, L, XL, XXL",
            color:"Black"
        },
        price:146,
        type:"T-shirt"
    },
    {
        id:3,
        img:"../assets/Shorts1Front.png",
        description:{
            name:"Men Drawstring Waist Straight Leg Shorts",
            availSizes:"S, M, L, XL, XXL",
            color:"Apricot"
        },
        price:263,
        type:"Shorts"
    },
    {
        id:4,
        img:"../assets/Pants2Front.png",
        description:{
            name:"Men Plaid Slant Pocket Tailored Pants",
            availSizes:"S, M, L, XL, XXL",
            color:"Navy Blue"
        },
        price:286,
        type:"Trousers"
    },
    {
        id:5,
        img:"../assets/Pants5front.png",
        description:{
            name:"Drawstring Waist Gingham Pants",
            availSizes:"S, M, L, XL, XXL",
            color:"Black and White"
        },
        price:310,
        type:"Trousers"
    },
    {
        id:6,
        img:"../assets/Shorts2Front.png",
        description:{
            name:"Letter Embroidery Flap Pocket Shorts",
            availSizes:"S, M, L, XL, XXL",
            color:"Black"
        },
        price:280,
        type:"Shorts"
    },
    {
        id:7,
        img:"../assets/Tee4Front.png",
        description:{
            name:"Men Astronaut & Letter Graphic Tee",
            availSizes:"S, M, L, XL, XXL",
            color:"Apricot"
        },
        price:148,
        type:"T-shirt"
    },
    {
        id:8,
        img:"../assets/Tee5Front.png",
        description:{
            name:"Men Bear Print Round Neck Tee",
            availSizes:"S, M, L, XL, XXL",
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
    <p class="card-text">Available sizes: ${product.description.availSizes}</p>
    <p class="card-text">Color: ${product.description.color}</p>
    <p class="card-text">Price: R${product.price}</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>`
    })
};

displayed()

localStorage.setItem('product',JSON.stringify(clothing));