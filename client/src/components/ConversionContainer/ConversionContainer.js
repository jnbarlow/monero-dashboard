import { React, PureComponent } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ConversionContainer extends PureComponent {
    tickTime = 300000;
    constructor(props) {
        super(props);

        this.priceInterval = null;
        this.state = {
            prices: []
        };
    }

    componentDidMount() {
        this.getPrices();

        // Start the price timer
        this.priceInterval = setInterval(this.getPrices, this.tickTime);
    }

    componentWillUnmount() {
        // clear the interval timer
        clearInterval(this.priceInterval);
    }

    /**
     * gets pricing data
     */
    getPrices = async () => {
        try {
            const result = await axios({
                method: 'GET',
                url: 'https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=BTC,USD,EUR'
            });

            this.setState({
                prices: result.data
            });
        } catch (err) {
            console.error('Error fetching price data', err);
        }
    };

    render() {
        const { prices } = this.state;

        return (
            <Container>
                <Row>
                    <Col>
                        <h2>Conversion Rates</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="currencyLabel">USD:</Col>
                    <Col className="currency">${prices.USD}</Col>
                </Row>
                <Row>
                    <Col className="currencyLabel">EUR:</Col>
                    <Col className="currency">€{prices.EUR}</Col>
                </Row>
                <Row>
                    <Col className="currencyLabel">BTC:</Col>
                    <Col className="currency">₿{prices.BTC}</Col>
                </Row>
                <Row className="cryptocompare">
                    <Col>
                        Powered by <a href="https://min-api.cryptocompare.com/">CryptoCompare</a>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ConversionContainer;
