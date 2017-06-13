import React from 'react'

import HoaxCheckerForm from './HoaxCheckerForm'
import Footer from './Footer'

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