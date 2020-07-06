import React from 'react';
import {getUserQuery} from '../queries/queries';
import {graphql} from 'react-apollo';
import TweetList from './tweetList';
import AddTweet from './addTweet';

class Profile extends React.Component{
    getUserProfile(){
        const { data } = this.props;
        if(data.loading){
           return <h1>Loading..</h1>;
        }else{
            return <div className="main-container">
                        <div>
                            <h3>Username: {data.user.username}</h3>
                        </div>
                        <div className="main-container-tweet-part">
                            <AddTweet  userId={data.user.id} data={data} />
                            <TweetList tweets={data.user.tweets} data={data} />
                        </div>
                    </div>
        }
    }
    render(){
        return(this.getUserProfile());
    }
}

export default graphql(getUserQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.userId
            }
        }
    }
})(Profile);