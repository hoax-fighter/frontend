import React from 'react'

import { Button, Header, Icon, Modal, Card } from 'semantic-ui-react'

const styles = {
    buttonStyle: {
        backgroundColor: '#F5F5F5',
        color: '#212121'
    },
    submitStyle: {
        marginBottom: 20
    }
}

class DetailHoax extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false
        }
    }

    handleOpen = (e) => this.setState({
        modalOpen: true,
    })

    handleClose = (e) => this.setState({
        modalOpen: false,
    })

    renderButton() {
        const { hoaxVoteCount, nonHoaxVoteCount } = this.props.data
        let userId = localStorage.getItem('user')
        if (userId) {
            return (
                <div>
                    <br />
                    <Button
                        color='red'
                        content='Hoax'
                        icon='heart'
                        label={{ basic: true, color: 'red', pointing: 'left', content: hoaxVoteCount }}
                    />
                    <Button
                        color='red'
                        content='Non Hoax'
                        icon='heart'
                        label={{ basic: true, color: 'red', pointing: 'left', content: nonHoaxVoteCount }}
                    />
                </div>
            )
        }
    }

    render() {
        // console.log('detail', this.props.data)
        const { title, content, createdAt, hoaxVoteCount, nonHoaxVoteCount, user } = this.props.data
        return (
            <Modal
                trigger={<Button
                    onClick={this.handleOpen}
                    style={styles.buttonStyle}>
                    <Icon name='add square' /> Detail Hoax</Button>}
                closeIcon='close'
                closeOnDimmerClick={false}
                size='small'
                open={this.state.modalOpen}
                onClose={this.handleClose}>
                <Header icon='sign in' content='Detail Hoax' />
                <Modal.Content>
                    <Card fluid>
                        <Card.Content>
                            <Card.Header>
                                {title}
                            </Card.Header>
                            <Card.Description>
                                {content}
                            </Card.Description>
                            <hr />
                            <Card.Meta>Posted By : {user.name}</Card.Meta>
                            <Card.Meta>{createdAt}</Card.Meta>
                            {this.renderButton()}
                        </Card.Content>
                    </Card>
                </Modal.Content>
            </Modal>
        )

    }

}

export default DetailHoax