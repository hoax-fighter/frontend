import React from 'react'

import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

class Register extends React.Component {
    render() {
        return (
            <Modal trigger={<Button>Register</Button>} closeIcon='close' closeOnDimmerClick={false} size='small'>
                <Header icon='user plus' content='Register' />
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>Name</label>
                            <input placeholder='John Doe' required />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input placeholder='johndoe@mail.com' required />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type="password" placeholder='johndoe@mail.com' required />
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button type="submit" color='green'>
                        <Icon name='user plus' /> Register
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default Register