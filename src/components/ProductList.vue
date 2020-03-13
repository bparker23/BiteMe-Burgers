<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
      </div>
      <div class="image">
        <img :src="'/images/products/'+product.image">
      </div>
      <div class="price">
        <h2>{{product.price}}</h2>
        <button v-on:click="addToCart(product)" class="auto">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
// import Cart from "../views/Cart.vue"
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
      addToCart(theProducts){
          this.$root.$data.cart.push(theProducts);
          this.$root.$data.numberOfItems++;
      }
  }

}
</script>



<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #dd1021;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
  color:#ffc300;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: #ffc300;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
