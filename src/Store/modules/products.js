import axios from "axios"
const state = {
    stockDetails : [
        {
            itemNumber: 1,
            itemName : "Sweets",
            itemPrice : 5,
            itemQuantity : 30,
            itemImage: '../images/customerbox-aXq1oCCjlVM-unsplash.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },
        {
            itemNumber: 2,
            itemName : "Lollipop",
            itemPrice : 10,
            itemQuantity : 4,
            itemImage: '../images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },
        {
            itemNumber: 3,
            itemName : "Candy",
            itemPrice : 15,
            itemQuantity : 5,
            itemImage: '../public/images/Candies.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },
        {
            itemNumber: 4,
            itemName : "Chocolates",
            itemPrice : 20,
            itemQuantity : 6,
            itemImage: '../public/images/Chocolate cupcakes.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },
        {
            itemNumber: 5,
            itemName : "Macaroons",
            itemPrice : 25,
            itemQuantity : 7,
            itemImage: '../public/images/Macaroons.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },
        {
            itemNumber: 6,
            itemName : "Doughnuts",
            itemPrice : 30,
            itemQuantity : 8,
            itemImage: '../public/images/Doughnuts.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },
        {
            itemNumber: 7,
            itemName : "Cakes",
            itemPrice : 35,
            itemQuantity : 9,
            itemImage: '../public/images/Queencake.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },
        {
            itemNumber: 8,
            itemName : "Jellies",
            itemPrice : 40,
            itemQuantity : 10,
            itemImage: '../public/images/Candies.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },
        {
            itemNumber: 9,
            itemName : "Icy pops",
            itemPrice : 45,
            itemQuantity : 11,
            itemImage: '../public/images/Icy pops.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },
        {
            itemNumber: 10,
            itemName : "Cupcakes",
            itemPrice : 50,
            itemQuantity : 12,
            itemImage: '../public/images/Waffer cupcakes.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },
  ],
  allProducts: []

}
const getters = {
    stock: (state) => state.allProducts,

}
const actions = {
    async fetchProducts({ commit}) {
        try {
            const data = await axios.get(
                "https://candy-shop-backend-5waj.onrender.com/api/products"
            );
            commit("SET_PRODUCTS", data.data);
        } catch (error) {
            alert(error);

            console.log(error);
        }
    },

}
const mutations = {
    SET_PRODUCTS (state, allProducts) {
        state.allProducts = allProducts
    }

}
export default {
    state,
    getters,
    actions,
    mutations,
}