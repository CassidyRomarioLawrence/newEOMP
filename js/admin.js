let clothing = JSON.parse(localStorage.getItem('clothing'))

// Tabled Product Information
function displayed(){
    clothing.forEach((clothing)=>{
        document.querySelector('.table').innerHTML+=`
        <tr id="pretty">
        <th scope="row">${clothing.id}</th>
        <td>${clothing.description.name}</td>
        <td>${clothing.description.color}</td>
        <td>R${clothing.price}</td>
        <td>
        <i class="fa-solid fa-pen-to-square" onclick='' data-bs-toggle="modal" data-bs-target="#Modal1"></i>
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
    localStorage.setItem('clothing', JSON.stringify(clothing));
  displayed(clothing);
  // Automatic Reload
  location.reload();
})
// Sorter

// Delete



// Edit
