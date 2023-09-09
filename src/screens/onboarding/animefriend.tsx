import React, { useState, useContext } from "react";
import { Text, SafeAreaView, FlatList, Image, View, } from 'react-native'
import { styles } from "./style";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../utils/colors";
import GlobalSubHeader from "../../components/headers/globalSubHeader";
import MainButton from "../../components/buttons/mainButton";
import { images } from "../../assets";
import SmallButton from "../../components/buttons/smallButton";
import Card from "../../components/touchables/card";
import { Context } from "../../context.ts/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
const AnimeFriend = (props:any) => {
    const [girls, setGirls] = useState(true)           // state to show flatlist of either boys or girls
    const {userData, setUserData} = useContext<any>(Context)
    const genderSetter = (girl:boolean)=> {
        if(girl===true)
        {   
            setGirls(true)
            setSelectedObject({img: images.AIGIRLSMALL })
        }
        else{
            setSelectedObject({img: images.AIBOYSMALL })
            setGirls(false)
        }
    }
    const [girlsData, setGirlsData] = useState<any>([
        {
            img: images.AIGIRLSMALL
        },
        {
            img: images.AIGIRLGREENSIDESMALL
        },
        {
            img: images.AIGIRLGREENSMALL
        },
        {
            img: images.AIGIRLREDSMALL
        },

    ])
    const [boysData, setBoysData] = useState([
        {
            img: images.AIBOYSMALL
        },
        {
            img: images.AIBOYBLUESMALL
        },
        {
            img: images.AIBOYWHITESMALL
        },
    ])
    const [selectedObject, setSelectedObject] = useState({
        img: girls? images.AIGIRLSMALL : images.AIBOYSMALL
    },)
    const SaveFriend = async (friend:any) => {
        let temp = userData
        temp.animeFriend = friend
        setUserData(temp)
        const value = JSON.stringify(userData)
        await AsyncStorage.setItem('key', value);
        props.navigation.navigate('OnboardNotification') //to be changed according to remoteconfig
    }
   
    return (
        <SafeAreaView style={styles.mainContainer}>
            <LinearGradient colors={[COLORS.BACKGROUND01, COLORS.BACKGROUND02]} style={styles.container}>
                <GlobalSubHeader text='4 - 4 ' backIcon={false} />
                <View style={styles.innerContainer}>
                    <View style={{ flex: 0.3, }}>
                        <Text style={[styles.mainHeadingText, { flex: 0.6, }]}>Choose your Dream Anime Friend</Text>
                        <View style={styles.horizontalBtnContainer}>
                            <SmallButton onPress={() => genderSetter(true)} text={'Girls'} backgroundColor={girls ? COLORS.PINK03 : COLORS.PINK02} />
                            <SmallButton onPress={() => genderSetter(false)} text={'Boys'} backgroundColor={girls ? COLORS.PINK02 : COLORS.PINK03} />
                        </View>
                    </View>
                    <Image resizeMode='cover' style={{ flex: 0.5, width:'100%', alignSelf:'center', }} source={selectedObject.img} />
                    <View style={{ flex: 0.2, bottom:'2.5%', }}>
                        <FlatList style={{marginRight:'2.5%'}} showsHorizontalScrollIndicator={false} horizontal={true} data={girls?girlsData:boysData} renderItem={({ item }) => {
                            console.log('itm', item)
                            return (
                                    <Card onPress={()=>setSelectedObject(item)} image={item.img} backgroundColor={selectedObject.img===item.img ? COLORS.PINK03:COLORS.PINK02} />
                            )
                        }} />
                    </View>
                    <MainButton onPress={()=>SaveFriend(selectedObject)} margin={'2.5%'} backgroundColor={COLORS.PINK01} textColor={COLORS.BLACK} text={'Continue'} />
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}
export default AnimeFriend;