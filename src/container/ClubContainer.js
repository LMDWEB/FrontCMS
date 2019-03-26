import React from "react";
import ProfileSidebar from "../components/profileSidebar";
import ProfileContent from "../components/profileContent";

export default class ClubContainer extends React.Component {
    render() {
        return (
            <>
                <ProfileSidebar />
                <ProfileContent />
            </>
        )
    }
}