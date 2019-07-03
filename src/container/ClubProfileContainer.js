import React from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListNews from "../components/listNews";



export default class ClubProfileContainer extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            loading: true,
            posts: [],
        }
    }
      
    async componentDidMount() {
        let response = await fetch(`https://api.news.lmdfoot.com/players/${this.props.match.params.id}`)
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
                   <Container>
                        <Row>
                            <div className="content-sidebar-pro">
                                <div id="content-sidebar-info">
                                    <div id="profile-sidebar-gradient"></div>
                                </div>

                                <div className="content-sidebar-section">
                                    <img src="images/demo/cavani.png"/>
                                    <h3 className="content-sidebar-sub-header">Profile</h3>
                                </div>
                            </div>
                            <div className="dashboard-container">
                                <Col>2 of 2</Col>
                                <ListNews/>

                            </div>
                            
                        </Row>
                    </Container>
                </>
            )
        }
        
        return (<h2>Waiting for API...</h2>);
    }
}