import React from 'react'
import { Container, Header, Icon, Breadcrumb } from 'semantic-ui-react'

import AddHoaxForm from './AddHoaxForm'

import { connect } from 'react-redux'

import { getHoaxList } from '../../actions';

import HoaxItem from './HoaxItem'

import { Link } from 'react-router-dom'

import {
    Redirect
} from "react-router-dom";

const styles = {
    top: {
        marginTop: 100,
    }
}

class HoaxList extends React.Component {

    componentWillMount() {
        this.props.getHoaxList()
    }

    renderHoaxItem() {
        if (this.props.hoaxList) {
            return (
                this.props.hoaxList.map((item, index) => {
                    return (
                        <HoaxItem key={index} item={item} />
                    )
                })
            )
        }
    }

    render() {
        let data = localStorage.getItem('token')
        if (data || !this.props.signOut) {
            return (
                <div style={styles.top}>
                    <Breadcrumb size='huge'>
                        <Breadcrumb.Section><Link to="/hoaxlist">Hoax News</Link></Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right chevron' />
                    </Breadcrumb>
                    <Header as='h1' icon textAlign='center'>
                        <Icon name='newspaper' />
                        <Header.Content>
                            Hoax News
                        </Header.Content>
                    </Header>
                    <br />
                    <br />
                    <AddHoaxForm />
                    <hr />
                    <Container text>
                        {this.renderHoaxItem()}
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
    hoaxList: state.postHoaxReducer.hoaxList,
    loadingGetHoaxList: state.postHoaxReducer.loadingGetHoaxList,
    signOut: state.authReducer.signOut
})

const mapDispatchToProps = dispatch => ({
    getHoaxList: () => {
        dispatch(getHoaxList())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HoaxList)