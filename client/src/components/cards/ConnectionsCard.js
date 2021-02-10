import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ConnectionsCard(props) {
    // Shamelessly copied from SO. Make the bytes easy to read.
    // https://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable-string/10420404
    function humanBytes(bytes) {
        var i = bytes == 0 ? 0 : Math.floor(Math.log(bytes) / Math.log(1024));
        return (
            (bytes / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'KiB', 'MiB', 'GiB', 'TiB'][i]
        );
    }

    return (
        <Card className="dataCard connections">
            <Card.Body>
                <Card.Title>Active Connections</Card.Title>
                <Card.Text>
                    <Row className="connectionsHeader">
                        <Col md="2">IP</Col>
                        <Col md="2">Direction</Col>
                        <Col md="2">Current Upload</Col>
                        <Col md="2">Current Download</Col>
                        <Col md="2">Sent Bytes</Col>
                        <Col md="2">Received Bytes</Col>
                    </Row>
                    <div className="connectionsData">
                        {props.connections.map((conn, index) => {
                            return (
                                <Row>
                                    <Col md="2">{conn.ip}</Col>
                                    <Col md="2">{conn.incoming ? 'Inbound' : 'Outbound'}</Col>
                                    <Col md="2">{humanBytes(conn.current_upload) + '/s'}</Col>
                                    <Col md="2">{humanBytes(conn.current_download) + '/s'}</Col>
                                    <Col md="2">{humanBytes(conn.send_count)}</Col>
                                    <Col md="2">{humanBytes(conn.recv_count)}</Col>
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
