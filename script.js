const produtos = [ 
    {"nome":"Coxinha","preco":8.99,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2yhPJtJMlmP320r-TDfQV4rCphE_oQgg19hdy0zyR2g&s=10"},
    {"nome":"Risoles","preco":7.99,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxfwnHsLH8epwHZgWYHop3cFOKQqhN8FIkEn9ImGgMrQ&s=10"},
    {"nome":"Hamburguer","preco":21.99,"imagem":"https://tastecooking.com/wp-content/uploads/2010/01/shutterstock_319840817-e1538157469224.jpg"}  
];


produtos.forEach(produto => {
    document.getElementById("produtos").innerHTML += 
         `<div class = produto>
         <img src="${produto.imagem}"
         <h3> ${produto.preco} </h3>
         <p> ${produto.nome} </p>
         </div>`;
});