// Sample categories and productsData (already provided by you)
const categories = ["Vegetables", "Fruits", "Grains & Pulses", "Spices"];

// Assuming productsData is declared globally with all your product info
const productsData = {
    "Vegetables": [
      {name:"ladyfinger", image:"https://media.istockphoto.com/id/507180560/photo/okras-with-raw-okra-in-farm.jpg?s=612x612&w=0&k=20&c=jU1TKJAq3eUtO9bvLzQsNAXNohznfK6TjGc03TODnk8="},
      { name: "Carrot", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90fGVufDB8fDB8fHww" },
      { name: "Potato", image: "https://media.istockphoto.com/id/464363271/photo/raw-potato.jpg?s=612x612&w=0&k=20&c=WPqhSne7_9sr6UQjs_wviukxd5Bs_8YAb77f1oxs1q0=" },
      { name: "Onion", image: "https://plus.unsplash.com/premium_photo-1668076517573-fa01307d87ad?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25pb258ZW58MHx8MHx8fDA%3D" },
      { name: "Tomato", image: "https://plus.unsplash.com/premium_photo-1661811820259-2575b82101bf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9tYXRvfGVufDB8fDB8fHww" },
      { name: "Brinjal", image: "https://images.unsplash.com/photo-1605197378540-10ebaf6999e5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJpbmphbHxlbnwwfHwwfHx8MA%3D%3D" },
      {name:"Pea", image: "https://media.istockphoto.com/id/1156721086/photo/open-green-pea-pods.jpg?s=612x612&w=0&k=20&c=pSNRaXyNH7XQkzHejqJqM0S_n3BvVY0c8zKPlc_OKrY="},
      {name: "cabbage", image:"https://media.istockphoto.com/id/1328912132/photo/cabbage-field-at-fully-mature-stage-ready-to-harvest.jpg?s=612x612&w=0&k=20&c=EVkaA_SQm61ObApMKSATxrKusfOSTJyHTtSvtBpn-Pw="},
      {name: "cauliflower", image:"https://media.istockphoto.com/id/90634594/photo/close-up-of-several-heads-of-cauliflower.jpg?s=612x612&w=0&k=20&c=hpYY7BqSUNwM-oq26wNv5pGLSPf4HijXr3zA0J3yd0E="}
    ],
    "Fruits": [
      { name: "Apple", image: "https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D" },
      { name: "Banana", image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuYW5hfGVufDB8fDB8fHww" },
      { name: "Mango", image: "https://media.istockphoto.com/id/667439312/photo/mangoes-in-basket-fresh-mango.jpg?s=612x612&w=is&k=20&c=pvWgv3U2Zof_iEXtTSZfotR4O5vvC33VQ20ySaOFWAY=" },
      {name: "orange", image: "https://media.istockphoto.com/id/1158172712/photo/close-up-hand-and-oranges-in-orange-farm-with-beautiful-sunshine.jpg?s=612x612&w=0&k=20&c=e5A8SSGe1i7Tgd2fcpuOWhSb9QgFk64HR8MNzxDKo28="},
      {name: "papaya", image: "https://media.istockphoto.com/id/515832816/photo/papaya.jpg?s=612x612&w=0&k=20&c=HsGvJMMfDrxmpteehuXGPM7dnm4IwKWQXsonoNeygqg="},
      {name:"guava", image: "https://media.istockphoto.com/id/1488790257/photo/full-frame-image-of-common-guava-tree-fruits-growing-on-evergreen-tree-branches-displayed-in.jpg?s=612x612&w=0&k=20&c=T7Kto0ersXt0zXRoMOcPa_X_7qm4yPC1KbexjeZlLjE="},
      {name:"grapes", image:"https://media.istockphoto.com/id/1024847158/photo/grapes-at-vineyard.jpg?s=612x612&w=0&k=20&c=bP_k5l2vFZgnQtrBIGV2LcKVV0_6qAdSqsqNqFHBd9s="},
      {name:"pineapple", image:"https://media.istockphoto.com/id/1008731908/photo/fresh-tropical-sliced-pineapple-on-chopping-board-natural-lighting.jpg?s=612x612&w=0&k=20&c=X5syIdcF6EHexqtfQX94BsAuBO4K4hXmmygq-vFS1mE="},
      {name: "litchi", image: "https://media.istockphoto.com/id/1158995828/photo/litchi-chinensis-ripe-red-litchi-fruits-for-sale-by-the-roadside.jpg?s=612x612&w=0&k=20&c=I8jcJ5Pt43hx57HtdAQX4tL5IaWVLk84jCi0iQbslEo="},
    ],
    "Grains & Pulses": [
      { name: "Rice", image: "https://media.istockphoto.com/id/671580286/photo/rice.jpg?s=612x612&w=0&k=20&c=Eo4qfXQVximdCyp5OBfDEi5eObBM17zphPv_V_DOuOg=" },
      { name: "Wheat", image: "https://media.istockphoto.com/id/1557875324/photo/wheat-grain-in-a-hand-after-good-harvest-of-successful-farmer.jpg?s=612x612&w=0&k=20&c=VMrYu6CJnaN_XDmYdf5dxhTitUGUeOxmpVYGQs-d98Y=" },
      {name: " corn", image: "https://media.istockphoto.com/id/1061097354/photo/the-corn-plant-in-the-field.jpg?s=612x612&w=0&k=20&c=NEEzE5il-up8g7NZj_7HJUpyVep18zBRfhnMZ5laLiQ="},
  {name: "Pigeon peas", image:"https://media.istockphoto.com/id/1324180587/photo/macro-close-up-of-organic-arhar-dal-on-a-white-ceramic-soup-spoon-top-view-over-gradient.jpg?s=612x612&w=0&k=20&c=-_hwN2jWbOhHppq2xrODzq8RIdhcp1dIeXK82VDC3TE="}
    ],
    "Spices": [
      { name: "Turmeric", image: "https://media.istockphoto.com/id/1372144940/photo/curcuma-longa-powder-and-rhizomes.jpg?s=612x612&w=0&k=20&c=9rQY81FjSt5pgUwjfkBOPxxBMmFp3WoSrY6AjlZUl5c=" },
      { name: "Cumin", image: "https://media.istockphoto.com/id/980186786/photo/cumin-seeds-in-a-ceramic-bowl-close-up-seasoning-condiment.jpg?s=612x612&w=0&k=20&c=mO6wsT457UOGevKzeJCporyE3Uds2B6v7QtxwCmPRsE=" },
      { name: "fenugreek", image:"https://media.istockphoto.com/id/1078186326/photo/bowl-with-fenugreek-seeds-close-up-used-for-cooking-and-traditinal-medicine-spices-collection.jpg?s=612x612&w=0&k=20&c=3nZfQXnItzqR2GQKiIAIHONqBnTwygs4P_R_oa-27ms="},
      {name: "laurel leaf", image:"https://media.istockphoto.com/id/1365999568/photo/bay-leaf-in-a-bowl-on-wooden-background.jpg?s=612x612&w=0&k=20&c=rAMiGpiiZmOr9PwjwWaZGYIbtBr8x_vCXAv-4Gzhrxc="}
  
    ]
  };
  
// DOM Elements
const categoryList = document.getElementById("categoryList");
const productGrid = document.getElementById("productGrid");
const selectedCategoryTitle = document.getElementById("selectedCategoryTitle");

document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
      window.location.href = `search.html?query=${encodeURIComponent(query)}`;
    }
  });
  

// Populate sidebar categories
categories.forEach(category => {
  const li = document.createElement("li");
  li.textContent = category;
  li.classList.add("category-item");
  li.addEventListener("click", () => displayProducts(category));
  categoryList.appendChild(li);
});

// Show all products initially
displayProducts();

// Function to display products
function displayProducts(category = null) {
  productGrid.innerHTML = "";

  const filteredProducts = category 
    ? productsData[category] || [] 
    : categories.flatMap(cat => productsData[cat]);

  selectedCategoryTitle.textContent = category ? category : "All Products";

  filteredProducts.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
    `;

    productGrid.appendChild(productCard);
  });
}