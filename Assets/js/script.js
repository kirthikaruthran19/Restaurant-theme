const data = [
    [
        {
            img: "./Assets/Images/dessert.png",
            category: "DESSERT",
            title: "Chocolate Mousse",
            link:"basil.html"
        },
        {
            img: "./Assets/Images/platter.png",
            category: "PLATTER",
            title: "Sea Food Platter",
            link:"basil.html"
        }
    ],
    [
        {
            img: "./Assets/Images/bites.png",
            category: "BITES",
            title: "Stuffed Mini Peppers",
            link:"basil.html"
        },
        {
            img: "./Assets/Images/side dish.png",
            category: "SIDE DISH",
            title: "Garlic mashed Potatoes",
            link:"basil.html"
        }
    ],
    [
        {
            img: "./Assets/Images/starter.png",
            category: "STARTER",
            title: "Caprese Salad Skewers",
            link:"basil.html"
        },
        {
            img: "./Assets/Images/mani course.png",
            category: "MAIN COURSE",
            title: "Grilled Lemon Herb Chicken",
            link:"basil.html"
        }
    ]
];

let index = 0;
const container = document.getElementById("cardContainer");
function showCards() {
    container.innerHTML = "";

    data[index].forEach(item => {
        container.innerHTML += `
   <a href="${item.link}" class="block fade">
        <div class="fade overflow-hidden rounded-xl">
      <img src="${item.img}" 
           class=" w-full h-[220px] sm:h-[280px] md:h-[380px] lg:h-[480px] xl:h-[520px]
                    object-cover transition duration-500 ">
      <h1 class=" text-red-500 mt-4 text-sm sm:text-base md:text-lg lg:text-2xl font-semibold">${item.category}</h1>
      <p class="text-lg sm:text-xl md:text-2xl font-semibold">${item.title}</p>
    </div>
    </a>
  `;
    });

    index = (index + 1) % data.length;
}

setInterval(showCards, 3000);