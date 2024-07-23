<template>
<v-app-bar :elevation="2">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>Application Bar</v-app-bar-title>


  <v-btn to ="/">Home</v-btn>
  <v-btn to ="/">cart</v-btn>
  <v-btn to ="/">Contact Us</v-btn>
  <v-btn to ="/">About Us</v-btn>
  <v-btn to ="/">Products</v-btn>
  <v-btn to ="/">Services</v-btn>


</v-app-bar>
</template>