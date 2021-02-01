import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import React from 'react'
import Header from './Header'
import ServerCard from './ServerCard'
import ConnectionCard from './ConnectionCard'
import Footer from './Footer'
import Container from 'react-bootstrap/Container'
import MoneroCard from './MoneroCard'

function App() {
    let [moneroInfo, setMoneroInfo] = React.useState('');

    React.useEffect(()=>{
        (async ()=>{
            try{
                const result = await axios({
                    'method': 'GET',
                    'url': '/api/get_info'
                });
                setMoneroInfo(result.data);
                console.log(result.data);
            } catch (e) {
                console.log('Error getting data from remote node:', e);
            }
        })();
    }, [setMoneroInfo]);

    return (
        <Container className='app'>
            <Header info={moneroInfo}></Header>
            <ServerCard info={moneroInfo}></ServerCard>
            <ConnectionCard info={moneroInfo}></ConnectionCard>
            <MoneroCard info={moneroInfo}></MoneroCard>

            <Footer></Footer>

        </Container>
    );
}

export default App;
