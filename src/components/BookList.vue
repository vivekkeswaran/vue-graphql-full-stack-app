<template>
  <div>
    <div v-if="$apollo.loading">Loading...</div>
    <ul id="book-list">
      <li v-for="book in books" :key="book.id" @click="onBookClick(book.id)">{{book.name}}</li>
    </ul>
    <book-details :bookid="selectedBook" />
  </div>
</template>

<script>
import BookDetails from "./BookDetails";
import { GET_ALL_BOOKS_QUERY } from "../graphql";

export default {
  name: "book-list",
  components: {
    BookDetails
  },
  data() {
    return {
      books: [],
      selectedBook: ""
    };
  },
  apollo: {
    books: {
      query: GET_ALL_BOOKS_QUERY,
      // Error handling
      error(error) {
        console.error("[BookList.vue] We've got an error!", error);
      }
    }
  },
  methods: {
    onBookClick(bookId) {
      this.selectedBook = bookId;
    }
  }
};
</script>


