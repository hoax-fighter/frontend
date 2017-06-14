import React from 'react'

import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

import { registerUser } from '../actions'

import { connect } from 'react-redux'

const styles = {
    submitStyle: {
        marginBottom: 20
    }
}



class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            form: {
                name: '',
                email: '',
                password: ''
            },
            modalOpen: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.onRegister = this.onRegister.bind(this)
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

    onRegister(e) {
        e.preventDefault();
        this.handleClose()
        this.props.registerUser(this.state.form)
    }

    handleOpen = (e) => this.setState({
        modalOpen: true,
    })

    handleClose = (e) => this.setState({
        modalOpen: false,
    })

    render() {
        return (
            <Modal
                trigger={<Button
                    onClick={this.handleOpen}
                    color='orange'>
                    <Icon name='user plus' /> Register</Button>}
                closeIcon='close'
                closeOnDimmerClick={false}
                size='small'
                open={this.state.modalOpen}
                onClose={this.handleClose}>
                <Header icon='user plus' content='Register' />
                <Modal.Content>
                    <Form onSubmit={(e) => this.onRegister(e)} size='large'>
                        <Form.Field>
                            <label>Name</label>
                            <input
                                placeholder='John Doe'
                                name='name'
                                type="text"
                                onChange={this.handleChange}
                                required={true} />
                        </Form.Field>
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
                            <label>Password (Min 6 characters)</label>
                            <input
                                name="password"
                                type="password"
                                placeholder='Password'
                                onChange={this.handleChange}
                                required={true} />
                        </Form.Field>
                        <Button
                            color='green'
                            floated='right'
                            style={styles.submitStyle}>
                            <Icon name='user plus' /> Register
                    </Button>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    registerUser: (data) => {
        dispatch(registerUser(data))
    }
})


export default connect(null, mapDispatchToProps)(Register)