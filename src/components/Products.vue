<template>
    <h1>CONFECTIONERY</h1>
    <v-btn
          color="deep-purple-lighten-2"
          text="Manage Products"
          to = "/ManageProducts"
          ></v-btn>
    <p>{{ total }}</p>   
<v-card
      class = "mx-auto"
      width = "800"
      >
      <v-card-text class = "bg-surface-light pt-4">
        <v-card-title>cart
              {{ total }}
          <v-btn
          color="deep-purple-lighten-2"
          text="Checkout"
          ></v-btn>
        </v-card-title>
        <v-row>
        <v-col cols="12" md="3"  v-for="product in cartItems" :key=product>
          
  <v-card
    class="mx-auto my-12"
    max-width="374"
  >

    <v-img
      height="250"
      :src="product.itemImage"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title>{{product.productName }}</v-card-title>

    </v-card-item>

    <v-card-text
        align="center"
        class="mx-0"
      >


        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          size="small"
          half-increments
          readonly
        ></v-rating>

      <div class="my-4 text-subtitle-1">
        {{ product.itemPrice }}
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        text="Remove"
        block
        border
        @click="removeFromCart(product)"
      ></v-btn>
    </v-card-actions>
  </v-card>
        </v-col>
        </v-row>

      </v-card-text>
    </v-card>
  
    <div>
        <v-row>
        <v-col cols="12" md="3"  v-for="product in stock" :key=product>
          
  <v-card
    class="mx-auto my-12"
    max-width="374"
  >

    <v-img
      height="250"
      :src="product.itemImage"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title>{{product.productName }}</v-card-title>

    </v-card-item>

    <v-card-text>
        align="center"
        class="mx-0"
    >


        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          size="small"
          half-increments
          readonly
        ></v-rating>

      <div class="my-4 text-subtitle-1">
        {{ product.itemPrice }}
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        text="Add to cart"
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
import { mapActions,mapGetters } from 'vuex';

export default{
    data(){
        return{
           products:[1,2,3,4,5,6,7,8,9,10],
           stockDetails : [
            {
                productNumber: 1,
                productName : "Sweets",
                productPrice : 5,
                itemQuantity : 30,
                itemImage: '../Images/customerbox-aXq1oCCjlVM-unsplash.jpg',
                productdescription: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },
            {
                productNumber: 27466,
                productName : "Lollipop",
                productPrice : 10,
                itemQuantity : 4,
                itemImage: '../Images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg',
                productdescription: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            },
            {
              productNumber: 2745,
                productName : "Candy corn",
                productPrice : 30,
                itemQuantity : 200,
                itemImage: '../Images/candy corn.jpeg',
                productdescription: "Our candy corn is sold in quantiites of 200 grammes perfect for snacking on"

            },
            {
              productNumber: 2732,
                productName: "Gummy bears",
                productPrice : 170,
                itemQuantity : 50,
                itemImage: '../Images/Bears_LU_fCezP9-o-unsplash.jpg',
                productdescription: "Our fun, playful and cute gummy bears sold per 50 grammes come in a variety of mouth-watering flavors like strawberry, orange, lemon, apple, and more."

            },
            {
              productNumber: 266,
                productName : "Dots",
                productPrice : 30,
                itemQuantity : 100,
                itemImage: '../Images/dots dots.jpeg',
                productdescription: "DOTS are known for their satisfyingly chewy texture that makes each bite an enjoyable experience. They offer a delightful resistance that makes you savor every piece.Bold Flavors: Each DOTS candy bursts with vibrant flavors like cherry, lemon, lime, orange, and strawberry. These classic fruit flavors provide a delicious and refreshing taste that’s sure to please your palate"

            },
            {
              productNumber: 27394,
                productName : "Banana Fun",
                productPrice : 5,
                itemQuantity : 20,
                itemImage: '../Images/download (1).jpeg',
                productdescription: "These yellow, banana blast treats are sold at a great price of 5 shillings per 20 grammes"

            },
            {
              productNumber: 86,
                productName : "Sour Gummy worms",
                productPrice : 5,
                itemQuantity : 1,
                itemImage: '../Images/gummy worms-XVYz_QeiEBw-unsplash.jpg',
                productdescription: "Gummy worms have a fun, wiggly shape that sets them apart from other candies. Their playful design makes them a hit with kids and adults alike, adding a bit of whimsy to your snack time."

            },
            {
              productNumber: 2796,
                productName : "Sweet gummy worms",
                productPrice : 3,
                itemQuantity : 1,
                itemImage: '../Images/images (1).jpeg',
                productdescription: "These candies come in a variety of exciting, dual flavors like cherry-lemon, strawberry-orange, and blue raspberry-lime. Each worm offers a delightful combination of sweet and tangy that tantalizes your taste buds"

            },
            {
              productNumber: 27466,
                productName : "Jolly Ranchers",
                productPrice : 5,
                itemQuantity : 1,
                itemImage: '../Images/jolly ranchers.jpeg',
                productdescription: "Jolly Ranchers are known for their bold and intense fruit flavors. With options like watermelon, green apple, cherry, grape, and blue raspberry, each candy delivers a powerful punch of taste that lasts."

            },
            {
              productNumber: 2706,
                productName : "Macarons",
                productPrice : 50,
                itemQuantity : 1,
                itemImage: '../Images/mockaroon-yCOzRIbL08E-unsplash.jpg',
                productdescription: "Available in a wide range of flavors, macarons cater to every taste. From classic options like vanilla, chocolate, and raspberry to exotic choices like lavender, pistachio, and rose, there’s a macaron for everyone."

            },
            {
              productNumber: 456,
                productName : "Skittles",
                productPrice : 150,
                itemQuantity : 1,
                itemImage: '../Images/skittles-3oDQKoKPMng-unsplash.jpg',
                productdescription: "Sold at 150 shillings per packet, these flavourful sour and sweet treats are guaranteed to give you a tasty and satisfactory experience."

            },
            {
              productNumber: 768,
                productName : "Sweet mix",
                productPrice : 200,
                itemQuantity : 100,
                itemImage: '../Images/sweet mix_xLvIcAYuuMQ-unsplash.jpg',
                productdescription: "This delightful random combination of sweets is perfect for one who wants a taste of everything. It is sold at a rate of 200 shillings per 100 grammes"
            }

            

            ,
                
                
        ],
        total: 0 , 
        cartItems : [],

        }
    },
    methods:{
      calculateTotal(itemPrice){
        this.total +=itemPrice
      },
      addToCart(product){
        this.cartItems.push(product)
        this.calculateTotal(product.itemPrice)
      },
      removeFromCart(product){
        this.cartItems.pop(product)
        this.total -=product.itemPrice
      }
    },
    computed : {
      ...mapGetters({
        stock: 'stock'
      })
    },
        created() {
            this.fetchProducts() // retrieve the products when the component is called
        }
    }

</script>
