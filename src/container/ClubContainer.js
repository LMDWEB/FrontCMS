import React from "react";
import ProfileSidebar from "../components/profileSidebar";
import ProfileContent from "../components/profileContent";
import ClubSidebar from "../components/clubSidebar";

export default class ClubContainer extends React.Component {
    render() {
        return (
            <>
                <ClubSidebar />
                <ProfileContent />
            </>
        )
    }
}