<template>
<div>
  <div class="wrapper">
    <div class="title">
      <h1> Quench Thy Thirst! </h1>
    </div>
  </div>
  <ProductList :products="products" />
</div>
</template>



<script>
import ProductList from "../components/DrinkList.vue"
//import Cart from "../views/Cart.vue"

export default {
  name: 'Home',
  components: {
    ProductList,
    //Cart
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    products() {
    return this.$root.$data.drinks.filter(product => product.name.toLowerCase().search(this.searchText) >= 0);
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

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
