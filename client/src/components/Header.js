import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Timer from './MoneroContainer/Timer';
import monero_logo from '../monero-logo.png';
import Prices from './ConversionContainer/ConversionContainer';
import axios from 'axios';
import { React, PureComponent } from 'react';

class Header extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            ticker: false
        };
    }

    componentDidMount() {
        this.getSettings();
    }

    /**
     * get settings from the server.
     */
    getSettings = async () => {
        try {
            const result = await axios({
                method: 'GET',
                url: '/settings'
            });

            this.setState({
                ticker: result.data.TICKER === 'true'
            });
        } catch (err) {
            console.error('Error fetching monero data', err);
        }
    };

    render() {
        const props = this.props;
        const update = props.info.update_avilable ? 'Yes! ' : 'not today...';
        const busy = props.info.busy_syncing ? 'Yes, catching up.' : 'Nope, up to date.';
        const { ticker } = this.state;

        return (
            <Jumbotron>
                <Container>
                    <Row>
                        <Col md="8">
                            <h1>
                                <img src={monero_logo} className="logo" /> Dashboard
                            </h1>
                            <Container>
                                <Row>
                                    <Col md="4">Monero Node Version:</Col>
                                    <Col>{props.info.version}</Col>
                                </Row>
                                <Row>
                                    <Col md="4">Update Available:</Col>
                                    <Col>{update}</Col>
                                </Row>
                                <Row>
                                    <Col md="4">Connected to:</Col>
                                    <Col>{props.info.nettype}</Col>
                                </Row>
                                <Row>
                                    <Col md="4">Busy Syncing:</Col>
                                    <Col>{busy}</Col>
                                </Row>
                                <Row>
                                    <Col />
                                </Row>
                                <Row>
                                    <Col md="3">
                                        <Timer />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col md="4">
                            {(() => {
                                if (ticker) {
                                    return <Prices />;
                                }
                            })()}
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default Header;
