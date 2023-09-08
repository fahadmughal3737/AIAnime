import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'
import { COLORS } from '../../utils/colors'
const MainButton = (props: any) => {
    return (
        <TouchableOpacity disabled={props.disabled} onPress={props.onPress} style={[styles.mainButton, {
            marginVertical: props.margin,
            shadowColor: COLORS.PINK01,
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            
            elevation: 24,
            backgroundColor: props.backgroundColor,
            opacity:props.disabled?0.6:1
        }]}>
            <Text style={[styles.btnText, { color: props.textColor }]}>{props.text}</Text>

        </TouchableOpacity>
    )
}
export default MainButton;