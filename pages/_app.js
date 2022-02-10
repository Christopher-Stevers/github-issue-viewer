import '../styles/globals.css';
import {ApolloProvider} from '@apollo/client';
import apolloClient from '../lib/apollo';
import Layout from '../components/layout'
function MyApp({ Component, pageProps }) {
  return  <Layout> <ApolloProvider client={apolloClient}>
    <Component {...pageProps} /></ApolloProvider></Layout>;
}

export default MyApp;
