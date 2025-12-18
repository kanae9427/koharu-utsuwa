document.addEventListener("DOMContentLoaded", function () {
/* ここから記述します。 */
    // headerのハンバーガーメニュー
    const line = document.querySelector('.hamburger-line');
    const nav = document.querySelector('.hamburger-navigation');
    const mask = document.querySelector('.mask');

    line.addEventListener('click', function () {
        nav.classList.toggle('active');
        line.classList.toggle('active');
        mask.classList.toggle('active');
    })

    mask.addEventListener('click', function () {
        nav.classList.remove('active');
        line.classList.remove('active');
        mask.classList.remove('active');
    });

// 商品データの定義
    const products =[
        {
            id:1,
            name: "益子焼オリジナルセット",
            price:"¥9,800",
            image:"js/image/item1.jpg",
            link:"koharu-utsuwa/item1.html",
            isPopular: true
        },
        {
            id:2,
            name: "湯呑み茶碗",
            price:"¥4,400",
            image:"js/image/item2.jpg",
            link:"koharu-utsuwa/item2.html",
            isPopular: false
        },
        {
            id:3,
            name: "抹茶茶碗",
            price:"¥3,200",
            image:"js/image/item3.jpg",
            link:"koharu-utsuwa/item3.html",
            isPopular: false
        },
        {
            id:4,
            name: "レトロのボウル",
            price:"¥2,500",
            image:"js/image/item4.jpg",
            link:"koharu-utsuwa/item4.html",
            isPopular: false
        },
        {
            id:5,
            name: "益子焼マグカップ",
            price:"¥3,500",
            image:"js/image/item5.jpg",
            link:"koharu-utsuwa/item5.html",
            isPopular: true
        },
        {
            id:6,
            name: "オリジナルカップ",
            price:"¥5,200",
            image:"js/image/item6.jpg",
            link:"koharu-utsuwa/item6.html",
            isPopular: true
        },
        {
            id:7,
            name: "ビンテージカップ",
            price:"¥3,500",
            image:"js/image/item7.jpg",
            link:"koharu-utsuwa/item7.html",
            isPopular: false
        },
        {
            id:8,
            name: "小春ボウル",
            price:"¥4,800",
            image:"js/image/item8.jpg",
            link:"koharu-utsuwa/item8.html",
            isPopular: false
        },
        {
            id:9,
            name: "白いボウル",
            price:"¥2,500",
            image:"js/image/item9.jpg",
            link:"koharu-utsuwa/item9.html",
            isPopular: false
        },
        {
            id:10,
            name: "ストライプコップ",
            price:"¥3,000",
            image:"js/image/item10.jpg",
            link:"koharu-utsuwa/item10.html",
            isPopular: false
        },
        {
            id:11,
            name: "青色のマグカップ",
            price:"¥1,800",
            image:"js/image/item11.jpg",
            link:"koharu-utsuwa/item11.html",
            isPopular: false
        },
        {
            id:12,
            name: "ティーカップ",
            price:"¥2,200",
            image:"js/image/item12.jpg",
            link:"koharu-utsuwa/item12.html",
            isPopular: false
        },
        {
            id:13,
            name: "和食器",
            price:"¥3,500",
            image:"js/image/item13.jpg",
            link:"koharu-utsuwa/item13.html",
            isPopular: false
        },
        {
            id:14,
            name: "2個セット茶碗",
            price:"¥4,200",
            image:"js/image/item14.jpg",
            link:"koharu-utsuwa/item14.html",
            isPopular: false
        },
        {
            id:15,
            name: "うすみどりのボウル",
            price:"¥1,900",
            image:"js/image/item15.jpg",
            link:"koharu-utsuwa/item15.html",
            isPopular: false
        },
        {
            id:16,
            name: "和柄の湯飲み",
            price:"¥2,100",
            image:"js/image/item16.jpg",
            link:"koharu-utsuwa/item16.html",
            isPopular: false
        },
    ]

// 商品カードを作成する共通関数
    function createProductCard(product) {
        const card = document.createElement("a");
        card.className = "item-card";
        card.href = product.link;

        // 画像要素を作成
        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;
        image.className = "item-card__image";

        // ギャップ要素を作成
        const gap = document.createElement("div");
        gap.className = "item-card__gap";

        // 情報コンテナを作成
        const info = document.createElement("div");
        info.className = "item-card__info";

        // 商品名を作成
        const name = document.createElement("p");
        name.className = "item-card__name";
        name.textContent = product.name;

        // 価格を作成
        const price = document.createElement("p");
        price.className = "item-card__price";
        price.textContent = product.price;

        // 要素を組み立て
        info.append(name, price);
        card.append(image, gap, info);

        return card;
    }

    // 商品リストを表示する汎用関数
    function renderProductList(containerId, productList) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = ""; // 一旦中身をクリア

        productList.forEach((product) => {
        const card = createProductCard(product);
        container.appendChild(card);
        });
    }

    // 商品一覧表示
    if (location.pathname.includes("products.html")) {
        renderProductList("products__list", products);
    } else {
        renderProductList("products__list", products.slice(0, 7));
    }

    // 人気商品表示
    function renderPopularProducts() {
        const popularOrder = [1, 6, 5];
        const popularProducts = popularOrder
        .map((id) =>
            products.find((product) => product.isPopular && product.id === id)
        )
        .filter(Boolean);

        renderProductList("popular__list", popularProducts);
    }
    renderPopularProducts();
});