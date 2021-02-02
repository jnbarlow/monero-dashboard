import { React, PureComponent } from 'react';
import axios from 'axios';
import Header from '../Header';
import ServerCard from '../cards/ServerCard';
import ConnectionCard from '../cards/ConnectionCard';
import MoneroCard from '../cards/MoneroCard';
import ConnectionsCard from '../cards/ConnectionsCard';

class MoneroContainer extends PureComponent {
    tickTime = 30000;
    constructor(props) {
        super(props);

        this.moneroInterval = null;
        this.tickInterval = null;
        this.connectionsInterval = null;
        this.state = {
            moneroInfo: {},
            tick:this.tickTime,
            connections: []
        };
    }

    componentDidMount() {
        this.getConnections();
        this.getMonero();

        //start the overall timer
        //this.tickInterval = setInterval(this.tick, 1000);

        // Start the monero timer
        this.moneroInterval = setInterval(this.getMonero, this.tickTime);

        //start the connections timer
        this.connectionsInterval = setInterval(this.getConnections, this.tickTime);
    }

    componentWillUnmount() {
        // clear the interval timer
        clearInterval(this.moneroInterval);
        clearInterval(this.tickInterval);
        clearInterval(this.connectionsInterval);
    }

    //refresh timer for display
    tick = () => {
        const next = this.state.tick - 1000;
        if(this.state.tick > 0) {
            this.setState({tick:next});
        } else {
            this.setState({tick:this.tickTime});
        }
    }

    /**
     * gets data from the get_info endpoint
     */
    getMonero = async () => {
        try {
            const result = await axios({
                'method': 'GET',
                'url': '/api/get_info',
            });

            this.setState({
                moneroInfo: result.data,
            });

        } catch (err) {
            console.error('Error fetching monero data', err);
        }
    }

    /**
     * gets connections via json_rpc
     */
    getConnections = async() => {
        try {
            const result = await axios.post(
                '/api/json_rpc',
                {"jsonrpc":"2.0","id":"0","method":"get_connections"}
            );

            this.setState({
                connections: result.data.result.connections,
            });

        } catch (err) {
            console.error('Error fetching monero data', err);
        }
    }

    render() {
        const { moneroInfo, tick, connections } = this.state;

        return (
            <div className="MoneroContainer">
                <Header info={moneroInfo} tick={tick}/>
                <ServerCard info={moneroInfo}/>
                <ConnectionCard info={moneroInfo}/>
                <MoneroCard info={moneroInfo}/>
                <ConnectionsCard connections={connections}/>
            </div>
        );
    }
}

export default MoneroContainer;
