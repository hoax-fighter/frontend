import React from 'react'
import { Container } from 'semantic-ui-react'

import AddHoaxForm from './AddHoaxForm'

import { connect } from 'react-redux'

import { getHoaxList } from '../../actions';

import HoaxItem from './HoaxItem'

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
        console.log('props list', this.props.hoaxList)
        let data = Array.isArray(this.props.hoaxList);
        console.log(data)
        return (
            <div style={styles.top}>
                <AddHoaxForm />
                <hr />
                <Container text>
                    {this.renderHoaxItem()}
                </Container>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    hoaxList: state.postHoaxReducer.hoaxList,
    loadingGetHoaxList: state.postHoaxReducer.loadingGetHoaxList,
})

const mapDispatchToProps = dispatch => ({
    getHoaxList: () => {
        dispatch(getHoaxList())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HoaxList)