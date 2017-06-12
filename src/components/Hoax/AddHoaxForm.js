import React from 'react'

import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

import { connect } from 'react-redux'

import firebase from 'firebase'

import {
    insertHoax
} from '../../actions'

const styles = {
    buttonStyle: {
        backgroundColor: '#F5F5F5',
        color: '#212121'
    },
    submitStyle: {
        marginBottom: 20
    }
}

class AddHoaxForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            form: {
                user: '',
                title: '',
                content: ''
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

    onUserSubmit(e) {
        e.preventDefault();
        console.log(this.state.form)
        this.props.insertHoax(this.state.form)

    }

    handleOpen = (e) => this.setState({
        modalOpen: true,
    })

    handleClose = () => this.setState({
        modalOpen: false,
    })

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {

            if (user) {
                let newState = {
                    ...this.state.form,
                    user: user.uid
                }
                this.setState({
                    form: newState
                })
            }
        })
    }


    render() {
        console.log(this.state.form)
        return (
            <Modal
                trigger={<Button
                    onClick={this.handleOpen}
                    style={styles.buttonStyle}>
                    <Icon name='add square' /> Insert Hoax News</Button>}
                closeIcon='close'
                closeOnDimmerClick={false}
                size='small'
                open={this.state.modalOpen}
                onClose={this.handleClose}>
                <Header icon='sign in' content='Add Hoax News' />
                <Modal.Content>
                    <Form onSubmit={e => this.onUserSubmit(e)}>
                        <Form.Field>
                            <label>Title</label>
                            <input
                                placeholder='Hoax Fighter'
                                name='title'
                                type='text'
                                onChange={this.handleChange}
                                required={true} />
                        </Form.Field>
                        <Form.TextArea
                            label='Content'
                            placeholder='Hoax Fighter is not real'
                            onChange={this.handleChange}
                            required={true}
                            type='text'
                            name='content' />
                        <Button
                            color='blue'
                            floated='right'
                            style={styles.submitStyle}
                        >
                            <Icon name='sign in' /> Insert
                    </Button>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    insertHoax: (data) => {
        dispatch(insertHoax(data))
    }
})

export default connect(null, mapDispatchToProps)(AddHoaxForm)