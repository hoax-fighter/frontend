import React from 'react'

import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

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
        console.log('cons')
        super(props)
        this.state = {
            form: {
                user: '',
                title: '',
                content: ''
            },
            modalOpen: false
        }
    }

    handleOpen = (e) => this.setState({
        modalOpen: true,
    })

    handleClose = (e) => this.setState({
        modalOpen: false,
    })

    componentWillMount() {
        console.log('will')
    }

    componentDidMount() {
        console.log('did')
    }

    render() {
        // console.log(this.props.hoaxId)
        // console.log(this.props.hoaxData)
        console.log('render')
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
                                required={true} />
                        </Form.Field>
                        <Form.TextArea
                            label='Content'
                            placeholder='Hoax Fighter is not real'
                            required={true}
                            type='text'
                            name='content'
                            rows='4' />
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

export default EditHoax