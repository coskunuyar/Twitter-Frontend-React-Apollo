import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Profile from './components/profile';
import './App.css';

const client = new ApolloClient({
  uri: "http://localhost:4000/v1",
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Profile userId="5ef4d5e11115b53b947cc89a" />
      </div>
    </ApolloProvider>
  );
}

export default App;
