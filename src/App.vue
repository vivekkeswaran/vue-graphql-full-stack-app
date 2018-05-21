<template>
  <div id="app">
    <h1>Vivek's Reading List</h1>
    <book-list />
    <add-book />
  </div>
</template>

<script>
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";


export default {
  name: "App",
  components: {
    BookList, AddBook
  }
};
</script>

<style>
@import './app.css'
</style>
