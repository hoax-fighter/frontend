import React from 'react'

import ReferenceItem from './ReferenceItem'

import {
    Container,
    Statistic,
    Icon
} from 'semantic-ui-react'

const SearchResult = (props) => {

    console.log('msk props', props)

    const { conclusion, sources } = props.hoaxResult

    return (
        <Container text>
            <h1>Result</h1>
            <Statistic>
                <Statistic.Value>
                    <Icon name='check' />
                    {conclusion}
                </Statistic.Value>
                <Statistic.Label></Statistic.Label>
            </Statistic>
            <h1>Reference</h1>
            {sources.map((item, index) => {
                return (
                    <ReferenceItem item={item} key={index} />
                )
            })}

        </Container>
    )


}

export default SearchResult