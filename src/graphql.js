import gql from 'graphql-tag';

export const GET_ALL_BOOKS_QUERY = gql`
    {
        books {
            id
            name
            genre
        }
    }
`;

export const GET_ALL_AUTHORS_QUERY = gql`
    {
        authors {
            id
            name
            age
        }
    }
`;

export const ADD_BOOK_MUTATION = gql`
    mutation addBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId) {
            id
            name
            genre
        }
    }
`;

export const GET_BOOK_QUERY = gql`
    query book($id: ID!) {
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                books {
                    id
                    name
                }
            }
        }
    }
`;