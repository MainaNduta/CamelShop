<template>
    <h1>Sweet Treats!</h1>
   
    <v-btn
        color="deep-purple-lighten-2"
        text="manageproducts"
        to = "/manageproducts"
    ></v-btn>
    <p>{{ total }}</p>
   
    <div>
        <v-row>
        <v-col cols="12" md="4"  v-for="product in stock" :key=product>
          
     

        <v-card

    class="mx-auto my-12"
    max-width="374"
  >

    <v-img
      height="250"
      :src="product.productImage"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title>{{ product.productName }}</v-card-title>

      
    </v-card-item>

    <v-card-text>


      <div class="my-4 text-subtitle-1">
        {{ product.productPrice }}
      </div>

      <div>{{ product.description }}</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>


    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        text="Add to Cart"
        block
        border
        @click="addToCart(product)"
      ></v-btn>

    </v-card-actions>
  </v-card>
     </v-col>
     </v-row>

    </div>
</template>

<script>
import { computed } from 'vue';
import { mapActions,mapGetters } from 'vuex';
import ManageProducts from './ManageProducts.vue';
export default {
    data(){
        return{
            products: [1,2,3,4,5,6,7,8,9,10],
            stockDetails : [
            {
                productNumber: 1,
                productName : "Sweets",
                productPrice : 5,
                productQuantity : 30,
                productImage: '../public/images/customerbox.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },
            {
                productNumber: 2,
                productName : "Lollipop",
                productPrice : 10,
                productQuantity : 4,
                productImage: '../public/images/jamie albright.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },
            {
                productNumber: 3,
                productName : "Candy",
                productPrice : 15,
                productQuantity : 5,
                productImage: '../public/images/Candies.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },
            {
                productNumber: 4,
                productName : "Chocolates",
                productPrice : 20,
                productQuantity : 6,
                productImage: '../public/images/Chocolate cupcakes.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },
            {
                productNumber: 5,
                productName : "Macaroons",
                productPrice : 25,
                productQuantity : 7,
                productImage: '../public/images/Macaroons.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },
            {
                productNumber: 6,
                productName : "Doughnuts",
                productPrice : 30,
                productQuantity : 8,
                productImage: '../public/images/Doughnuts.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },
            {
                productNumber: 7,
                productName : "Cakes",
                productPrice : 35,
                productQuantity : 9,
                productImage: '../public/images/Queencake.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },
            {
                productNumber: 8,
                productName : "Jellies",
                productPrice : 40,
                productQuantity : 10,
                productImage: '../public/images/Candies.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },
            {
                productNumber: 9,
                productName : "Icy pops",
                productPrice : 45,
                productQuantity : 11,
                productImage: '../public/images/Icy pops.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },
            {
                productNumber: 10,
                productName : "Cupcakes",
                productPrice : 50,
                productQuantity : 12,
                productImage: '../public/images/Waffer cupcakes.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },
      ],
      total: 0,
      cartItems: []
      





            };
                
                
        },
    methods:{
      ...mapActions([
        "addToCart",
        "fetchProducts"
      ])

    },
    computed: {
        ...mapGetters({
          stock: "stock"

        })
      },
      created(){
        this.fetchProducts()
      }

}
</script>