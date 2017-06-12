import React from 'react'

import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

import { connect } from 'react-redux'

import {
    signInUser
} from '../actions'

const styles = {
    buttonStyle: {
        backgroundColor: '#F5F5F5',
        color: '#212121'
    },
    submitStyle: {
        marginBottom: 20
    }
}

class SignIn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            form: {
                email: '',
                password: ''
            },
            modalOpen: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {

        let { name, value } = e.target
        let { form } = this.state

        let tmpForm = {
            ...form
        }

        tmpForm[name] = value

        console.log(tmpForm)

        this.setState({
            form: tmpForm
        })
    }

    onSignIn(e) {
        e.preventDefault();
        this.handleClose()
        this.props.signInUser(this.state.form)
    }

    handleOpen = (e) => this.setState({
        modalOpen: true,
    })

    handleClose = () => this.setState({
        modalOpen: false,
    })


    render() {
        return (
            <Modal
                trigger={<Button
                    onClick={this.handleOpen}
                    style={styles.buttonStyle}>
                    <Icon name='sign in' /> Sign In</Button>}
                closeIcon='close'
                closeOnDimmerClick={false}
                size='small'
                open={this.state.modalOpen}
                onClose={this.handleClose}>
                <Header icon='sign in' content='Sign In' />
                <Modal.Content>
                    <Form onSubmit={(e) => this.onSignIn(e)}>
                        <Form.Field>
                            <label>Email</label>
                            <input
                                placeholder='johndoe@mail.com'
                                name='email'
                                type="email"
                                onChange={this.handleChange}
                                required={true} />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder='Password'
                                onChange={this.handleChange}
                                required={true} />
                        </Form.Field>
                        <Button
                            color='blue'
                            floated='right'
                            style={styles.submitStyle}
                        >
                            <Icon name='sign in' /> Sign In
                    </Button>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signInUser: (data) => {
        dispatch(signInUser(data))
    }
})

export default connect(null, mapDispatchToProps)(SignIn)