let clothing = JSON.parse(localStorage.getItem('product'))

// Tabled Product Information
function displayed(){
    clothing.forEach((product)=>{
        document.querySelector('.table').innerHTML+=`
        <tr id="pretty">
        <th scope="row">${product.id}</th>
        <td>${product.description.name}</td>
        <td>${product.description.color}</td>
        <td>R${product.price}</td>
        <td>
        <i class="fa-solid fa-pen-to-square" id="deleteMe" data-bs-toggle="modal" data-bs-target="#Modal1"></i>
        <i class="fa-solid fa-trash-can"></i>
        </td>
      </tr>`
    })
};

displayed();

// Add Button

let add = document.querySelector('#addIt');

add.addEventListener('click', ()=>{
    let name = document.querySelector('#productName').value;
    let color = document.querySelector('#productColor').value;
    let price = document.querySelector('#price').value;
    let img = document.querySelector('#productImage').value;
    let type = document.querySelector('#type').value;

    clothing.push(
      {
        id: clothing.length + 1,
            img,
            description:{
                name,
                color
            },
            price,
            type
        }
    )
    localStorage.setItem('product', JSON.stringify(clothing));
  displayed(clothing);
  // Automatic Reload
  location.reload()
})
// Sorter
let sorter = document.querySelector('#sorter')

sorter.addEventListener('click', () => {
  clothing.sort(function (a, b) {
  if (a.productName < b.productName) { return -1 }
  if (a.productName > b.productName) { return 1 }
  return 0;
  })
  localStorage.setItem('product', JSON.stringify(clothing));
  displayed(clothing);
})


// Delete




// Edit
