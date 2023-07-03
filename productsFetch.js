let items;
let key;
let filteredItems;
let main = document.querySelector('main');
let home = document.querySelector('.home');
let categories = document.querySelectorAll('.cat');
let select = document.querySelector('select');
let article = document.querySelector('article')


fetchProducts();//CALLING the function to display all products by default

async function fetchProducts() {
  items = await fetch('https://dummyjson.com/products');
  let items2 = await fetch('https://fakestoreapi.com/products/');
  items = await items.json();
  items2 = await items2.json();
  items = items.products;
  items = [...items, ...items2];//(...) used to convert array elements into individual elements
  items = items.filter(e => 'OPPOF19' !== e.title)//removing the product oppof19 due to bad photo dimensions
  console.log(items);
  displayData(items);
  filteredItems = items;
}

function displayData(filteredItems) {
  main.innerHTML = '';
  let toHtml = filteredItems.map((product, index) => {
    return (`<article onclick='productDisplay(${index})'>
            <img src='${product?.images ? product.images[0] : product.image}'/>
            <h3>${product.title.slice(0, 15)}</h3>
            <h4>${product.description.slice(0, 300)}<h4>
            <h2>$${product.price}</h2>
      </article>`)
  })
  main.innerHTML = toHtml.join('');
}
function productDisplay(index) {

  let product = filteredItems.find((e, i) => index == i);
  main.innerHTML = ''
  main.innerHTML = `<section>
   <img src='${product?.images ? product.images[0] : product.image}'/>
   <aside>
   <h3>${product.title}</h3>
   <h4>${product.description}<h4>
   <h2>$${product.price}</h2>


   </aside>
   </section>
   
   `
}
home.addEventListener('click', fetchProducts);

select.addEventListener('change', (event) => {
  console.log(event)
  let text = select.options[select.selectedIndex].text;
  text = text.toLowerCase();
  filteredItems = items.filter((e) => text == e.category)
  displayData(filteredItems);
});

categories.forEach((category) => {
  category.addEventListener('click', (event) => {
    key = event.target.outerText.toLowerCase();
    console.log(key);
    filteredItems = items.filter(e => key == e.category)
    displayData(filteredItems)
  })
})

