import React, { Component } from "react";

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            textarea: '',
            topic: 'React'
        }
    }

    handleUsernameChange = (event) => {
        this.setState(
            {
                username: event.target.value
            }
        )
    }

    handlerTextareaChange =(event) =>{
        this.setState(
            {
                textarea: event.target.value
            }
        )
    }

    hadlerTopicChange = event =>
    this.setState(
        {
            topic: event.target.value
        }
    )

    handlerSubmit = event => {
        alert(`${this.state.username} ${this.state.textarea} ${this.state.topic}`)
        event.preventDefault()
    }


    render(){
        const { username, textarea, topic } = this.state
        return(
            <form onSubmit={this.handlerSubmit}>
                <div>
                    <label>Username</label>
                    <input 
                    type='text' 
                    value={username}
                    onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea 
                    type= 'text' 
                    value = {textarea}
                    onChange={this.handlerTextareaChange} />
                </div>
                <div>
                    <label>Topic</label>
                    <select 
                    value={topic}
                    onChange={this.hadlerTopicChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form