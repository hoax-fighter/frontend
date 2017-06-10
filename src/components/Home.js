import React from 'react'

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showSignIn: true
        }
    }

    render() {
        // if (this.state.showSignIn) {
        //     return (
        //         <SignIn />
        //     )

        // } else {
        //     return (
        //         <Register />
        //     )
        // }
        return (
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}

export default Home