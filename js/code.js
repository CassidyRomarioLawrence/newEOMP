let clothing = JSON.parse(localStorage.getItem('clothing')) ?
JSON.parse(localStorage.getItem('clothing')) :
[
    {
        id:1,
        img:"../assets/Tee1Back.png",
        description:{
            name:"Men Bear Cartoon Graphic Tee",
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
            color:"Black"
        },
        price:120,
        type:"T-shirt"
    },
];

function displayed(){
    clothing.forEach((clothing)=> {
        document.querySelector('#card').innerHTML+=`
        <div class="card m-3 p-2 text-center" style="width: 18rem;">
  <img src="${clothing.img}" class="card-img-top" alt="image">
  <div class="card-body">
    <h5 class="card-title">${clothing.description.name}</h5>
    <p class="card-text">Color: ${clothing.description.color}</p>
    <p class="card-text">Price: R${clothing.price}</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>`
    })
};

displayed();

localStorage.setItem('clothing', JSON.stringify(clothing));

// Filter
// function productType(){
//     let type = document.querySelector('#productType').value;
//     console.log(productType);
//     if(type == "Any"){
//         displayed(clothing);
//         return;
//     }
//     let filtered = clothing.filter((clothing)=>{
//         return clothing.type == type;
//     });
//     displayed(filtered);
// }