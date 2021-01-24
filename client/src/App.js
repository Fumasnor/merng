import {ApolloProvider} from '@apollo/client'
import {Route, BrowserRouter } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
import './App.css';
import client from './ApolloProvider'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import MenuBar from './components/MenuBar';
import {Container} from 'semantic-ui-react'

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Container>
          <MenuBar/>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/register" component = {Register}/>
          <Route exact path = "/login" component = {Login}/>
        </Container>
      </ApolloProvider>
    </BrowserRouter>
   );
}

export default App;
