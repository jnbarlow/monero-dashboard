import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Timer from './MoneroContainer/Timer';
import monero_logo from '../monero-logo.png';
import Prices from './ConversionContainer/ConversionContainer';

function Header(props) {
    const update = props.info.update_avilable ? 'Yes! ' : 'not today...';
    const busy = props.info.busy_syncing ? 'Yes, catching up.' : 'Nope, up to date.';

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
                        <Prices />
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Header;
