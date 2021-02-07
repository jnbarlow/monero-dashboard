import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ConnectionsCard(props) {
    return (
        <Card className="dataCard connections">
            <Card.Body>
                <Card.Title>Active Connections</Card.Title>
                <Card.Text>
                    <Row className="connectionsHeader">
                        <Col md="2">IP</Col>
                        <Col md="2">Incoming</Col>
                        <Col md="2">Current Upload</Col>
                        <Col md="2">Current Download</Col>
                        <Col md="2">Send Count</Col>
                        <Col md="2">Receive Count</Col>
                    </Row>
                    <div className="connectionsData">
                        {props.connections.map((conn, index) => {
                            return (
                                <Row>
                                    <Col md="2">{conn.ip}</Col>
                                    <Col md="2">{conn.incoming ? 'True' : 'False'}</Col>
                                    <Col md="2">{conn.current_upload}</Col>
                                    <Col md="2">{conn.current_download}</Col>
                                    <Col md="2">{conn.send_count}</Col>
                                    <Col md="2">{conn.recv_count}</Col>
                                </Row>
                            );
                        })}
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ConnectionsCard;
