import React from 'react'
import { View, Text } from 'react-native'

const Row = props => (
    <View style={{padding: 20}}>
        <Text>{props.name}</Text>
        <Text>{props.phone}</Text>
    </View>
)

export default Row