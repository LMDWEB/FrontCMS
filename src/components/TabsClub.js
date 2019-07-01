import React from "react";

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import EffectifsContainer from "../container/EffectifsContainer";
import ListNews from "../components/listNews";
import ArticleList from "./ArticleList";
import Category from "./Category";

export default function TabsClub(props) {

    const content = (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="Effectifs" title="Effectifs">
                <EffectifsContainer/>
            </Tab>
            <Tab eventKey="Calendrier" title="Calendrier">
                
            </Tab>
            <Tab eventKey="Classement" title="Classement" disabled>
                {/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="Palmarès" title="Palmarès" disabled>
                {/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="Vidéos" title="Vidéos">
                <ArticleList/>
            </Tab>
        </Tabs>

    );

    return (
        <div className="col-12">
            <div className="row">
                {content}
            </div>
        </div>
    );
}

