import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from '../../utils/icons'
import { FontFamily, images } from '../../assets'
import { normalize } from '../../utils/responsiveFont'
import { COLORS } from '../../utils/colors'
import { styles } from './styles'
const GlobalHeader = (props: any) => {
    return (
        <View style={styles.globalHeader}>
            <TouchableOpacity>
                <Icon type = 'ant' name ='close' size={normalize(21)} color={COLORS.GRAY01} />
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={{fontSize:normalize(16), fontFamily:FontFamily.QUICKSAND_BOLD, color:COLORS.PINK01}}>Restore</Text>
            </TouchableOpacity>
        </View>
    )
}
export default GlobalHeader;