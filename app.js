document.addEventListener('DOMContentLoaded', () => {
  console.log('app.js:', data);

  // data.products.forEach(product => console.log(product.name));

  const products = document.querySelector("#products");
  
  for (const product of data.products) {
    const productList = document.createElement("ul");
    productList.textContent = `${product.name}:`;
    products.appendChild(productList);
    
    const addToList = function(detail) {
      productDetail = document.createElement("li");
      productDetail.textContent = product[detail];
      productDetail.classList.add("product")
      productList.appendChild(productDetail);
    }
    
    let details = ['description', 'price'];
    details.forEach(detail => addToList(detail));
    
  }

});
