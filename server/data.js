import bcrypt from "bcryptjs"

const data = {
    users: [
        {
            name: "bedo",
            email: "admin@gmail.com",
            password: bcrypt.hashSync("qwerty", 8),
            isAdmin: true
        }, {
            name: "omar",
            email: "user@gmail.com",
            password: bcrypt.hashSync("12345", 8),
            isAdmin: false
        }
    ],
    products: [
        {
            title: "Over size T-shirt",
            name: "Over size T-shirt",
            content: "100% cutton printed high quality",
            keywords: " over size tshirt teshirt shirts printed basic asta",
            category: "shirts",
            brand: "adidas",
            rating: 4.5,
            numberOfRating: 2,
            price: 120,
            image: "/images/asta.png",
            inStoke: [
                {color:"black", sizes:[{size:"S",qty:0},{size:"M",qty:0},{size:"L",qty:0},{size:"XL",qty:0}]},
                {color:"white", sizes:[{size:"S",qty:0},{size:"M",qty:0},{size:"L",qty:0},{size:"XL",qty:0}]},
                {color:"red", sizes:[{size:"S",qty:0},{size:"M",qty:0},{size:"L",qty:0},{size:"XL",qty:1}]}],
            colors: ["black", "white","red"],
            sizes: ["S","M","L","XL"],
            sideImages: ["/images/asta.png","/images/asta.png"]
        }, {
            title: "nike shirts",
            name: "Over size T-shirt",
            keywords: " tshirt teshirt ",
            category: "pants",
            content: "comfortabl shirt",
            brand: "nike",
            rating: 1.5,
            numberOfRating: 5,
            price: 100,
            image: "/images/compass.png",
            inStoke: [
                {color:"black", sizes:[{size:"S",qty:0},{size:"M",qty:0},{size:"L",qty:0},{size:"XL",qty:0}]},
                {color:"white", sizes:[{size:"S",qty:0},{size:"M",qty:0},{size:"L",qty:0},{size:"XL",qty:0}]},
                {color:"red", sizes:[{size:"S",qty:0},{size:"M",qty:0},{size:"L",qty:0},{size:"XL",qty:0}]}],
            colors: ["black", "white","red"],
            sizes: ["S","M","L","XL"],
            sideImages: ["/images/compass.png","/images/compass.png"]
        }, {
            title: " t-shirt basic",
            name: "Over size T-shirt",
            keywords: " tshirt teshirt ",
            category: "shirts",
            content: "basic shirt",
            brand: "boma",
            rating: 5,
            numberOfRating: 8,
            price: 220,
            image: "/images/hunter.png",
            inStoke: [
                {color:"black", sizes:[{size:"S",qty:2},{size:"M",qty:4},{size:"L",qty:9},{size:"XL",qty:1}]},
                {color:"white", sizes:[{size:"S",qty:2},{size:"M",qty:4},{size:"L",qty:9},{size:"XL",qty:1}]},
                {color:"red", sizes:[{size:"S",qty:2},{size:"M",qty:4},{size:"L",qty:9},{size:"XL",qty:1}]}],
            colors: ["black", "white","red"],
            sizes: ["S","M","L","XL"],
            sideImages: ["/images/hunter.png","/images/hunter.png"]
        }, {
            title: "Over size T-shirt1",
            name: "Over size T-shirt",
            keywords: " tshirt teshirt ",
            category: "shirts",
            content: "great shirt",
            brand: "kalson",
            rating: 3,
            numberOfRating: 13,
            price: 210,
            image: "/images/hunter1.png",
            inStoke: [
                {color:"black", sizes:[{size:"S",qty:2},{size:"M",qty:0},{size:"L",qty:9},{size:"XL",qty:1}]},
                {color:"white", sizes:[{size:"S",qty:2},{size:"M",qty:4},{size:"L",qty:9},{size:"XL",qty:0}]},
                {color:"red", sizes:[{size:"S",qty:2},{size:"M",qty:4},{size:"L",qty:0},{size:"XL",qty:1}]}],
            colors: ["black", "white","red"],
            sizes: ["S","M","L","XL"],
            sideImages: ["/images/hunter1.png","/images/hunter1.png"]
        }, {
            title: "Over size T-shirt2",
            name: "Over size T-shirt",
            keywords: " tshirt teshirt ",
            category: "shirts",
            content: "great shirt",
            brand: "nothing",
            rating: 4,
            numberOfRating: 15,
            price: 150,
            image: "/images/killewa2.png",
            inStoke: [
                {color:"black", sizes:[{size:"S",qty:0},{size:"M",qty:4},{size:"L",qty:9},{size:"XL",qty:1}]},
                {color:"white", sizes:[{size:"S",qty:2},{size:"M",qty:4},{size:"L",qty:9},{size:"XL",qty:0}]},
                {color:"red", sizes:[{size:"S",qty:2},{size:"M",qty:4},{size:"L",qty:9},{size:"XL",qty:1}]}],
            colors: ["black", "white","red"],
            sizes: ["S","M","L","XL"],
            sideImages: ["/images/killewa2.png","/images/killewa2.png"]
        }, {
            title: "Over size T-shirt6",
            name: "Over size T-shirt",
            keywords: " tshirt teshirt ",
            category: "shirts",
            content: "great shirt",
            brand: "nothing",
            rating: 4,
            numberOfRating: 15,
            price: 150,
            image: "/images/moon.png",
            inStoke: [
                {color:"black", sizes:[{size:"S",qty:2},{size:"M",qty:4},{size:"L",qty:9},{size:"XL",qty:1}]},
                {color:"white", sizes:[{size:"S",qty:2},{size:"M",qty:4},{size:"L",qty:9},{size:"XL",qty:1}]},
                {color:"red", sizes:[{size:"S",qty:0},{size:"M",qty:0},{size:"L",qty:0},{size:"XL",qty:0}]}],
            colors: ["black", "white","red"],
            sizes: ["S","M","L","XL"],
            sideImages: ["/images/moon.png","/images/asta.png"]
        }, {
            title: "Over size T-shirt3",
            name: "Over size T-shirt",
            keywords: " tshirt teshirt ",
            category: "pants",
            content: "great shirt",
            brand: "nothing",
            rating: 4,
            numberOfRating: 15,
            price: 150,
            image: "/images/stayontouch.png",
            inStoke: [
                {color:"black", sizes:[{size:"S",qty:2},{size:"M",qty:4},{size:"L",qty:9},{size:"XL",qty:1}]},
                {color:"white", sizes:[{size:"S",qty:2},{size:"M",qty:4},{size:"L",qty:9},{size:"XL",qty:1}]},
                {color:"red", sizes:[{size:"S",qty:2},{size:"M",qty:4},{size:"L",qty:9},{size:"XL",qty:1}]}],
            colors: ["black", "white","red"],
            sizes: ["S","M","L","XL"],
            sideImages: ["/images/stayontouch.png","/images/stayontouch.png"]
        }, {
            title: "Over size T-shirt4",
            name: "Over size T-shirt",
            keywords: " tshirt teshirt ",
            category: "shirts",
            content: "great shirt",
            brand: "nothing",
            rating: 4,
            numberOfRating: 15,
            price: 150,
            image: "/images/wave.png",
            inStoke: [
                {color:"black", sizes:[{size:"S",qty:2},{size:"M",qty:4},{size:"L",qty:9},{size:"XL",qty:1}]},
                {color:"white", sizes:[{size:"S",qty:2},{size:"M",qty:4},{size:"L",qty:9},{size:"XL",qty:1}]},
                {color:"red", sizes:[{size:"S",qty:2},{size:"M",qty:4},{size:"L",qty:9},{size:"XL",qty:1}]}],
            colors: ["black", "white","red"],
            sizes: ["S","M","L","XL"],
            sideImages: ["/images/wave.png","/images/moon.png"]
        }, {
            title: "Over size T-shirt5",
            name: "Over size T-shirt",
            keywords: " tshirt teshirt ",
            category: "shirts",
            content: "great shirt",
            brand: "nike",
            rating: 1.5,
            numberOfRating: 5,
            price: 100,
            image: "/images/mainpic.jpg",
            inStoke: [
                {color:"black", sizes:[{size:"S",qty:2},{size:"M",qty:4},{size:"L",qty:9},{size:"XL",qty:1}]},
                {color:"white", sizes:[{size:"S",qty:2},{size:"M",qty:4},{size:"L",qty:9},{size:"XL",qty:1}]},
                {color:"red", sizes:[{size:"S",qty:2},{size:"M",qty:4},{size:"L",qty:9},{size:"XL",qty:1}]}],
            colors: ["black", "white","red"],
            sizes: ["S","M","L","XL"],
            sideImages: ["/images/mainpic.jpg","/images/asta.png"]
        }

    ]

}
export default data;