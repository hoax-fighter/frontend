import React from 'react'

import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

import { connect } from 'react-redux'

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
            ...form,
            user: localStorage.getItem('user')
        }

        tmpForm[name] = value

        console.log(tmpForm)

        this.setState({
            form: tmpForm
        })
    }

    onUserSubmit(e) {
        e.preventDefault();
        this.handleClose()
        this.props.insertHoax(this.state.form)
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
                    color='blue'>
                    <Icon name='add square' /> Add Hoax News</Button>}
                closeIcon='close'
                closeOnDimmerClick={false}
                size='small'
                open={this.state.modalOpen}
                onClose={this.handleClose}>
                <Header icon='plus square' content='Add Hoax News' />
                <Modal.Content>
                    <Form onSubmit={(e) => this.onUserSubmit(e)} size='large'>
                        <Form.Field>
                            <label>Title</label>
                            <input
                                placeholder='Insert title here'
                                name='title'
                                type='text'
                                onChange={this.handleChange}
                                required={true} />
                        </Form.Field>
                        <Form.TextArea
                            label='Content'
                            placeholder='Insert content here'
                            onChange={this.handleChange}
                            required={true}
                            type='text'
                            name='content'
                            rows='4' />
                        <Button
                            color='blue'
                            floated='right'
                            style={styles.submitStyle}
                        >
                            <Icon name='save' /> Submit
                    </Button>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}


const mapStateToProps = state => ({
    userId: state.authReducer.userId
})

const mapDispatchToProps = dispatch => ({
    insertHoax: (data) => {
        dispatch(insertHoax(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddHoaxForm)