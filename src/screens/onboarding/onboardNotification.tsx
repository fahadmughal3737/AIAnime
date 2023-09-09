import React, { useState, useContext, useEffect } from "react";
import { Text, TextInput, SafeAreaView, View, Image } from 'react-native'
import { styles } from "./style";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../utils/colors";
import GlobalSubHeader from "../../components/headers/globalSubHeader";
import MainButton from "../../components/buttons/mainButton";
import { FontFamily, images } from "../../assets";
import { normalize } from "../../utils/responsiveFont";
import { Context } from "../../context.ts/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
const OnboardNotification = (props:any) => {
    var jsonValue
    const getData = async () => {
        try {
           jsonValue = await AsyncStorage.getItem('key');
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
          // error reading value
        }
      };

      useEffect(()=>{
        getData().then((res:any)=>
        console.log('res',res)
        )
      },[])
    return (
        <SafeAreaView style={styles.mainContainer}>
            <LinearGradient colors={[COLORS.BACKGROUND01, COLORS.BACKGROUND02, COLORS.BLACK]} style={styles.container}>
                <GlobalSubHeader onPress={()=>props.navigation.goBack()} backIcon={true} />
                <Text style={styles.mainHeadingText}>Stay Connected with AI Anime Friends</Text>
                <Image resizeMode='contain' style={[styles.lowOpacityImage,{top:'25%', opacity:0.5}]} source={images.AIGIRL} />
                <View style={[styles.subContainer, {justifyContent:'flex-end'}]}>
                    <Text style={styles.smallText}>You will never miss message from Anime Friends</Text>
                    <MainButton onPress={()=>props.navigation.navigate('PaywallStack')} backgroundColor={COLORS.PINK01} text='Continue' textColor={COLORS.BLACK} />
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}
export default OnboardNotification;