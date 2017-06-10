import React from 'react'

import {
    Item,
    Icon,
} from 'semantic-ui-react'

const ReferenceItem = (props) => {

    const { description, provider, url } = props.item

    return (
        <Item.Group>
            <Item>
                <Icon name='newspaper' size='huge' />
                <Item.Content style={styles.contentStyle}>
                    <Item.Header as='a' href={url}>{provider}</Item.Header>
                    <Item.Meta>Description</Item.Meta>
                    <Item.Description>
                        {description}
                    </Item.Description>
                </Item.Content>
            </Item>
        </Item.Group>
    )
}

const styles = {
    contentStyle: {
        paddingLeft: 20
    }
}

export default ReferenceItem