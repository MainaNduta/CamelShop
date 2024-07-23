<script >
export default{
   data() {
      return {
        message: "Hello World!",
        product: 'Sweets',
        image: '../images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash.jpg',
        url: 'https://www.vuejs.org/',
        //simple array demo
        stock: ["Sweets", "Lollipop", "Chocolates", "Chewing Gum"],
        //Object demo
        stockDetails : [
            {
                itemNumber: 1,
                itemName : "Sweets",
                itemPrice : 5,
                itemQuantity : 30,
                itemImage: '../images/customerbox-aXq1oCCjlVM-unsplash.jpg'
            },
            {
                itemNumber: 27466,
                itemName : "Lollipop",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/Sjamie-albright-AHF_ZktTL6Q-unsplash.jpg'
            }
        ],
        totalStock: 100
      }
    }
}
</script>

<template>
<v-card
    class="mx-auto"
    width="1000"
  >
    <v-carousel>
  <v-carousel-item
    src="../public/images/customerbox.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../public/images/jamie albright.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../public/images/vinicius-amnx.jpg"
    cover
  ></v-carousel-item>
</v-carousel>
  </v-card>
  <v-card align="center">
        <v-card-item>
          <v-card-title>Welcome to CandyShop</v-card-title>

          <v-card-subtitle>Your little confectionery heaven</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Discover a wide range of handcrafted candies,luscious chocolates and whimsical treats.
          That will transport you back to childhood.
          Candyshop is a place to satisfy your cravings . 
          Experience the magic of sugar-coated dreams today .
        </v-card-text>
      </v-card>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <h3 class="text-center">What our customers say</h3>
      <v-divider></v-divider>

      <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="Marion Nduta"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
        title="EXCELLENT CUSTOMER SERVICES"
      ></v-card>

      <div class="text-center text-caption">Using Props Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          FAIR DELIVERY SERVICES
        </template>

        <template v-slot:subtitle>
          Anonymous
        </template>

        <template v-slot:text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </template>
      </v-card>

      <div class="text-center text-caption">Using Slots Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>IMPROVE ON DELIVERY AND PACKAGING</v-card-title>

          <v-card-subtitle>Alexander O-neal</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </v-card-text>
      </v-card>

      <div class="text-center text-caption">Using Markup Only</div>
    </v-col>
  </v-row>
</template>


