// https://fakestoreapi.com/products

// yuxaridaki apiden istifade etmekle
// men's clothing categorysi olanlarin
// titlesini ve pricesini ekranda cixaracaqsiz

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())  
  .then(products => {
    products.forEach(product => {
      if (product.category === "men's clothing") {
        console.log(`Title: ${product.title}, Price: ${product.price}`);
      }
    });
  })
  .catch(error => console.error('Error fetching data:', error)); 

