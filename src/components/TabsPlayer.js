import React from "react";

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import EffectifsContainer from "../container/EffectifsContainer";
import ListNews from "./listNews";
import VideoContent from "./VideoContent";
import Category from "./Category";
import CalendarContent from  "./CalendarContent"

export default function TabsClub(props) {

   

    const content = (
        <Tabs defaultActiveKey="Vidéos" id="uncontrolled-tab-example" className="ml-auto mr-auto">
            <Tab eventKey="Effectifs" title="Effectifs" disabled>
                <EffectifsContainer/>
            </Tab>
            <Tab eventKey="Calendrier" title="Calendrier" disabled>
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
        <div className="">
            <div className="row">
                {content}
            </div>
        </div>
    );
}

