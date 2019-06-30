import React from "react";
import ClubContent from "../components/clubContent";
import ClubSidebar from "../components/clubSidebar";

export default class ClubContainer extends React.Component {
    render() {
        return (
            <>
                <ClubSidebar />
                <ClubContent />
            </>
        )
    }
}