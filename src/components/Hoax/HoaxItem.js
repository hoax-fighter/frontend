import React from 'react'
import { Button, Icon, Card } from 'semantic-ui-react'

import { connect } from 'react-redux'
import {
    deleteHoax
} from '../../actions'

import DetailHoax from './DetailHoax'
import EditHoax from './EditHoax'

const styles = {
    cardStyle: {
        marginTop: 30,
        marginBottom: 30
    }
}

class HoaxItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            form: {
                user: '',
                title: '',
                content: '',
                postId: ''
            }
        }
    }

    renderButton() {
        const { _id, title, content } = this.props.item
        let userId = localStorage.getItem('user')
        if (userId) {
            return (
                <div>
                    <DetailHoax data={this.props.item} />
                    <EditHoax />
                    <Button onClick={() => this.props.deleteHoax(_id)} basic color='red'>Delete</Button>
                </div>
            )
        } else {
            return (
                <DetailHoax data={this.props.item} />
            )
        }
    }

    render() {
        const { title, content, user, createdAt } = this.props.item
        let newContent = content.split('.')
        return (
            <div style={styles.cardStyle}>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>
                            {title}
                        </Card.Header>
                        <Card.Description>
                            {newContent[0]}
                        </Card.Description>
                        <hr />
                        <Card.Meta>Posted By : {user.name}</Card.Meta>
                        <Card.Meta>{createdAt}</Card.Meta>
                        {this.renderButton()}
                    </Card.Content>
                </Card>
            </div>

        )

    }

}

const mapDispatchToProps = dispatch => ({
    deleteHoax: (id) => {
        dispatch(deleteHoax(id))
    }
})

export default connect(null, mapDispatchToProps)(HoaxItem)