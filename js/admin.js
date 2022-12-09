let clothing = JSON.parse(localStorage.getItem('product'))

function displayed(){
    clothing.forEach((product)=>{
        document.querySelector('.table').innerHTML+=`
        <tr id="pretty">
        <th scope="row">${product.id}</th>
        <td>${product.description.name}</td>
        <td>${product.description.availSizes}</td>
        <td>${product.description.color}</td>
        <td>R${product.price}</td>
        <td>
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-trash-can"></i>
        </td>
      </tr>`
    })
};

displayed();

// let add = document.querySelector('#addProduct');

// add.addEventListener('click', (e)=>{
//     e.preventDefault();
//     let name = document.querySelector('#productName').value;
//     let size = document.querySelector('#productSize').value;
//     let color = document.querySelector('#productColor').value;
//     let price = document.querySelector('#price').value;
//     let image = document.querySelector('#image').value;
//     let type = document.querySelector('#type').value;

//     clothing.push(
//         {
//             id: clothing.length+1,
//             img: image,
//             description:{
//                 name: name,
//                 availSizes: size,
//                 color:color
//             },
//             price: price,
//             type: type
//         }
//     )
//     localStorage.setItem('product', JSON.stringify(clothing));
//     displayed(clothing);
// })