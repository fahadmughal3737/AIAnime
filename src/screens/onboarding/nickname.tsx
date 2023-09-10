import React, { useContext, useState } from "react";
import { Text, TextInput, View, KeyboardAvoidingView, StatusBar, Platform, Image } from 'react-native'
import { styles } from "./style";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../utils/colors";
import GlobalSubHeader from "../../components/headers/globalSubHeader";
import MainButton from "../../components/buttons/mainButton";
import { images } from "../../assets";
import { Context } from "../../context.ts/context";
const Nickname = (props: any) => {
    const { userData, setUserData } = useContext<any>(Context)
    const [name, setName] = useState('')
    const SaveName = (name: string) => {
        let temp = userData
        temp.nickname = name
        setUserData(temp)
        props.navigation.navigate('DateOfBirth')
    }
    return (
        <View style={styles.mainContainer}>
            <LinearGradient colors={[COLORS.BACKGROUND01, COLORS.BACKGROUND02]} style={styles.container}>
                <GlobalSubHeader text='1 - 4 ' backIcon={false} />
                <Text style={styles.mainHeadingText}>What you want me to call you</Text>
                <Image resizeMode='contain' style={styles.lowOpacityImage} source={images.AIGIRL} />
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'android' ? 'height' : 'padding'}
                    style={styles.subContainer}>
                    <TextInput onChangeText={(text: string) => setName(text)} placeholderTextColor={COLORS.GRAY01} placeholder="Your nickname" style={styles.mainTextInput} />
                    <MainButton onPress={() => SaveName(name)} disabled={name === '' ? true : false} backgroundColor={COLORS.PINK01} text='Continue' textColor={COLORS.BLACK} />
                </KeyboardAvoidingView>
            </LinearGradient>
        </View>
    )
}
export default Nickname;