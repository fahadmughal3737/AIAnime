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
        opacity:1,
        padding:'2.5%'
    },
    lowOpacityImage:{ position: 'absolute', height: '60%', opacity: 0.2, top: '35%' },
    subContainer:{ flex:0.6,  width:'90%',alignSelf:'center',  paddingVertical:'10%', justifyContent:'space-between'  },
    buttonsContainer:{ flexDirection:'row', justifyContent:'space-between',  flexWrap:'wrap', flex:0.9},
    innerContainer:{ flex: 1, justifyContent: 'space-between', width:'90%', alignSelf:'center' },
    horizontalBtnContainer:{ flexDirection: 'row',  marginVertical: '5%', flex: 0.4, justifyContent: 'space-between' },
    mainHeadingText:{ color: COLORS.WHITE, flex:0.4, width:'75%', alignSelf:'center',  marginTop:'5%', textAlign:'center',fontFamily:FontFamily.QUICKSAND_SEMIBOLD, fontSize: normalize(32),  },
    smallText:{fontFamily:FontFamily.QUICKSAND_BOLD, bottom:'20%', textAlign:'center', color:COLORS.WHITE, fontSize:normalize(30)},
    mainTextInput:{borderBottomColor:COLORS.PINK01, borderBottomWidth:1, color:COLORS.WHITE, fontFamily:FontFamily.QUICKSAND_BOLD, paddingHorizontal:'2.5%', fontSize:normalize(20)}
})