import React, { Component } from 'react'
import css from './css/NavBarForm.module.css'

export default class NavBarForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        },
            () => console.log(this.state.isLoggedIn)
        )
    }
    

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <h1>{this.state.isLoggedIn}</h1>

                {this.state.isLoggedIn ? (
                    <>
                    <h1>{this.state.isLoggedIn}</h1>
                    <form action="">
                        <label htmlFor="username" placeholder='Username'>Username:</label>
                        <input type="text" />
                        <label htmlFor="password" placeholder='Password'>Password:</label>
                        <input type="password" />
                        <button type="submit" onClick={() => this.handleClick()}>
                            SUBMIT
                        </button>
                    </form>
                    </>
                ) : (
                    <>
                        <h1>{this.state.isLoggedIn}</h1>
                        <button onClick={() => this.handleClick()}>
                            {this.state.isLoggedIn ? "LOGOUT" : "LOGIN"}
                        </button>
                    </>
                )}

                {/* Answer */}
                                    {/* This is part of steps 1-8 */}
                    {/* {
                    this.state.isLoggedIn ? 
                        <button onClick={() => this.handleButtonClick()}>Login</button>
                        : 
                        <form>
                            <label htmlFor = "username">Username:</label>
                            <input placeholder="username" id="username"/>
                            
                            <label htmlFor = "password">Password:</label>
                            <input placeholder="password" id="password"/>
                            <button onClick={() => this.handleButtonClick()}>Submit</button>
                        </form>
                        
                    } */}

            </div>
        )
    }
}
