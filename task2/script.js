const products = [
  { name: "Laptop", category: "Electronics", price: "$999" },
  { name: "Shoes", category: "Fashion", price: "$49" },
  { name: "Phone", category: "Electronics", price: "$699" },
  { name: "Watch", category: "Accessories", price: "$199" },
  { name: "T-shirt", category: "Fashion", price: "$25" },
  { name: "Headphones", category: "Electronics", price: "$89" },
];

<<<<<<< HEAD
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

=======
let inp = document.querySelector("input");

function showProducts(vals) {
  document.querySelector(".products").innerHTML = "";
  vals.forEach(function (product) {
    // Container div
    const card = document.createElement("div");
    card.className = "max-w-sm mt-10 bg-white rounded-lg shadow-md p-6";

    // Product title
    const title = document.createElement("h2");
    title.className = "text-xl font-semibold mb-2";
    title.textContent = product.name;

    // Price
    const price = document.createElement("p");
    price.className = "text-gray-700 text-lg mb-4";
    price.textContent = "$" + product.price;

    // Buy Now button
    const button = document.createElement("button");
    button.className =
      "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600";
    button.textContent = "Buy Now";

    // Append children
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(button);

    // Add to body or any specific container
    document.querySelector(".products").appendChild(card); // or document.querySelector(".some-container").appendChild(card);
  });
}

showProducts(products);

inp.addEventListener("input", function () {
  let newarr = products.filter(function (pr) {
    return pr.name.toLowerCase().startsWith(inp.value.toLowerCase());
  });

  showProducts(newarr);
});
>>>>>>> 16e5327fd04799a178b49f39104f0aed2dea211c
