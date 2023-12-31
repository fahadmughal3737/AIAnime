
import { StyleSheet } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { COLORS } from '../../utils/colors'
import { normalize } from '../../utils/responsiveFont'
import { FontFamily } from '../../assets'
export const styles = StyleSheet.create({
    cardStyle: { height: normalize(89), borderRadius: normalize(30), padding: '5%', alignItems: 'center', justifyContent: 'center', borderColor: COLORS.PINK01, borderWidth: 2,  width: normalize(89), },
    smallText: { fontFamily: FontFamily.QUICKSAND_BOLD, color: COLORS.WHITE, fontSize: normalize(20) },
    rectangleStyle: {
        width: widthPercentageToDP(90),
        borderRadius: normalize(20),
        height: normalize(86),
        marginVertical: '1.5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2.5%',
        paddingHorizontal: '2.5%',
    },
    savingHeadingText: { fontSize: normalize(24), fontFamily: FontFamily.QUICKSAND_BOLD, color: COLORS.WHITE },
    savePercentageAmountStyle: { fontSize: normalize(32), marginLeft: normalize(10), },
    strikeTextStyle: { textDecorationLine: 'line-through', fontSize: normalize(14), fontFamily: FontFamily.QUICKSAND_BOLD, },
})