import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
    state: () => ({
        currentId: null,
        filters: {
            color: {
                name: "Color",
                isFilterVisible: false,
                options: [
                    {
                        key: "beige",
                        name: "Beiges & Taupes",
                        imageUrl: "../color-images/beige.jpg",
                        isActive: false,
                    },
                    {
                        key: "khaki",
                        name: "Khaki",
                        imageUrl: "../color-images/khaki.jpg",
                        isActive: false,
                    },
                    {
                        key: "pink",
                        name: "Pinks",
                        imageUrl: "../color-images/pink.jpg",
                        isActive: false,
                    },
                    {
                        key: "black",
                        name: "Black",
                        imageUrl: "../color-images/black.jpg",
                        isActive: false,
                    },
                    {
                        key: "metallic",
                        name: "Metallics",
                        imageUrl: "../color-images/metallic.jpg",
                        isActive: false,
                    },
                    {
                        key: "purple",
                        name: "Purples",
                        imageUrl: "../color-images/purple.jpg",
                        isActive: false,
                    },
                    {
                        key: "blue",
                        name: "Blues",
                        imageUrl: "../color-images/blue.jpg",
                        isActive: false,
                    },
                    {
                        key: "multi",
                        name: "Multi",
                        imageUrl: "../color-images/multi.jpg",
                        isActive: false,
                    },
                    {
                        key: "yellow",
                        name: "Yellows",
                        imageUrl: "../color-images/yellow.jpg",
                        isActive: false,
                    },
                    {
                        key: "brown",
                        name: "Browns",
                        imageUrl: "../color-images/brown.jpg",
                        isActive: false,
                    },
                    {
                        key: "mustard",
                        name: "Mustard",
                        imageUrl: "../color-images/mustard.jpg",
                        isActive: false,
                    },
                    {
                        key: "red",
                        name: "Reds",
                        imageUrl: "../color-images/red.jpg",
                        isActive: false,
                    },
                    {
                        key: "green",
                        name: "Greens",
                        imageUrl: "../color-images/green.jpg",
                        isActive: false,
                    },
                    {
                        key: "orange",
                        name: "Oranges",
                        imageUrl: "../color-images/orange.jpg",
                        isActive: false,
                    },
                    {
                        key: "white",
                        name: "White",
                        imageUrl: "../color-images/white.jpg",
                        isActive: false,
                    },
                    {
                        key: "gray",
                        name: "Grays",
                        imageUrl: "../color-images/gray.jpg",
                        isActive: false,
                    },
                ],
            },
            size: {
                name: "Size",
                isFilterVisible: false,
                options: [
                    {
                        key: "xs",
                        name: "XS",
                        isActive: false,
                    },
                    {
                        key: "s",
                        name: "S",
                        isActive: false,
                    },
                    {
                        key: "m",
                        name: "M",
                        isActive: false,
                    },
                    {
                        key: "l",
                        name: "L",
                        isActive: false,
                    },
                    {
                        key: "xl",
                        name: "XL",
                        isActive: false,
                    },
                    {
                        key: "2xl",
                        name: "2XL",
                        isActive: false,
                    },
                    {
                        key: "3xl",
                        name: "3XL",
                        isActive: false,
                    },
                    {
                        key: "one-size",
                        name: "ONE SIZE",
                        isActive: false,
                    },
                ],
            },
            category: {
                name: "Category",
                isFilterVisible: false,
                options: [
                    {
                        key: "coats",
                        name: "Coats & Jackets",
                        isActive: false,
                    },
                    {
                        key: "t-shirts",
                        name: "Sweatshirts & T-shirts",
                        isActive: false,
                    },
                    {
                        key: "shirts",
                        name: "Shirts & Tops",
                        isActive: false,
                    },
                    {
                        key: "dresses",
                        name: "Dresses",
                        isActive: false,
                    },
                    {
                        key: "bottoms",
                        name: "Bottoms",
                        isActive: false,
                    },
                    {
                        key: "outwear",
                        name: "Outerwear",
                        isActive: false,
                    },
                    {
                        key: "jumpsuits",
                        name: "Jumpsuits & Rompers",
                        isActive: false,
                    },
                    {
                        key: "activewear",
                        name: "Activewear",
                        isActive: false,
                    },
                ],
            },
        },
        products: [
            {   id: 1,
                title: "Square Neck Adjustable Shoulder Straps Dress",
                price: 32,
                category: "dresses",
                availableColors: ["khaki", "metallic"],
                availableSizes: ["s", "m", "l"],
                details:
                    "Solid, short sleeve, round neckline, petal split back detail, slight crop, relaxed fit, unlined, stretchy, non-sheer, basic, casual, comfy, breathable, eco, 100% cotton, sportswear, activewear, yoga & gym look, minimalistic design, spring/summer collection100% Cotton. TSH ",
                image: "../products-images/dress-1.jpg",
            },
            {   id: 2,
                title: "Cute Multi Color Polak Dot Sweater ",
                price: 54,
                category: "coats",
                availableColors: ["red"],
                availableSizes: ["s", "m", "l"],
                details:
                    "Solid, short sleeve, round neckline, petal split back detail, slight crop, relaxed fit, unlined, stretchy, non-sheer, basic, casual, comfy, breathable, eco, 100% cotton, sportswear, activewear, yoga & gym look, minimalistic design, spring/summer collection100% Cotton. TSH ",
                image: "../products-images/dress-2.jpg",
            },
            {   id: 3,
                title: "Cute Multi Color Polak Dot Sweater ",
                price: 54,
                category: "coats",
                availableColors: ["orange"],
                availableSizes: ["s", "m", "l"],
                details:
                    "Solid, short sleeve, round neckline, petal split back detail, slight crop, relaxed fit, unlined, stretchy, non-sheer, basic, casual, comfy, breathable, eco, 100% cotton, sportswear, activewear, yoga & gym look, minimalistic design, spring/summer collection100% Cotton. TSH ",

                image: "../products-images/dress-2.jpg",
            },
            {   id: 4,
                title: "Cute Multi Color Polak Dot Sweater ",
                price: 54,
                category: "t-shirts",
                availableColors: ["white"],
                availableSizes: ["s"],
                details:
                    "Solid, short sleeve, round neckline, petal split back detail, slight crop, relaxed fit, unlined, stretchy, non-sheer, basic, casual, comfy, breathable, eco, 100% cotton, sportswear, activewear, yoga & gym look, minimalistic design, spring/summer collection100% Cotton. TSH ",

                image: "../products-images/dress-2.jpg",
            },
            {   id: 5,
                title: "Cute Multi Color Polak Dot Sweater ",
                price: 54,
                category: "shirts",
                availableColors: ["white"],
                availableSizes: ["m"],
                details:
                    "Solid, short sleeve, round neckline, petal split back detail, slight crop, relaxed fit, unlined, stretchy, non-sheer, basic, casual, comfy, breathable, eco, 100% cotton, sportswear, activewear, yoga & gym look, minimalistic design, spring/summer collection100% Cotton. TSH ",

                image: "../products-images/dress-2.jpg",
            },
            {   id: 6,
                title: "Cute Multi Color Polak Dot Sweater ",
                price: 54,
                category: "bottoms",
                availableColors: ["black"],
                availableSizes: ["l"],
                details:
                    "Solid, short sleeve, round neckline, petal split back detail, slight crop, relaxed fit, unlined, stretchy, non-sheer, basic, casual, comfy, breathable, eco, 100% cotton, sportswear, activewear, yoga & gym look, minimalistic design, spring/summer collection100% Cotton. TSH ",

                image: "../products-images/dress-2.jpg",
            },
        ],
        cart: [],
    }),
});
