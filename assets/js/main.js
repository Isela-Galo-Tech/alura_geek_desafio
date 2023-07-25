// Datos de ejemplo de los productos
const products = [
    {
      title: "Producto 1",
      description: "Descripción del producto 1",
      price: 9.99
    },
    {
      title: "Producto 2",
      description: "Descripción del producto 2",
      price: 14.99
    },
    // Añade los demás productos aquí
    // ...
  ];
  
  // Función para crear el contenido de los productos
  function createProductElement(product) {
    const productElement = document.createElement("div");
    productElement.className = "product";
  
    const titleElement = document.createElement("h3");
    titleElement.className = "title";
    titleElement.textContent = product.title;
  
    const descriptionElement = document.createElement("p");
    descriptionElement.className = "description";
    descriptionElement.textContent = product.description;
  
    const priceElement = document.createElement("p");
    priceElement.className = "price";
    priceElement.textContent = "$" + product.price.toFixed(2);
  
    const buttonElement = document.createElement("button");
    buttonElement.className = "button";
    buttonElement.textContent = "Agregar al carrito";
    // Aquí puedes agregar el evento onclick para realizar alguna acción al hacer clic en el botón
  
    productElement.appendChild(titleElement);
    productElement.appendChild(descriptionElement);
    productElement.appendChild(priceElement);
    productElement.appendChild(buttonElement);
  
    return productElement;
  }
  
  // Función para mostrar los productos en una sección específica
  function displayProducts(sectionId, products) {
    const section = document.getElementById(sectionId);
    if (!section) return;
  
    const productsContainer = section.querySelector(".products-container");
    if (!productsContainer) return;
  
    products.forEach(product => {
      const productElement = createProductElement(product);
      productsContainer.appendChild(productElement);
    });
  }
  
  // Mostrar los productos en cada sección
  displayProducts("section1", products.slice(0, 4)); // Muestra los primeros 4 productos en la sección 1
  displayProducts("section2", products.slice(4, 8)); // Muestra los siguientes 4 productos en la sección 2
  displayProducts("section3", products.slice(8));    // Muestra l