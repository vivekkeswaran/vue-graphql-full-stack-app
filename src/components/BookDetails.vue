<template>
    <div id="book-details">
      <div v-if="book">
        <p>Book details go here:</p>
        <div>
            <h2>{{book.name}}</h2>
            <p>{{book.genre}}</p>
            <p>{{book.author.name}}</p>
            <p>All Books by this author</p>
            <ul class="other-books">
                <li v-for="item in book.author.books" :key="item.id">
                    {{item.name}}
                </li>
            </ul>
        </div>
      </div>
      <div v-else>No Books Selected...</div>
    </div>
</template>

<script>
import { GET_BOOK_QUERY } from "../graphql";

export default {
  name: "book-details",
  props: ["bookid"],
  data() {
    return {
      book: null
    };
  },
  apollo: {
    book: {
      // Advanced query with parameters
      // The 'variables' method is watched by vue
      query: GET_BOOK_QUERY,
      // Reactive parameters
      variables() {
        // Use vue reactive properties here
        return {
          id: this.bookid
        };
      },
      // We use a custom update callback because
      // we need to assign single Book Type Object rather than an array of objects
      update: data => data.book,
      skip() {
        return this.bookid === "";
      },
      // Error handling
      error(error) {
        console.error("[BookDetails.vue] We've got an error!", error);
      }
    }
  }
};
</script>

