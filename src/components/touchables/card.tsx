

import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { styles } from './styles'
const Card = (props: any) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.cardStyle, {backgroundColor:props.backgroundColor}]}>
            <Image resizeMode='contain' source={props.image} style={{flex:1}} />
        </TouchableOpacity>
    )
}
export default Card