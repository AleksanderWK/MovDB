import gql from "graphql-tag";

const CURRENT_USER = gql`
    {
        currentUser {
            username
        }
    }
`;

const LOGIN = gql`
    query loginUser($username: String!, $password: String!) {
        loginUser(username: $username, password: $password) {
            token
        }
    }
`;

const REGISTER = gql`
    mutation createUser($username: String!, $password: String!) {
        createUser(username: $username, password: $password) {
            _id
            username
        }
    }
`;

const MOVIE_DATA = gql`
    query movie($imdb_id: String!) {
        movie(imdb_id: $imdb_id) {
            original_title
            overview
            genres
            production_countries {
                name
            }
            runtime
            release_date
            trailer
        }
    }
`;

export {CURRENT_USER, LOGIN, REGISTER, MOVIE_DATA};
