import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FontFamily } from "../../assets";
import { normalize } from "../../utils/responsiveFont";
export const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
    },
    container:{
        flex:1,
        padding:'2.5%',
        opacity:1
    },
    lowOpacityImage:{ position: 'absolute', height: '60%', opacity: 0.2, top: '35%' },
    subContainer:{ flex:0.6,  paddingVertical:'10%', padding:'2.5%', justifyContent:'space-between'  },
    mainHeadingText:{ color: COLORS.WHITE, flex:0.4,   marginTop:'2.5%', textAlign:'center',fontFamily:FontFamily.QUICKSAND_SEMIBOLD, fontSize: normalize(46),  },
    mainTextInput:{borderBottomColor:COLORS.PINK01, borderBottomWidth:1, color:COLORS.WHITE, fontFamily:FontFamily.QUICKSAND_BOLD, fontSize:normalize(20)}
})