import React, { useState } from "react";
import { Text, TextInput, SafeAreaView, KeyboardAvoidingView, Image } from 'react-native'
import { styles } from "./style";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../utils/colors";
import GlobalSubHeader from "../../components/headers/globalSubHeader";
import MainButton from "../../components/buttons/mainButton";
import { images } from "../../assets";
const OnboardNotification = () => {
    const [name, setName] = useState('')
    return (
        <SafeAreaView style={styles.mainContainer}>
            <LinearGradient colors={[COLORS.BACKGROUND01, COLORS.BACKGROUND02]} style={styles.container}>
                <GlobalSubHeader text='1 - 4 ' backIcon={false} />
                <Text style={styles.mainHeadingText}>What you want me to call you</Text>
                <Image resizeMode='contain' style={styles.lowOpacityImage} source={images.AIGIRL} />
                <KeyboardAvoidingView style={styles.subContainer}>
                    <TextInput onChangeText={(text:string)=>setName(text)} placeholderTextColor={COLORS.GRAY01} placeholder="Your nickname" style={styles.mainTextInput} />
                    <MainButton disabled={name===''?true:false} backgroundColor={COLORS.PINK01} text='Continue' textColor={COLORS.BLACK} />
                </KeyboardAvoidingView>
            </LinearGradient>
        </SafeAreaView>
    )
}
export default OnboardNotification;