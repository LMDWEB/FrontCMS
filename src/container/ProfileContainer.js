import React from "react";
import ProfileSidebar from "../components/profileSidebar";
import ProfileContent from "../components/profileContent";

export default class ProfileContainer extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            loading: true,
            posts: [],
        }
    }
      
    async componentDidMount() {
        let response = await fetch(`http://localhost:1337/players/${this.props.match.params.id}`)
        let data = await response.json()

        this.setState({
            loading: false,
            posts: data
        })
    }

    render() {
        if (!this.state.loading) {
            return (
                <>
                    <ProfileSidebar player={this.state.posts} />

                    <p>lzdzldzefzfe</p>
                </>
            )
        }
        
        return (<h2>Waiting for API...</h2>);
    }
}