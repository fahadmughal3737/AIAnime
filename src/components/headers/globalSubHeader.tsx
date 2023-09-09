import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { images } from '../../assets'
import { styles } from './styles'
import Icon from '../../utils/icons'
import { normalize } from '../../utils/responsiveFont'
import { COLORS } from '../../utils/colors'
const GlobalSubHeader = (props: any) => {
  return (
    <View style={styles.globalSubHeader}>
      {props.backIcon ?
        <TouchableOpacity onPress={props.onPress} style={styles.leftIconStyle}>
          <Icon type='material' name='keyboard-arrow-left' size={normalize(30)} color={COLORS.WHITE} />
        </TouchableOpacity>
        :
        null
      }

      <Text style={styles.centeredHeading}>{props.text}</Text>
    </View>
  )
}
export default GlobalSubHeader