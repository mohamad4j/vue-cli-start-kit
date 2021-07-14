<template>
  <div id="nav">
    <router-link class="text-indigo-2" to="/">Home</router-link> |
    <router-link class="text-indigo-2" to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
 @import "sass/app";
 @import "css/style.css";
</style>
