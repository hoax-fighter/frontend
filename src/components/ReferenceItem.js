import React from 'react'

import {
    Item,
    Icon,
} from 'semantic-ui-react'

const ReferenceItem = () => {
    return (
        <Item.Group>
            <Item>
                <Icon name='newspaper' size='huge' />
                <Item.Content style={styles.contentStyle}>
                    <Item.Header as='a' href="https://www.bing.com/cr?IG=5E5E568648ED4F90A14ACC900C6D93BF&CID=078B649DCC076792268C6E00CDE26687&rd=1&h=1K7lP8vIYS34vv5gLtqVx89d67zypaRR6Ibqd0fAXOI&v=1&r=https%3a%2f%2fnews.detik.com%2fberita%2f3524662%2feksekusi-ahok-ke-lapas-tunggu-surat-dari-pt-dki&p=DevEx,5007.1">Detik News</Item.Header>
                    <Item.Meta>Description</Item.Meta>
                    <Item.Description>
                        Dengan pencabutan banding ini, perkara Ahok akan dinyatakan berkekuatan hukum tetap (inkrah). Kepala Seksi Pidana Umum Kejari Jakarta Utara, Dicky Oktavia menyebut pihaknya menunggu surat resmi pencabutan ... Brimob Depok. Ahok dihukum 2 tahun penjara ...
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