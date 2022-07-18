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
            _id: "1",
            title: "Over size T-shirt",
            content: "100% cutton printed high quality",
            keywords: " over size tshirt teshirt shirts printed basic asta",
            category: "shirts",
            brand: "adidas",
            rating: 4.5,
            numberOfRating: 2,
            price: 120,
            image: "/images/asta.png",
            inStoke: 10,
            colors: ["black", "white","red"],
            sizes: ["S","M","L","XL"],
            sideImages: ["/images/asta.png","/images/asta.png"]
        }, {
            _id: "2",
            title: "nike shirts",
            keywords: " tshirt teshirt ",
            category: "pants",
            content: "comfortabl shirt",
            brand: "nike",
            rating: 1.5,
            numberOfRating: 5,
            price: 100,
            image: "/images/compass.png",
            inStoke: 2,
            colors: ["black", "white","red"],
            sizes: ["S","M","L","XL"],
            sideImages: ["/images/compass.png","/images/compass.png"]
        }, {
            _id: "3",
            title: " t-shirt basic",
            keywords: " tshirt teshirt ",
            category: "shirts",
            content: "basic shirt",
            brand: "boma",
            rating: 5,
            numberOfRating: 8,
            price: 220,
            image: "/images/hunter.png",
            inStoke: 19,
            colors: ["black", "white","red"],
            sizes: ["S","M","L","XL"],
            sideImages: ["/images/hunter.png","/images/hunter.png"]
        }, {
            _id: "4",
            title: "Over size T-shirt",
            keywords: " tshirt teshirt ",
            category: "shirts",
            content: "great shirt",
            brand: "kalson",
            rating: 3,
            numberOfRating: 13,
            price: 210,
            image: "/images/hunter1.png",
            inStoke: 20,
            colors: ["black", "white","red"],
            sizes: ["S","M","L","XL"],
            sideImages: ["/images/hunter1.png","/images/hunter1.png"]
        }, {
            _id: "5",
            title: "Over size T-shirt",
            keywords: " tshirt teshirt ",
            category: "shirts",
            content: "great shirt",
            brand: "nothing",
            rating: 4,
            numberOfRating: 15,
            price: 150,
            image: "/images/killewa2.png",
            inStoke: 15,
            colors: ["black", "white","red"],
            sizes: ["S","M","L","XL"],
            sideImages: ["/images/killewa2.png","/images/killewa2.png"]
        }, {
            _id: "6",
            title: "Over size T-shirt",
            keywords: " tshirt teshirt ",
            category: "shirts",
            content: "great shirt",
            brand: "nothing",
            rating: 4,
            numberOfRating: 15,
            price: 150,
            image: "/images/moon.png",
            inStoke: 0,
            colors: ["black", "white","red"],
            sizes: ["S","M","L","XL"],
            sideImages: ["/images/moon.png","/images/asta.png"]
        }, {
            _id: "7",
            title: "Over size T-shirt",
            keywords: " tshirt teshirt ",
            category: "pants",
            content: "great shirt",
            brand: "nothing",
            rating: 4,
            numberOfRating: 15,
            price: 150,
            image: "/images/stayontouch.png",
            inStoke: 16,
            colors: ["black", "white","red"],
            sizes: ["S","M","L","XL"],
            sideImages: ["/images/stayontouch.png","/images/stayontouch.png"]
        }, {
            _id: "8",
            title: "Over size T-shirt",
            keywords: " tshirt teshirt ",
            category: "shirts",
            content: "great shirt",
            brand: "nothing",
            rating: 4,
            numberOfRating: 15,
            price: 150,
            image: "/images/wave.png",
            inStoke: 5,
            colors: ["black", "white","red"],
            sizes: ["S","M","L","XL"],
            sideImages: ["/images/wave.png","/images/moon.png"]
        }, {
            _id: "9",
            title: "Over size T-shirt",
            keywords: " tshirt teshirt ",
            category: "shirts",
            content: "great shirt",
            brand: "nike",
            rating: 1.5,
            numberOfRating: 5,
            price: 100,
            image: "/images/mainpic.jpg",
            inStoke: 2,
            colors: ["black", "white","red"],
            sizes: ["S","M","L","XL"],
            sideImages: ["/images/mainpic.jpg","/images/asta.png"]
        }

    ]

}
export default data;