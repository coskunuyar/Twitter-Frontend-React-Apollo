import React from 'react';
import {addTweetMutation , getUserQuery} from '../queries/queries'
import {graphql} from 'react-apollo';

class AddTweet extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tweet: ""
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        if(this.state.tweet !== ""){
            this.props.mutate({
                variables: {
                    text: this.state.tweet,
                    ownerId: this.props.userId
                }
            });
            this.props.data.refetch();
            this.setState({tweet: ""});
        }
    }
    render(){
        return <form onSubmit={this.handleSubmit}>
            <input  type="text" 
                    value={this.state.tweet}
                    className="tweet-input"
                    onChange={e => this.setState({tweet: e.target.value}) } />
            <input type="submit" />
        </form>;
    }
}

export default graphql(addTweetMutation)(AddTweet);