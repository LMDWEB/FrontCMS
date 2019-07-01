import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const App = props => <LoginForm />;

export default class LoginForm extends React.Component {

    state = {
        username: "",
        password: ""
    }

    handleKeyUp = (event, field) => {
        const input = event.currentTarget;
        
        this.setState({
            [field]: input.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        
        var bg='/images/demo/bg-login.jpeg'

        const FormHeader = props => <h2 id="headerTitle">{props.title}</h2>;

        const Form = props => (
        <div>
            <FormInput onKeyUp={(event) => this.handleKeyUp(event, "username")}
            description="Username"
            placeholder="Enter your username"
            type="text"
            />
            <FormInput onKeyUp={(event) => this.handleKeyUp(event, "password")}
            description="Password"
            placeholder="Enter your password"
            type="password"
            />
            <FormButton title="Log in" />
        </div>
        );

        const FormButton = props => (
        <div id="button" class="log">
            <button>{props.title}</button>
        </div>
        );

        const FormInput = props => (
        <div class="log">
            <label>{props.description}</label>
            <input type={props.type} placeholder={props.placeholder} />
        </div>
        );

        return (
            <Container fluid id="body-login" style={{backgroundImage: 'linear-gradient(to top, #004170, #235385, #3c669b, #5279b1, #688dc8, #749ad2, #81a6db, #8eb3e5, #97bbe3, #a1c2e1, #aec9de, #bccfdc)'}}>
             <div style={{
                 backgroundImage: "url("+bg+")",
             backgroundRepeat: 'no-repeat', backgroundSize: 'cover' , content: '', position: 'absolute' , top: '2px' , bottom: '0', left: '0', right: '0' , opacity: '0.2'}} />
                    <div className="log">
                        <div id="loginform">
                            <FormHeader title="Login" />
                            <Form onSubmit={this.handleSubmit} />
                        </div>
                    </div>
              
               
            </Container>
            
        );
    }
}


