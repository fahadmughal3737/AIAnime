import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'
const SmallButton = (props: any) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.smallButton, {backgroundColor:props.backgroundColor, marginVertical:props.marginVertical}]}>
            <Text style={styles.smallBtnText}>{props.text}</Text>
        </TouchableOpacity>
    )
}
export default SmallButton;