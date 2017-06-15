import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Item,
    Icon,
    Button,
} from 'semantic-ui-react'

import { downvoteNews, upvoteNews } from '../actions';

const styles = {

    contentStyle: {
        paddingLeft: 20,
    },
    container: {
        marginBottom: 50,
    },
}

class ReferenceItem extends Component {

    onClickUpVote(data, idx) {
        if(localStorage.getItem('user')) {
            let newData = {
            userId: localStorage.getItem('user'),
            value: -1,
            name: data[idx].name,
            description: data[idx].description,
            url: data[idx].url,
        }
            console.log('upvote');
            console.log(newData);
            this.props.upvoteNews(newData, idx);
        } else {
            alert('You must sign in first to vote');
        }
    }

onClickDownVote(data, idx) {
    if(localStorage.getItem('user')) {
        let newData = {
        userId: localStorage.getItem('user'),
        value: 1,
        name: data[idx].name,
        description: data[idx].description,
        url: data[idx].url,
        }
        console.log('downvote');
        this.props.downvoteNews(newData, idx);
    } else {
        alert('You must sign in first to vote');
    }
}

showUpvoteCount(idx) {

    if (this.props.hoaxResult.sources[idx].feedback) {
        return this.props.sources[idx].feedback.nonHoaxVoteCount
    } else {
        return 0;
    }
}

showDownvoteCount(idx) {
    if (this.props.sources[idx].feedback) {
        return this.props.sources[idx].feedback.hoaxVoteCount
    } else {
        return 0;
    }
}

    render() {
        if (this.props.message === 'Hasil pencarian mengindikasikan terverifikasi sebagai Hoax') {
      
      return (
          <Item.Group style={styles.container}>
            <Item>
                <Icon name='newspaper' size='huge' />
                <Item.Content style={styles.contentStyle, styles.container}>
                    <Item.Header style={{ color: 'blue' }} as="a"><a rel="noopener noreferrer" target="_blank" href={this.props.item.url}>{this.props.item.name}</a></Item.Header>
                    <Item.Meta style={{ color: '#1EE494' }}>Sumber terpercaya</Item.Meta>
                    <Item.Description>
                        {this.props.item.description}
                    </Item.Description>
                </Item.Content>
            </Item>
        </Item.Group>
      )
    } else {
    return (
        <Item.Group style={styles.container}>
            <Item>
                <div>
                    <Icon name='newspaper' size='huge' />
                </div>
                <Item.Content style={styles.contentStyle}>

                    <Item.Header style={{ color: 'blue' }} as="a"><a rel="noopener noreferrer" target="_blank" href={this.props.item.bingUrl ? this.props.item.bingUrl : this.props.item.url}>{this.props.item.provider}</a></Item.Header>
                    { this.props.item.isUrlReputable ? <Item.Meta style={{ color: '#1EE494' }}>Sumber terpercaya</Item.Meta> : <Item.Meta style={{ color: '#BE3144' }}>Sumber tak terpercaya</Item.Meta> }
                    <Item.Description>
                        {this.props.item.description}
                    </Item.Description>
                </Item.Content>
                <div style={{margin: 'auto'}}>
                    <Button onClick={() => this.onClickUpVote(this.props.data, this.props.index)} size="mini" style={{margin: 10}} positive label={this.showUpvoteCount(this.props.index)} content="Fakta" icon='thumbs up' labelPosition='right' />
                    <Button onClick={() => this.onClickDownVote(this.props.data, this.props.index)} size="mini" style={{margin: 10}} negative label={this.showDownvoteCount(this.props.index)} content="Hoax" icon='thumbs down' labelPosition='right' />
                </div>
            </Item>
        </Item.Group>
    )
    }
    }

}

const mapStateToProps = state => ({
  test: state.hoaxCheckerReducer.test,
  hoaxResult: state.hoaxCheckerReducer.tbh,
  sources: state.hoaxCheckerReducer.tbh.sources,
})

const mapDispatchToProps = dispatch => ({
  upvoteNews: (data, idx) => dispatch(upvoteNews(data, idx)),
  downvoteNews: (data, idx) => dispatch(downvoteNews(data, idx)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ReferenceItem);
