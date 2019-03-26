import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";

export default class HeaderContainer extends React.Component {
    render() {

        return (
            <>
                <Header />
                <Sidebar />
            </>
        )
    }
}