import React from 'react'

import ReferenceItem from './ReferenceItem'

import {
    Container,
    Statistic,
    Icon
} from 'semantic-ui-react'

const styles = {
    center: {
        textAlign: 'center',
    },
    top: {
        marginTop: 50,
    },
}

const SearchResult = (props) => {

    console.log('msk props', props)

    const { conclusion, sources, message } = props.hoaxResult


    return (
        <Container text style={styles.top}>
            { /* <h1 style={styles.center}>Hasil</h1> */ }
            <Statistic>
                <Statistic.Value>
                    <Icon name='check' />
                    {conclusion}
                </Statistic.Value>
                <Statistic.Label></Statistic.Label>
            </Statistic>
            <h1 style={styles.center}>Reference</h1>
            {sources.map((item, index) => {
                return (
                    <ReferenceItem message={message} item={item} key={index} />
                )
            })}

        </Container>
    )


}

export default SearchResult