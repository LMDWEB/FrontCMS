import React from "react";
import Link from 'react-router-dom/Link';
import Row from 'react-bootstrap/Row';
import TabsClub from "./TabsClub";

export default function ClubProfileContainerContent(props) {
	

    const content = (
        
            <Container>
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
            </Container>
    );

    return (
                {content}
    );
}