import React from 'react'

import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

class SignIn extends React.Component {
    render() {
        return (
            <Modal trigger={<Button>Sign In</Button>} closeIcon='close' closeOnDimmerClick={false} size='small'>
                <Header icon='sign in' content='Sign In' />
                <Modal.Content>
                    <Form>
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
                        <Icon name='sign in' /> Sign In
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default SignIn