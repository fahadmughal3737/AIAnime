
import { StyleSheet } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { COLORS } from '../../utils/colors'
import { normalize } from '../../utils/responsiveFont'
import { FontFamily } from '../../assets'
export const styles = StyleSheet.create({
    globalSubHeader:{height: heightPercentageToDP(8),  justifyContent:'center', flexDirection: 'row', alignItems: 'center'},
    globalHeader: { height: heightPercentageToDP(8), paddingHorizontal:'2.5%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' },
    leftIconStyle:{  position:'absolute' , left:normalize(6) },
    centeredHeading:{ color:COLORS.WHITE, fontSize:normalize(16),  fontFamily:FontFamily.QUICKSAND_BOLD },
})