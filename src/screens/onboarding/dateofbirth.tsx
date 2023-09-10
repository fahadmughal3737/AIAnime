import React, { useState, useContext } from "react";
import { Text, View, Image } from 'react-native'
import { styles } from "./style";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../utils/colors";
import GlobalSubHeader from "../../components/headers/globalSubHeader";
import MainButton from "../../components/buttons/mainButton";
import { images } from "../../assets";
import DatePicker from 'react-native-date-picker'
import { widthPercentageToDP } from "react-native-responsive-screen";
import { Context } from "../../context.ts/context";
import moment from "moment";
const DateOfBirth = (props: any) => {
    const { userData, setUserData } = useContext<any>(Context)
    const [date, setDate] = useState(new Date())
    const SaveDate = (date: any) => {
        let temp = userData
        temp.dateOfBirth = moment(date).format().toString().split('T')[0]
        setUserData(temp)
        props.navigation.navigate('Interest')
    }
    return (
        <View style={styles.mainContainer}>
            <LinearGradient colors={[COLORS.BACKGROUND01, COLORS.BACKGROUND02]} style={styles.container}>
                <GlobalSubHeader text='2 - 4 ' backIcon={false} />
                <Text style={styles.mainHeadingText}>What is your birthday</Text>
                <Image resizeMode='contain' style={styles.lowOpacityImage} source={images.AIGIRL} />
                <View style={[styles.subContainer, { alignItems: 'center' }]}>
                    <DatePicker style={{ width: widthPercentageToDP(90) }} androidVariant="nativeAndroid" date={date} mode="date" textColor={COLORS.WHITE} onDateChange={setDate} />
                    <View style={{width:'100%'}}>
                        <MainButton onPress={() => SaveDate(date)} backgroundColor={COLORS.PINK01} text='Continue' textColor={COLORS.BLACK} />
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}
export default DateOfBirth;