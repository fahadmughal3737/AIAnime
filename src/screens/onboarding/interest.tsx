import React, { useState } from "react";
import { Text, TextInput, SafeAreaView, View, Image, TouchableOpacity } from 'react-native'
import { styles } from "./style";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../utils/colors";
import GlobalSubHeader from "../../components/headers/globalSubHeader";
import MainButton from "../../components/buttons/mainButton";
import { images } from "../../assets";
import SmallButton from "../../components/buttons/smallButton";
const Interest = () => {
    const [name, setName] = useState('')
    return (
        <SafeAreaView style={styles.mainContainer}>
            <LinearGradient colors={[COLORS.BACKGROUND01, COLORS.BACKGROUND02]} style={styles.container}>
                <GlobalSubHeader text='3 - 4 ' backIcon={true} />
                <Text style={[styles.mainHeadingText, {flex:0.15, }]}>What are your Interests</Text>
                <Image resizeMode='contain' style={styles.lowOpacityImage} source={images.AIGIRL} />
                <View style={[styles.subContainer, {flex:0.85}]}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between',  flexWrap:'wrap', flex:0.9}}>
                        <SmallButton text={'Astrology'} marginVertical={'1.5%'} backgroundColor={COLORS.PINK02} />
                        <SmallButton text={'Astrology'}  marginVertical={'1.5%'} backgroundColor={COLORS.PINK02} />
                        <SmallButton text={'Astrology'} marginVertical={'1.5%'} backgroundColor={COLORS.PINK02} />
                        <SmallButton text={'Astrology'} marginVertical={'1.5%'} backgroundColor={COLORS.PINK02} />

                        <SmallButton  text={'Astrology'} marginVertical={'1.5%'} backgroundColor={COLORS.PINK02} />



                    </View>
                    <MainButton disabled={name===''?true:false} backgroundColor={COLORS.PINK01} text='Continue' textColor={COLORS.BLACK} />
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}
export default Interest;