import React from 'react'
import css from './css/NavBarSimple.module.css'

class NavBarSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "LOGIN"
        }
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                message: prevState.message === "LOGIN"? "LOGOUT" : "LOGIN"
            }
        },
        () => console.log(this.state.message)
    )}

    render() {
        return (
        <div className={css.NavBar}>
            <h1>Navbar</h1>
            <span>Hello!</span>
            <button onClick={()=> this.handleClick()}>{this.state.message}</button>
        </div>
        )
    }

}

export default NavBarSimple