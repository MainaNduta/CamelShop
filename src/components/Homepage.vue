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
 <h1>My Candy Shop</h1>
    <div class="center">
        <img v-bind:src="image" width="500" height="300">
    </div>
    <div class="center">
        <a :href="url">Vue JS Practice</a>
        <h2>Mint,Salted caramel and Almond and nuts</h2>
        <h3>Sweet treats</h3>
    </div>
    <div class="center">
        <ul>
            <li v-for="(item, index) in stockDetails">
                <div>
                    <img v-bind:src="item.itemImage" width="200" height="150"
                </div>
                <div>
                    <span>{{ item.itemName }}</span> &nbsp; &nbsp;
                    <span> <button style="background-color: blueviolet; color: antiquewhite; border: blueviolet;">+</button></span>
                </div>
                <br/>
            </li>
        </ul> 
    </div>
</template>


