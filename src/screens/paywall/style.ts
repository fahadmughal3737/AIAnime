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
    lowOpacityImage:{ position: 'absolute', height: '60%', opacity: 0.2, top: '35%', alignSelf:'center' },
    subContainer:{ flex:0.6,  paddingVertical:'10%', padding:'2.5%', justifyContent:'space-between'  },
    buttonsContainer:{ flexDirection:'row', justifyContent:'space-between',  flexWrap:'wrap', flex:0.9},
    innerContainer:{ flex: 1, justifyContent: 'space-between' },
    footerTextStyle:{ color: COLORS.GRAY01, fontFamily: FontFamily.QUICKSAND_BOLD, fontSize: normalize(14) },
    horizontalBtnContainer:{ flexDirection: 'row', marginVertical: '5%', flex: 0.4, justifyContent: 'space-between' },
    friendScreenFooter:{ flex: 0.2, justifyContent: 'center', alignItems: 'center' },
    flatListContainerStyle:{ alignItems: 'center', flex: 1, justifyContent: 'flex-end' },
    mainHeadingText:{ color: COLORS.WHITE, flex:0.4,   marginTop:'2.5%', textAlign:'center',fontFamily:FontFamily.QUICKSAND_SEMIBOLD, fontSize: normalize(46),  },
    smallText:{fontFamily:FontFamily.QUICKSAND_BOLD, bottom:'20%', textAlign:'center', color:COLORS.WHITE, fontSize:normalize(30)},
    mainTextInput:{borderBottomColor:COLORS.PINK01, borderBottomWidth:1, color:COLORS.WHITE, fontFamily:FontFamily.QUICKSAND_BOLD, fontSize:normalize(20)}
})