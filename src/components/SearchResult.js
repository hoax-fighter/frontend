import React from 'react'

import ReferenceItem from './ReferenceItem'

import {
    Container,
    Statistic,
    Icon
} from 'semantic-ui-react'

class SearchResult extends React.Component {

    render() {
        return (
            <Container text>
                <h1>Result</h1>
                <Statistic>
                    <Statistic.Value>
                        <Icon name='check' />
                        Berita Ini Hoax
                    </Statistic.Value>
                    <Statistic.Label></Statistic.Label>
                </Statistic>
                <ReferenceItem />
            </Container>
        )
    }

}

export default SearchResult