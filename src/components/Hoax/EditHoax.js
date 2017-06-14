import React from 'react'

import { Button, Header, Icon, Form, Container, Breadcrumb } from 'semantic-ui-react'

import { connect } from 'react-redux'
import {
    getDataHoax,
    editHoax
} from '../../actions'

import {
    Redirect, Link
} from "react-router-dom";

const styles = {
    top: {
        marginTop: 100,
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
            statusEdit: false
        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        let { name, value } = e.target
        let { form } = this.state
        let tmpForm = form

        tmpForm[name] = value

        this.setState({
            form: tmpForm
        })

    }

    updateHoax() {
        this.setState({
            statusEdit: true
        })

        let { form } = this.state
        let newHoax = {
            ...form
        }
        this.props.editHoax(newHoax)
    }

    render() {
        // console.log('state', this.state.form)
        let data = localStorage.getItem('token')
        if (data || !this.props.signOut) {
            if (this.state.statusEdit) {
                return (
                    <Redirect to={'/hoaxlist'} />
                )
            } else {
                return (
                    <div style={styles.top}>
                        <Breadcrumb size='huge'>
                            <Breadcrumb.Section><Link to="/hoaxlist">Hoax News</Link></Breadcrumb.Section>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Breadcrumb.Section>Edit</Breadcrumb.Section>
                            <Breadcrumb.Divider icon='right chevron' />
                        </Breadcrumb>
                        <Container text>
                            <Header as='h1' icon textAlign='center'>
                                <Icon name='edit' />
                                <Header.Content>
                                    Edit Hoax News
                        </Header.Content>
                            </Header>
                            <br />
                            <Form size='large'>
                                <input
                                    type='hidden'
                                    name="postId"
                                    value={this.state.form.postId}
                                    onChange={this.handleChange} />
                                <Form.Field>
                                    <label>Title</label>
                                    <input
                                        placeholder='Hoax Fighter'
                                        type='text'
                                        name="title"
                                        value={this.state.form.title}
                                        onChange={this.handleChange}
                                        required={true} />
                                </Form.Field>
                                <Form.TextArea
                                    label='content'
                                    placeholder='Hoax Fighter is not real'
                                    onChange={this.handleChange}
                                    required={true}
                                    type='text'
                                    name='content'
                                    value={this.state.form.content}
                                    rows='4' />
                                <Button
                                    color='blue'
                                    onClick={() => this.updateHoax()}><Icon name='save' /> Submit</Button>
                            </Form>
                        </Container>
                    </div>

                )

            }
        } else {
            return (
                <Redirect to={'/'} />
            )
        }

    }

    componentDidMount() {
        this.props.getDataHoax(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps) {
        console.log('will')
        console.log(nextProps.hoaxData)

        const { content, title, _id } = nextProps.hoaxData
        let newState = {
            user: localStorage.getItem('user'),
            title,
            content,
            postId: _id
        }

        // console.log('new', newState)

        this.setState({
            form: newState
        })
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
    editHoax: (data) => {
        dispatch(editHoax(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditHoax)