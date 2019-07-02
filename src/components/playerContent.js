import React from "react";
import Link from 'react-router-dom/Link';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import TabsPlayer from "./TabsPlayer";


export default function PlayerContent(props) {
	

    const content = (
        <div id="col-main-with-sidebar">
			<div className="dashboard-container">
            <TabsPlayer/>
			</div>
		</div>
    );

    return (
    <Container>
        <Row>
        <div className="col-12">
            <div className="row">
                {content}
            </div>
        </div>
        </Row>
	</Container>
        
    );
}