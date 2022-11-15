/*
    Base de datos de productos
*/

let productos = [
    {
        id: 1,
        nombre: 'Pera Conferencia',
        precio: 0.34,
        imagen: 'item1.jpeg'
    },
    {
        id: 2,
        nombre: 'Manzana Golden',
        precio: 0.36,
        imagen: 'item2.jpeg'
    },
    {
        id: 3,
        nombre: 'Uvas',
        precio: 2.60,
        imagen: 'item3.jpeg'
    },
    {
        id: 4,
        nombre: 'Banana',
        precio: 0.21,
        imagen: 'item4.jpeg'
    },
    {
        id: 5,
        nombre: 'Melón Galia',
        precio: 2.71,
        imagen: 'item5.jpeg'
    },
    {
        id: 6,
        nombre: 'Mandarina',
        precio: 0.36,
        imagen: 'item6.jpeg'
    },
    {
        id: 7,
        nombre: 'Piña',
        precio: 2.30,
        imagen: 'item7.jpeg'
    },
    {
        id: 8,
        nombre: 'Mango',
        precio: 1.23,
        imagen: 'item8.jpeg'
    }



];

let cartItems = [];

function renderProducts(){

    let listElement = document.getElementById('list-items');

    for( let i = 0 ; i < productos.length; i++ ){

        let divElementItem = document.createElement('div');
        divElementItem.classList.add('item');

        let imgElementItem = document.createElement('img');
        imgElementItem.classList.add('item-img');
        let url = './assets/' + productos[i].imagen;
        imgElementItem.setAttribute('src', url);

        let nameElementItem = document.createElement('p');
        nameElementItem.classList.add('item-name');
        nameElementItem.textContent = productos[i].nombre;

        let priceElementItem = document.createElement('p');
        priceElementItem.classList.add('item-price');
        priceElementItem.textContent = productos[i].precio + '€';
     
        let buttonElementItem = document.createElement('button');
        buttonElementItem.classList.add('item-add-btn');
        buttonElementItem.textContent = 'Añadir al carrito';
        buttonElementItem.addEventListener('click', function() { addProductsToCart(productos[i]) });
        
        
        listElement.appendChild(divElementItem);
        divElementItem.appendChild(imgElementItem);
        divElementItem.appendChild(nameElementItem);
        divElementItem.appendChild(priceElementItem);
        divElementItem.appendChild(buttonElementItem)
    }   
}


function addProductsToCart(item){
    cartItems.push(item);
    renderCart();
}


function renderCart(){
    let elementNoCartList = document.getElementById('cart-no-products');
    let elementCartList = document.getElementById('cartItems');
    elementCartList.textContent = ''; 
    let totalPrice = 0;
    if(cartItems.length > 0){
        elementNoCartList.style.display = 'none';

        for( let i = 0; i < cartItems.length; i++){

            let elementCartItem = document.createElement('div');
            elementCartItem.classList.add('cart-item');

            let elementCartItemDescription = document.createElement('div');
            // elementCartItemDescription.classList.add('cart-item-description');

            let elementCartItemSelection = document.createElement('div');
            elementCartItemSelection.classList.add('cart-item-selection');

            let elementCartImg = document.createElement('img');
            let url2 = './assets/' + productos[i].imagen; 
            elementCartImg.setAttribute('src', url2);
            elementCartImg.classList.add('cart-item-img');
            

            let elementCartQuantity = document.createElement('p');
            elementCartQuantity.classList.add('cart-item-quantity');
            elementCartQuantity.textContent = '1X';

            let elementCartDescription = document.createElement('p');
            elementCartDescription.classList.add('cart-item-description');
            elementCartDescription.textContent = cartItems[i].nombre;

            let elementCartPrice = document.createElement('p');
            elementCartPrice.classList.add('cart-item-price');
            elementCartPrice.textContent = cartItems[i].precio + '€';

            let elementItemBtn = document.createElement('button');
            elementItemBtn.classList.add('cart-item-btn');
            elementItemBtn.textContent = '-';
            elementItemBtn.addEventListener('click', function() { deleteProductFromCart(i) });

            
            elementCartItemDescription.appendChild(elementCartImg);
            elementCartItemDescription.appendChild(elementCartDescription);
            elementCartItemDescription.appendChild(elementCartPrice);

            elementCartItemSelection.appendChild(elementCartQuantity);
            elementCartItemSelection.appendChild(elementItemBtn);
        
            elementCartItem.appendChild(elementCartItemDescription);
            elementCartItem.appendChild(elementCartItemSelection);
            
            elementCartList.appendChild(elementCartItem);
            
            console.log(cartItems[i].precio);
            totalPrice += cartItems[i].precio;            
        }

        let elementTotal = document.createElement('p');
        elementTotal.classList.add('cart-total');
        elementTotal.textContent = 'Total: ' + totalPrice + '€';

        elementCartList.appendChild(elementTotal);

    } else {
        elementNoCartList.style.display = 'flex';
    }
}

function deleteProductFromCart(elementPosition){
    let cartItemsAux = [];

    for(let i = 0; i< cartItems.length; i++){
        if(i !== elementPosition){
            cartItemsAux.push(cartItems[i]);
        }
    }
    cartItems = cartItemsAux;
    renderCart();
}


renderProducts();
renderCart();




