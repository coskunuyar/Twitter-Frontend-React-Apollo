import { gql } from 'apollo-boost';

export const getUserQuery = gql`
    query getUser($id: ID){
        user(id: $id) {
        id
        username
        tweets {
            id
            text
            reTweetedBy {
                username
            }
        }
        }
    }
`;

export const addTweetMutation = gql`
    mutation($text: String! , $ownerId: ID!){
        addTweet(text: $text , ownerId: $ownerId){
            id
        }
    }
`;

export const deleteTweet = gql`
    mutation($tweetId: ID!){
        deleteTweet(tweetId: $tweetId ){
            id
        }
    }
`;