import React from "react";

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import EffectifsContainer from "../container/EffectifsContainer";
import ListNews from "../components/listNews";
import VideoContent from "./VideoContent";
import Category from "./Category";
import CalendarContent from  "../components/CalendarContent";
import TabContent from 'react-bootstrap/TabContent';

export default function TabsClub(props) {

   

    const content = (
        <Tabs defaultActiveKey="Calendrier" id="uncontrolled-tab-example" className="ml-auto mr-auto">
            <Tab eventKey="Effectifs" title="Effectifs">
                <EffectifsContainer/>
            </Tab>
            <Tab eventKey="Calendrier" title="Calendrier">
                <CalendarContent/>
            </Tab>
            <Tab eventKey="Classement" title="Classement" disabled>
                {/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="Palmarès" title="Palmarès" disabled>
                {/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="Vidéos" title="Vidéos">
                    <VideoContent/>
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

