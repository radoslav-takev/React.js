import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
        let message
        if (this.state.isLoggedIn){
            message = <div>Welcome r</div>
        } else {
            message = <div>Welcome guest</div>
        }

        return <div>{message}</div>
        // if (this.state.isLoggedIn){
        //     return (
        //         <div>
        //             Welcome rado
        //         </div>
        //     ) 
        //     }else {
        //         return (
        //             <div>Welcome guest</div>
        //         )
        //     }
        
        // return (
        //     <div>
        //         <div>Welcome rado</div>
        //         <div>Welcome guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
