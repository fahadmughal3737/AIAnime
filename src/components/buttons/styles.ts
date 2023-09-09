import {StyleSheet} from 'react-native'
import { COLORS } from '../../utils/colors'
import { normalize } from '../../utils/responsiveFont'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { FontFamily } from '../../assets'
export const styles = {
    mainButton:{ width: '100%', height: heightPercentageToDP(6), borderRadius:normalize(50), justifyContent: 'center', alignItems: 'center',   },
    btnText:{ fontSize: normalize(23), fontFamily:FontFamily.QUICKSAND_BOLD },
    smallBtnText:{ fontFamily: FontFamily.QUICKSAND_BOLD, color: COLORS.WHITE, fontSize: normalize(20) },
    smallButton:{  flexDirection: 'row', height: heightPercentageToDP(6), borderColor: COLORS.PINK01, borderWidth: 2, paddingHorizontal: '2.5%', justifyContent: 'center', alignItems: 'center', width: widthPercentageToDP(43), borderRadius: normalize(40) },
}