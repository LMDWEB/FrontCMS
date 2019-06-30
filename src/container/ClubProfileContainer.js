import React from "react";


export default class ClubProfileContainer extends React.Component {

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
                    <p>Page Perso du Joueur</p>
                </>
            )
        }
        
        return (<h2>Waiting for API...</h2>);
    }
}