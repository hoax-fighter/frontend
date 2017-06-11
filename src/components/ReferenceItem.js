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

  const { description, provider, url, bingUrl } = props.item

  return (
        <Item.Group>
            <Item>
                <Icon name='newspaper' size='huge' />
                <Item.Content style={styles.contentStyle}>
                    <Item.Header style={{ color: 'blue' }} as="a"><a rel="noopener noreferrer" target="_blank" href={bingUrl ? bingUrl : url}>{provider}</a></Item.Header>
                    <Item.Meta>Description</Item.Meta>
                    <Item.Description>
                        {description}
                    </Item.Description>
                </Item.Content>
            </Item>
        </Item.Group>
    )
}



export default ReferenceItem
