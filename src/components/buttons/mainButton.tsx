import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'

const MainButton = (props: any) => {
    return (
            <TouchableOpacity disabled={props.disabled} onPress={props.onPress} style={[styles.mainButton, {
                marginVertical: props.margin,
                opacity: props.disabled ? 0.6 : 1,
                backgroundColor: props.backgroundColor,
                
            }]}>
                <Text style={[styles.btnText, { color: props.textColor }]}>{props.text}</Text>

            </TouchableOpacity>
    )
}
export default MainButton;