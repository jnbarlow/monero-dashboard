import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Header(props) {
    const update = props.info.update_avilable ? 'Yes! ' : 'not today...';
    const busy = props.info.busy_syncing? 'Yes, catching up.' : 'Nope, up to date.';

    return (
        <Jumbotron>
            <h1>Monero Dashboard</h1>
            <Container>
                <Row>
                    <Col md='4'>
                        Monero Node Version:
                    </Col>
                    <Col>
                        {props.info.version}
                    </Col>
                </Row>
                <Row>
                    <Col md='4'>
                        Update Available:
                    </Col>
                    <Col>
                        {update}
                    </Col>
                </Row>
                <Row>
                    <Col md='4'>
                        Connected to:
                    </Col>
                    <Col>
                        {props.info.nettype}
                    </Col>
                </Row>
                <Row>
                    <Col md='4'>
                        Busy Syncing:
                    </Col>
                    <Col>
                        {busy}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Header;
