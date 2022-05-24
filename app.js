document.addEventListener('DOMContentLoaded', () => {
  console.log('app.js:', data);

  // data.products.forEach(product => console.log(product.name));
  const products = document.querySelector("#products");

  // const addToList = (detail, product) => {
  //   productDetail = document.createElement("id");
  //   productDetail.textContent = product['detail'];
  //   productList.appendChild(productDetail);
  // }
  
  for (const product of data.products) {
    const productList = document.createElement("ul");
    productList.textContent = `${product.name}:`;
    products.appendChild(productList);
    


    const addToList = function(detail) {
      productDetail = document.createElement("li");
      productDetail.textContent = product[detail];
      productList.appendChild(productDetail);
    }
    
    let details = ['description', 'price'];
    details.forEach(detail => addToList(detail));
    

  }


});
