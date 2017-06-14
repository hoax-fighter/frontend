import React from 'react'

import { Button, Header, Icon, Card, Container, Breadcrumb } from 'semantic-ui-react'

import {
    connect
} from 'react-redux'

import {
    getDataHoax,
    addVoteHoax,
    addVoteNonHoax
} from '../../actions'

import {
    Redirect, Link
} from "react-router-dom";

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
        this.resetHoax = this.resetHoax.bind(this)
    }

    componentDidMount() {
        this.props.getDataHoax(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            userId: localStorage.getItem('user'),
            name: nextProps.hoaxData.user.name,
            postId: nextProps.hoaxData._id
        })
    }

    voteHoax() {
        var user = localStorage.getItem('user')
        var votes = this.props.hoaxData.votes
        var res = votes.filter((item) => {
            return item.user === user
        })
        if (res.length === 0) {
            this.props.addVoteHoax(this.state)
        } else {
            if (res[0].value === 0) {
                this.props.addVoteHoax(this.state)
            } else {
                alert('Anda Sudah Vote')
            }
        }
    }

    nonVoteHoax() {
        var user = localStorage.getItem('user')
        var votes = this.props.hoaxData.votes
        var res = votes.filter((item) => {
            return item.user === user
        })
        if (res.length === 0) {
            this.props.addVoteNonHoax(this.state)
        } else {
            if (res[0].value === 0) {
                this.props.addVoteNonHoax(this.state)
            } else {
                alert('Anda Sudah Vote')
            }
        }


    }

    resetHoax() {
        var user = localStorage.getItem('user')
        var votes = this.props.hoaxData.votes
        var res = votes.filter((item) => {
            return item.user === user
        })
        if (res.length > 0) {
            if (res[0].value === 1) {
                this.props.addVoteNonHoax(this.state)
            } else if (res[0].value === -1) {
                this.props.addVoteHoax(this.state)
            } else {
                alert('Anda Belum Vote')
            }
        } else {
            alert('Anda Belum Vote')
        }

    }

    render() {
        let data = localStorage.getItem('token')
        let { title, content, createdAt, hoaxVoteCount, nonHoaxVoteCount } = this.props.hoaxData
        if (data || !this.props.signOut) {
            return (
                <div style={styles.top}>
                    <Breadcrumb size='huge'>
                        <Breadcrumb.Section><Link to="/hoaxlist">Hoax News</Link></Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right chevron' />
                        <Breadcrumb.Section>Detail</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right chevron' />
                    </Breadcrumb>
                    <Container text>
                        <Header as='h1' icon textAlign='center'>
                            <Icon name='info circle' />
                            <Header.Content>
                                Hoax News Detail
                        </Header.Content>
                        </Header>
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
                                    icon='thumbs down'
                                    label={{ basic: true, color: 'red', pointing: 'left', content: hoaxVoteCount }}
                                    onClick={this.voteHoax}
                                />
                                <Button
                                    color='blue'
                                    content='Fact'
                                    icon='thumbs up'
                                    label={{ basic: true, color: 'blue', pointing: 'left', content: nonHoaxVoteCount }}
                                    onClick={this.nonVoteHoax}
                                />
                                <Button
                                    color='violet'
                                    content='Reset My Vote'
                                    icon='history'
                                    onClick={this.resetHoax}
                                />
                            </Card.Content>
                        </Card>
                    </Container>
                </div>
            )
        } else {
            return (
                <Redirect to={'/'} />
            )
        }

    }

}

const mapStateToProps = state => ({
    hoaxData: state.postHoaxReducer.hoaxData,
    signOut: state.authReducer.signOut
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