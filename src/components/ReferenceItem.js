import React from 'react'

import {
    Item,
    Icon,
} from 'semantic-ui-react'

const styles = {
  contentStyle: {
    paddingLeft: 20,
  },
}

const ReferenceItem = (props) => {

  const { description, provider, url, bingUrl, isUrlReputable, source } = props.item

  console.log(props)

  if (props.message === 'found in turnbackhoax.id') {
      return (
          <Item.Group>
            <Item>
                <Icon name='newspaper' size='huge' />
                <Item.Content style={styles.contentStyle}>
                    <Item.Header style={{ color: 'blue' }} as="a"><a rel="noopener noreferrer" target="_blank" href={source.url}>{source.title}</a></Item.Header>
                    <Item.Meta style={{ color: '#1EE494' }}>Sumber terpercaya</Item.Meta>
                </Item.Content>
            </Item>
        </Item.Group>
      )
    } else {
    return (
        <Item.Group>
            <Item>
                <Icon name='newspaper' size='huge' />
                <Item.Content style={styles.contentStyle}>
                    <Item.Header style={{ color: 'blue' }} as="a"><a rel="noopener noreferrer" target="_blank" href={bingUrl ? bingUrl : url}>{provider}</a></Item.Header>
                    { isUrlReputable ? <Item.Meta style={{ color: '#1EE494' }}>Sumber terpercaya</Item.Meta> : <Item.Meta style={{ color: '#BE3144' }}>Sumber tak terpercaya</Item.Meta> }
                    <Item.Description>
                        {description}
                    </Item.Description>
                </Item.Content>
            </Item>
        </Item.Group>
    )
    }

  
}



export default ReferenceItem
