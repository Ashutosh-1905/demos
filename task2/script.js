const products = [
  { name: "Laptop", category: "Electronics", price: "$999" },
  { name: "Shoes", category: "Fashion", price: "$49" },
  { name: "Phone", category: "Electronics", price: "$699" },
  { name: "Watch", category: "Accessories", price: "$199" },
  { name: "T-shirt", category: "Fashion", price: "$25" },
  { name: "Headphones", category: "Electronics", price: "$89" },
];

const searchInput = document.querySelector("#searchInput");
const productContainer = document.querySelector("#productContainer");

searchInput.addEventListener("input", (e) => {
  console.log("Current input value:", e.target.value);
});

function renderProducts(productList) {
  
  productContainer.innerHTML = "";
  
  if (productList.length === 0) {
    productContainer.innerHTML = `<p class="text-gray-500 text-lg">No products found</p>`;
    return;
  };

  productList.forEach((product) => {
    const card = document.createElement("div");
    card.className = "max-w-sm bg-white rounded-lg shadow-md p-6";
     card.innerHTML = `
            <h2 class="text-xl font-semibold mb-2">${product.name}</h2>
            <p class="text-gray-700 text-lg mb-4">${product.price}</p>
            <p class="text-gray-500 text-sm mb-4">${product.category}</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Buy Now</button>
        `;
    
    productContainer.appendChild(card);
  });
}

// Initial render (show all products)
renderProducts(products);


// Filter products on input

searchInput.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();

  const filtered = products.filter((product) => {
    return product.name.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue)
  });

  renderProducts(filtered)
});

