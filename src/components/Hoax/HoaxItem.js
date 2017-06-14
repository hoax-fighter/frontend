import React from 'react'
import { Button, Icon, Card } from 'semantic-ui-react'

import { connect } from 'react-redux'
import {
    deleteHoax
} from '../../actions'

import { Link } from 'react-router-dom'

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
        this.handleChange = this.handleChange.bind(this)
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

    renderButton() {
        const { _id, user } = this.props.item
        let userId = localStorage.getItem('user')
        if (userId === user._id) {
            return (
                <div>
                    <Link to={`/detailhoax/${_id}`}>
                        <Button color='violet'>
                            <Icon name='search' />Detail
                        </Button>
                    </Link>
                    <Link to={`/edithoax/${_id}`}>
                        <Button color='orange'>
                            <Icon name='edit' />Edit
                        </Button>
                    </Link>
                    <Button onClick={() => this.props.deleteHoax(_id)} color='red'><Icon name='delete' />Delete</Button>
                </div>
            )
        } else {
            return (
                <Link to={`/detailhoax/${_id}`}>
                    <Button
                        color='violet'><Icon name='search' />
                        Detail
                        </Button>
                </Link>
            )
        }
    }

    render() {
        const { title, content, user, createdAt } = this.props.item
        let newContent = ''
        if (content) {
            newContent = content.split('.')
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
                            <br />
                            {this.renderButton()}
                        </Card.Content>
                    </Card>
                </div>

            )
        } else {
            return (
                <div>
                </div>
            )
        }


    }
}

const mapDispatchToProps = dispatch => ({
    deleteHoax: (id) => {
        dispatch(deleteHoax(id))
    }
})

export default connect(null, mapDispatchToProps)(HoaxItem)