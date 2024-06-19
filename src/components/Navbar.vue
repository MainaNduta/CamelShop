<template>
    <v-app-bar :elevation="19" color="pink">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>Application Bar</v-app-bar-title>
  <v-btn to="/">Home</v-btn>
  <v-btn to="/products">Products</v-btn>
  <v-btn to="/aboutus">Aboutus</v-btn>
  <v-btn to="/contactus">ContactUs</v-btn>
  <v-btn to="/services">ServicesOffered</v-btn>
  <v-btn to="/cart">Cart</v-btn>
</v-app-bar>
</template>