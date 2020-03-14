<template>
<div class="wrapper">
  <div class="products">

  <div v-if="this.$root.$data.numberOfItems == 0">
      <h2> Bruh, thine cart hath no contents--feed thyself. </h2>
  </div>

  <div v-else>
      <div class="product" v-for="item in $root.$data.cart" :key="item.id">
        <div class="info">
          <h1>{{item.name}}</h1>
        </div>
        <div class="image">
          <img :src="'/images/products/'+item.image">
        </div>
        <div class="price">
          <h2>{{item.price}}</h2>
          <button v-on:click="removeFromCart(item)" class="auto">Remove</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'cart',
  props: {
    products: Array
  },
  methods: {
      removeFromCart(itemToRemove){
          var index = this.$root.$data.cart.indexOf(itemToRemove);
          this.$root.$data.cart.splice(index,1);
          this.$root.$data.numberOfItems--;
      }
  }


};
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
  background: #ffc300;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
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
  color: #dd1021;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
