import React, { Component } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";

class LogIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState(
            {
                username: event.target.value
            }
        )
    }
    handlePasswordChange = (event) => {
        this.setState(
            {
                password: event.target.value
            }
        )
    }

    handlerSubmit = event => {
        alert(`${this.state.username}, ${this.state.password}`)
        event.preventDefault()
    }


    render() {
        const { username, password } = this.state
        return (
            <div>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="5">
                            <Form  onSubmit={this.handlerSubmit}>
                                <h3 className="text-center">Log In</h3>
                                <div className="mb-3">
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                        value={username}
                                        onChange={this.handleUsernameChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={this.handlePasswordChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck1"
                                        />
                                        <label className="custom-control-label" htmlFor="customCheck1">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <div className="d-grid text-center">
                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                                <p className="forgot-password text-right">
                                    Forgot <a href="#">password?</a>
                                </p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default LogIn