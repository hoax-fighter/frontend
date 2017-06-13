import React from 'react'

import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

import { connect } from 'react-redux'
import {
    getDataHoax
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



class EditHoax extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            form: {
                user: '',
                title: '',
                content: '',
                postId: ''
            },
            modalOpen: false
        }
        // this.handleChange = this.props.handleChange.bind(this);

    }

    handleOpen = (e) => this.setState({
        modalOpen: true,
    })

    handleClose = (e) => this.setState({
        modalOpen: false,
    })

    render() {
        // console.log('edit hoax', this.props.data)
        this.props.getDataHoax(this.props.data._id)
        return (
            <Modal
                trigger={<Button
                    onClick={this.handleOpen}
                    style={styles.buttonStyle}>
                    <Icon name='add square' /> Edit Hoax News</Button>}
                closeIcon='close'
                closeOnDimmerClick={false}
                size='small'
                open={this.state.modalOpen}
                onClose={this.handleClose}>
                <Header icon='sign in' content='Add Hoax News' />
                <Modal.Content>
                    <Form onSubmit={(e) => this.onUserSubmit(e)}>
                        <Form.Field>
                            <label>Title</label>
                            <input
                                placeholder='Hoax Fighter'
                                name='title'
                                type='text'
                                required={true}
                                value={this.state.form.title} />
                        </Form.Field>
                        <Form.TextArea
                            label='Content'
                            placeholder='Hoax Fighter is not real'
                            required={true}
                            type='text'
                            name='content'
                            rows='4'
                            value={this.state.form.content} />
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

    componentWillReceiveProps(nextProps) {
        console.log('next', nextProps)
    }

}

const mapStateToProps = state => ({
    hoaxData: state.postHoaxReducer.hoaxData
})

const mapDispatchToProps = dispatch => ({
    getDataHoax: (id) => {
        dispatch(getDataHoax(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditHoax)