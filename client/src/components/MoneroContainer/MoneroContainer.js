import React, { PureComponent } from 'react';
import axios from 'axios';
import Header from '../../Header';
import ServerCard from '../../ServerCard';
import ConnectionCard from '../../ConnectionCard';
import MoneroCard from '../../MoneroCard';

class MoneroContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.moneroTnterval = null;

    this.state = {
      moneroInfo: {},
    };
  }

  componentDidMount() {
    // Start the monero timer
    this.moneroInterval = setInterval(this.getMonero, 30000);
  }

  componentWillUnmount() {
    // clear the interval timer
    clearInterval(this.moneroInterval);
  }

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

  render() {
    const {
      moneroInfo,
    } = this.state;

    return (
      <div className="MoneroContainer">
        <Header info={moneroInfo}></Header>
        <ServerCard info={moneroInfo}></ServerCard>
        <ConnectionCard info={moneroInfo}></ConnectionCard>
        <MoneroCard info={moneroInfo}></MoneroCard>
      </div>
    );
  }
}

export default MoneroContainer;
