import React from 'react'

import { Button, Header, Icon, Modal, Card, Container } from 'semantic-ui-react'

import {
    connect
} from 'react-redux'

import {
    getDataHoax,
    addVoteHoax,
    addVoteNonHoax
} from '../../actions'

const styles = {
    top: {
        marginTop: 100,
    }
}

class DetailHoax extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            name: '',
            value: '',
            postId: ''
        }
        this.voteHoax = this.voteHoax.bind(this);
        this.nonVoteHoax = this.nonVoteHoax.bind(this)
    }

    componentDidMount() {
        this.props.getDataHoax(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            userId: nextProps.hoaxData.user._id,
            name: nextProps.hoaxData.user.name,
            postId: nextProps.hoaxData._id
        })
    }

    voteHoax() {
        this.props.addVoteHoax(this.state)
    }

    nonVoteHoax() {
        this.props.addVoteNonHoax(this.state)
    }

    render() {
        // console.log(this.props.hoaxData)
        let { title, content, createdAt, hoaxVoteCount, nonHoaxVoteCount } = this.props.hoaxData
        // let username = this.props.hoaxData.user.name
        // let userId = this.props.hoaxData.user._id
        return (
            <Container text style={styles.top}>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>
                            {title}
                        </Card.Header>
                        <Card.Description>
                            {content}
                        </Card.Description>
                        <hr />
                        <Card.Meta>Posted By : {this.state.name}</Card.Meta>
                        <Card.Meta>{createdAt}</Card.Meta>
                        <br />
                        <Button
                            color='red'
                            content='Hoax'
                            icon='heart'
                            label={{ basic: true, color: 'red', pointing: 'left', content: hoaxVoteCount }}
                            onClick={this.voteHoax}
                        />
                        <Button
                            color='red'
                            content='Non Hoax'
                            icon='heart'
                            label={{ basic: true, color: 'red', pointing: 'left', content: nonHoaxVoteCount }}
                            onClick={this.nonVoteHoax}
                        />
                    </Card.Content>
                </Card>
            </Container>
        )
    }

}

const mapStateToProps = state => ({
    hoaxData: state.postHoaxReducer.hoaxData
})

const mapDispatchToProps = dispatch => ({
    getDataHoax: (id) => {
        dispatch(getDataHoax(id))
    },
    addVoteHoax: (data) => {
        dispatch(addVoteHoax(data))
    },
    addVoteNonHoax: (data) => {
        dispatch(addVoteNonHoax(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailHoax)