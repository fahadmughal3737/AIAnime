
import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { styles } from './styles'
import { FontFamily } from '../../assets'
const Rectangle = (props: any) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.rectangleStyle, {
                backgroundColor: props.backgroundColor,
                borderWidth: props.borderWidth,
                borderColor: props.borderColor,
            }]}>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.savingHeadingText}>Save</Text>
                    <Text style={[styles.savePercentageAmountStyle, {
                        color: props.percentAmountColor,
                        fontFamily: FontFamily.QUICKSAND_BOLD
                    }
                    ]}>{props.savePercentageAmount + '%'}</Text>
                </View>
                <Text style={[styles.strikeTextStyle, {color: props.strikeTextColor }]}>{'THB ' + props.actualAmount + ' ' + '/' + ' ' + 'years'}</Text>
            </View>
            <View>
                <Text style={styles.smallText}>{'THB' + ' ' + props.discountedPrice}</Text>
                <Text style={styles.smallText}>/years</Text>
            </View>
        </TouchableOpacity>
    )
}
export default Rectangle