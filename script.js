/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("open");

    });

}


/* =========================
   SEARCH
========================= */

const searchOpen = document.getElementById("searchOpen");
const searchClose = document.getElementById("searchClose");
const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");


if (searchOpen && searchOverlay) {

    searchOpen.addEventListener("click", () => {

        searchOverlay.classList.add("open");

        if (searchInput) {
            searchInput.focus();
        }

    });

}


if (searchClose && searchOverlay) {

    searchClose.addEventListener("click", () => {

        searchOverlay.classList.remove("open");

    });

}


const posts = [

    {
        title: "The Elegant Beige Coat Outfit",
        category: "Outfits",
        url: "post.html?id=beige-coat"
    },

    {
        title: "The Black Shoulder Bag",
        category: "Handbags",
        url: "post.html?id=black-bag"
    },

    {
        title: "How to Style Black Combat Boots",
        category: "Boots",
        url: "post.html?id=combat-boots"
    },

    {
        title: "The Classic White Sneaker",
        category: "Shoes",
        url: "post.html?id=white-sneakers"
    }

];


if (searchInput) {

    searchInput.addEventListener("input", () => {

        const value =
            searchInput.value
            .toLowerCase()
            .trim();


        if (!value) {

            searchResults.innerHTML = "";

            return;

        }


        const matches = posts.filter(post =>

            post.title
                .toLowerCase()
                .includes(value)

            ||

            post.category
                .toLowerCase()
                .includes(value)

        );


        if (matches.length === 0) {

            searchResults.innerHTML =
                "<p>No fashion stories found.</p>";

            return;

        }


        searchResults.innerHTML =
            matches.map(post => `

                <a
                    href="${post.url}"
                    style="
                        display:block;
                        padding:18px 0;
                        border-bottom:1px solid #ddd;
                    "
                >

                    <small>
                        ${post.category}
                    </small>

                    <h3>
                        ${post.title}
                    </h3>

                </a>

            `).join("");

    });

}


/* =========================
   BLOG FILTERS
========================= */

const filters =
    document.querySelectorAll(".filter");

const blogPosts =
    document.querySelectorAll(".blog-post");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(item =>
            item.classList.remove("active")
        );

        filter.classList.add("active");


        const category =
            filter.dataset.category;


        blogPosts.forEach(post => {

            if (
                category === "all"
                ||
                post.dataset.category === category
            ) {

                post.classList.remove("hidden");

            } else {

                post.classList.add("hidden");

            }

        });

    });

});


/* =========================
   CATEGORY FROM URL
========================= */

const params =
    new URLSearchParams(window.location.search);

const selectedCategory =
    params.get("category");


if (selectedCategory) {

    const selectedFilter =
        document.querySelector(
            `.filter[data-category="${selectedCategory}"]`
        );


    if (selectedFilter) {

        selectedFilter.click();

    }

}


/* =========================
   NEWSLETTER
========================= */

const newsletterForm =
    document.getElementById("newsletterForm");

const formMessage =
    document.getElementById("formMessage");


if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "emailInput"
                ).value;


            if (!email) return;


            formMessage.textContent =
                "Thanks! You’re on the Pantora list ✨";


            newsletterForm.reset();

        }
    );

}


/* =========================
   ARTICLE DATA
========================= */

const articleData = {

    "beige-coat": {

        category: "OUTFITS",

        title:
            "The Elegant Beige Coat Outfit You'll Want This Season",

        description:
            "A timeless neutral look with a modern, effortless finish.",

        text:
            "A beige coat is one of those wardrobe pieces that can instantly make an everyday outfit feel more polished. Pair it with a simple cream top, wide-leg trousers and neutral accessories for an effortless Pantora-inspired look.",

        image: "beige-coat",

        product:
            "https://www.amazon.com/"

    },


    "black-bag": {

        category: "HANDBAGS",

        title:
            "The Black Shoulder Bag That Goes With Everything",

        description:
            "One timeless accessory for everyday outfits.",

        text:
            "A simple black shoulder bag can work across casual outfits, office looks and evening styling. Look for clean lines, subtle hardware and enough space for your daily essentials.",

        image: "black-bag",

        product:
            "https://www.amazon.com/"

    },


    "combat-boots": {

        category: "BOOTS",

        title:
            "How to Style Black Combat Boots",

        description:
            "Easy ways to create modern everyday outfits.",

        text:
            "Black combat boots add structure to an outfit and work especially well with wide-leg jeans, straight trousers, skirts and oversized outerwear.",

        image: "combat-boots",

        product:
            "https://www.amazon.com/"

    },


    "white-sneakers": {

        category: "SHOES",

        title:
            "The Classic White Sneaker",

        description:
            "A clean everyday sneaker that never goes out of style.",

        text:
            "White sneakers are an easy foundation for everyday outfits. Style them with wide-leg trousers, jeans, dresses or casual sets for a clean and comfortable finish.",

        image: "white-sneakers",

        product:
            "https://www.amazon.com/"

    }

};


/* =========================
   LOAD ARTICLE
========================= */

const articleTitle =
    document.getElementById("articleTitle");


if (articleTitle) {

    const id =
        new URLSearchParams(
            window.location.search
        ).get("id");


    const article =
        articleData[id];


    if (article) {

        document.title =
            `${article.title} | Pantora`;


        document.getElementById(
            "articleCategory"
        ).textContent =
            article.category;


        document.getElementById(
            "articleTitle"
        ).textContent =
            article.title;


        document.getElementById(
            "articleDescription"
        ).textContent =
            article.description;


        document.getElementById(
            "articleText"
        ).textContent =
            article.text;


        const image =
            document.getElementById(
                "articleImage"
            );


        image.className =
            `article-image ${article.image}`;


        document.getElementById(
            "shopButton"
        ).href =
            article.product;

    }

}