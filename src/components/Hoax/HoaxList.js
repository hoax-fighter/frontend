import React from 'react'
import { Button, Icon, Table } from 'semantic-ui-react'

import AddHoaxForm from './AddHoaxForm'

import { connect } from 'react-redux'

import { getHoaxList } from '../../actions';

const styles = {
    top: {
        marginTop: 100,
    }
}

class HoaxList extends React.Component {

    componentDidMount() {
        this.props.getHoaxList()
    }

    render() {
        console.log('props list', this.props.hoaxList)
        return (
            <div style={styles.top}>
                <AddHoaxForm />
                <hr />
                <Table striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>No</Table.HeaderCell>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>Created By</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row >
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Ada yang baru di matahari</Table.Cell>
                            <Table.Cell>Mona</Table.Cell>
                            <Table.Cell>
                                <Button>Edit</Button>
                                <Button>Hapus</Button>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
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