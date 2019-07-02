import React from "react";
import PlayerNews from "../components/playerNews";
import PlayerContent from "../components/playerContent";
import PlayerSidebar from "../components/playerSidebar";

export default class PlayerContainer extends React.Component {
    render() {
        return (
            <>
                <PlayerSidebar />
                <PlayerContent />
            </>
        )
    }
}