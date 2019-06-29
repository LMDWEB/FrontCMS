import React from "react";
import Link from "react-router-dom/Link";
import logo from '../logo.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




export default class   AllNewsContainer extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          loading: true,
          posts: [],
          categories: []
        }
      }
      async componentDidMount() {
        let response = await fetch(`http://localhost:1337/articles?_limit=3`);
        if (!response.ok) {
          return
        }
    
        let posts = await response.json()
        this.setState({ loading: false, posts: posts, categories: posts.category })

    }

    render() { 
        if (!this.state.loading) {
            const style = {
                maxHeight: 50
            }

            return (
                <>
                    
                </>
            );
        }
        return (<h2 className="postList-title">Waiting for API...</h2>);
    }
}