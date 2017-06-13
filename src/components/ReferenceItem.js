import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Item,
    Icon,
    Button,
    Label,
} from 'semantic-ui-react'

import { upvoteNews, downvoteNews } from '../actions';

const styles = {
  contentStyle: {
    paddingLeft: 20,
  },
  container: {
    marginBottom: 50,
  },
}

class ReferenceItem extends Component {
    constructor(props) {
    super(props)
  }


//   const { description, provider, url, bingUrl, isUrlReputable, source } = props.item

onClickUpVote(data, idx) {
    console.log(data)
    let newData = {
        userId: window.localStorage.getItem('user'),
        value: 1,
        name: data[idx].name,
        description: data[idx].description,
        url: data[idx].url,
    }
    console.log('upvote');
    console.log(newData);
    this.props.upvoteNews(newData);
}

onClickDownVote(data, idx) {
    let newData = {
        userId: window.localStorage.getItem('user'),
        value: -1,
        name: data[idx].name,
        description: data[idx].description,
        url: data[idx].url,
    }
    console.log('downvote');
    console.log(newData);
    this.props.downvoteNews(newData);
}

showUpVoteCount() {

}

showDownVoteCount() {
    
}

    render() {
        // console.log(this.props.data)
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
                    <Button onClick={() => this.onClickUpVote(this.props.data, this.props.index)} size="mini" style={{margin: 10}} positive label={0} content="Fakta" icon='thumbs up' labelPosition='right' />
                    <Button onClick={() => this.onClickDownVote(this.props.data, this.props.index)} size="mini" style={{margin: 10}} negative label={0} content="Hoax" icon='thumbs down' labelPosition='right' />
                </div>
            </Item>
        </Item.Group>
    )
    }
    }

}

const mapDispatchToProps = dispatch => ({
  upvoteNews: data => dispatch(upvoteNews(data)),
  downvoteNews: data => dispatch(downvoteNews(data)),
})


export default connect(null, mapDispatchToProps)(ReferenceItem);
