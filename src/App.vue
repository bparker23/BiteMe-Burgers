<template>
<div id="app">
  <div id="menu">

    <div id="brand">
      <router-link to="/">
        <img src="/images/logo.png">
      </router-link>
    </div>
      

    <div id="side">

    <router-link to="/">
      <div class="menu-item browse">
        <img src="/images/burger.png">
        <p>Burgers</p>
      </div>
    </router-link>

      <router-link to="/browse">
        <div class="menu-item browse">
          <img src="/images/fries.png">
          <p>Sides</p>
        </div>
      </router-link>

      <router-link to="/drinks">
        <div class="menu-item browse">
          <img src="/images/shake2.png">
          <p>Drinks</p>
        </div>
      </router-link>


      <router-link to="/cart">
        <div class="menu-item">
          <img src="/images/cart.png">
          <p>Items: {{this.$root.$data.numberOfItems}}</p>
        </div>
      </router-link>
    </div>

  </div>
  <router-view />
</div>
</template>




<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: right;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>
