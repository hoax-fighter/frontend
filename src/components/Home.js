import React from 'react'

import HoaxCheckerForm from './HoaxCheckerForm'

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showSignIn: true
        }
    }

    render() {
        return (
            <div>
                <HoaxCheckerForm />
            </div>
        )
    }
}

export default Home