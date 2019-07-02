import React from "react";
import Link from 'react-router-dom/Link';
import Row from 'react-bootstrap/Row';
import TabsClub from "./TabsClub";

export default function ClubContent(props) {
	

    const content = (

				<TabsClub/>
    );

    return (
                <>
                {content}
                </>
    );
}