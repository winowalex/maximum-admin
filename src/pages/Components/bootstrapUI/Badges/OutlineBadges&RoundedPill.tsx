import React from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';

import { OutlineBadgesExample, RoundedPillBadgesExample } from './UiBadgeCode';

const OutlineBadges = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Outline Badges</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use the <code>badge-outline-</code> class with the below-mentioned variation to create a badge with the outline.</p>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge bg-body-secondary border border-primary text-primary">Primary</span>
                                <span className="badge bg-body-secondary border border-secondary text-secondary">Secondary</span>
                                <span className="badge bg-body-secondary border border-success text-success">Success</span>
                                <span className="badge bg-body-secondary border border-info text-info">Info</span>
                                <span className="badge bg-body-secondary border border-warning text-warning">Warning</span>
                                <span className="badge bg-body-secondary border border-danger text-danger">Danger</span>
                                <span className="badge bg-body-secondary border border-dark text-dark">Dark</span>
                                <span className="badge bg-body-secondary border border-light text-body">Light</span>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-xs text-muted mb-0">React Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "175px" }}>
                                <OutlineBadgesExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Rounded Pill Badges</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use the <code>rounded-pill</code> class to make badges more rounded with a larger border-radius.</p>
                            <div className="d-flex flex-wrap gap-2">
                                <Badge bg="primary" pill>Primary</Badge>
                                <Badge bg="secondary" pill>Secondary</Badge>
                                <Badge bg="success" pill>Success</Badge>
                                <Badge bg="info" pill>Info</Badge>
                                <Badge bg="warning" pill>Warning</Badge>
                                <Badge bg="danger" pill>Danger</Badge>
                                <Badge bg="dark" pill>Dark</Badge>
                                <Badge bg="light text-dark" pill className='text-body'>Light</Badge>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-xs text-muted mb-0">React Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "175px" }}>
                                <RoundedPillBadgesExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default OutlineBadges;