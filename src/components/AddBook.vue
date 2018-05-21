<template>
    <form id="add-book" v-on:submit="addBook" method="post">
        <div class="field">
            <label>Book Name:</label>
            <input type="text" v-model="name" />
        </div>
        <div class="field">
            <label>Genre:</label>
            <input type="text" v-model="genre"/>
        </div>
        <div class="field">
            <label>Author:</label>
            <select v-model="authorId">
                <option disabled value="">Select Author</option>
                <option v-for="author in authors" :key="author.id" :value="author.id">{{author.name}}</option>
            </select>
        </div>

        <button>+</button>
    </form>
</template>

<script>
import {
  GET_ALL_BOOKS_QUERY,
  GET_ALL_AUTHORS_QUERY,
  ADD_BOOK_MUTATION
} from "../graphql";

export default {
  name: "add-book",
  data() {
    return {
      name: "",
      genre: "",
      authorId: "",
      authors: []
    };
  },
  apollo: {
    authors: {
      query: GET_ALL_AUTHORS_QUERY
    }
  },
  methods: {
    addBook(e) {
      e.preventDefault();
      if (!this.validate(this)) return false;

      this.$apollo
        .mutate({
          mutation: ADD_BOOK_MUTATION,
          variables: {
            name: this.name,
            genre: this.genre,
            authorId: this.authorId
          },
          refetchQueries: [{ query: GET_ALL_BOOKS_QUERY }]
        })
        .catch(errorMsg => console.log(`Error Occured: ${errorMsg}`));
    },
    validate(obj) {
      if (!(obj.name && obj.genre && obj.authorId)) return false;
      else if (obj.name.trim() === "") return false;
      else if (obj.genre.trim() === "") return false;
      else if (obj.authorId.trim() === "") return false;
      else return true;
    }
  }
};
</script>
