import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import MoneroContainer from './components/MoneroContainer/MoneroContainer';

function App() {
    return (
        <Container className="app">
            <MoneroContainer />
            <Footer></Footer>
        </Container>
    );
}

export default App;
