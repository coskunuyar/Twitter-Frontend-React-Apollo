import React from 'react';
import {graphql} from 'react-apollo';
import {deleteTweet} from '../queries/queries'

class TweetList extends React.Component{
    handleDelete(id){
        this.props.mutate({
            variables: { tweetId: id }
        });
        this.props.data.refetch();
    }
    render(){
        return  <ul className="tweet-list">
                    {
                        this.props.tweets.map(tweet => <li key={tweet.id}>
                                {tweet.text} 
                                <span onClick={() => this.handleDelete(tweet.id)}>Delete</span>
                            </li>)
                    }
                </ul>;
    }
}


export default graphql(deleteTweet)(TweetList);