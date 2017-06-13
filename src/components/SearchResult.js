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

const renderDiv = (props) => {
    if(props.hoaxResult.sources.length > 0) {
        return <Statistic.Label>{ props.hoaxResult.sources[0].negation.isInputNegated ? 'Kata negatif ditemukan. Untuk hasil lebih baik, sebaiknya masukan kalimat positif.' : '' }</Statistic.Label>
    } else {
        return <div></div>
    }
}

const renderRef = (props) => {
    if(props.hoaxResult.sources.length > 0) {
        return <h1 style={styles.center}>Reference</h1>
    } else {
        return <div></div>
    }
}

const SearchResult = (props) => {

    console.log('msk props', props)

    const { sources, message } = props.hoaxResult
    // const { conclusion } = props.hoaxResult.result.conclusion
    const { remark } = props.hoaxResult.result.remark
    // cek negasi -> props.hoaxResult.sources[0].isInputNegated
    // console.log(props.hoaxResult.sources[0].negation)
    return (
        <Container text style={styles.top}>
            { /* <h1 style={styles.center}>Hasil</h1> */}
            <Statistic>
                <Statistic.Value>
                    <Icon name='check' />
                    {props.hoaxResult.result.conclusion}
                </Statistic.Value>
                <Statistic.Label>{props.hoaxResult.result.remark}</Statistic.Label>
                {renderDiv(props)}
            </Statistic>
            {renderRef(props)}
            {sources.map((item, index) => {
                return (
                    <ReferenceItem data={sources} message={props.hoaxResult.result.remark} item={item} index={index} key={index} />
                )
            })}

        </Container>
    )


}

export default SearchResult