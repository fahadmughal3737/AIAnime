import React, { useContext, useState } from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { styles } from "./style";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../utils/colors";
import GlobalSubHeader from "../../components/headers/globalSubHeader";
import MainButton from "../../components/buttons/mainButton";
import { images } from "../../assets";
import SmallButton from "../../components/buttons/smallButton";
import { Context } from "../../context.ts/context";
const Interest = (props:any) => {
    const {userData, setUserData} = useContext<any>(Context)
    const [options, setOptions] = useState([
        {
            name:'Astrology',
            emoji:null,
            key:1
        },
        {
            name:'Netflix',
            emoji:null,
            key:2,
        },
        {
            name:'Outdoor',
            emoji:null,
            key:3,
        },
        {
            name:'Sports',
            emoji:null,
            key:4,
        },
        {
            name:'Astrology',
            emoji:null,
            key:5
        },
        {
            name:'Astrology',
            emoji:null,
            key:6
        },
        {
            name:'asd',
            emoji:null,
            key:7
        },    
    ])
    const [selectedOptions, setSelectedOptions] = useState<any>([])
    const AddInterests = (data:any) => {
        let temp = selectedOptions
        if(selectedOptions.includes(data)){
            temp.pop(data)
            setSelectedOptions([...temp])
        }
        else {
            temp.push(data)
            setSelectedOptions([...temp])
        }
    }
    const SaveInterests = (options:string) => {
        let temp = userData
        temp.interests = options
        setUserData(temp)
        props.navigation.navigate('AnimeFriend')
    }
    return (
        <View style={styles.mainContainer}>
            <LinearGradient colors={[COLORS.BACKGROUND01, COLORS.BACKGROUND02]} style={styles.container}>
                <GlobalSubHeader text='3 - 4 ' backIcon={true} />
                <Text style={[styles.mainHeadingText, {flex:0.15, }]}>What are your Interests</Text>
                <Image resizeMode='contain' style={styles.lowOpacityImage} source={images.AIGIRL} />
                <View style={[styles.subContainer, {flex:0.85, }]}>
                    <View style={styles.buttonsContainer}>
                        {options.map((data:any)=>{
                            return (
                                <SmallButton 
                                 onPress={()=>AddInterests(data)}
                                 key={data.key}
                                 text={data.name}
                                 marginVertical={'1.5%'}
                                 backgroundColor={selectedOptions.includes(data) ? COLORS.PINK03:COLORS.PINK02} />
                            )
                        })}
                    </View>
                    <MainButton onPress={()=>SaveInterests(selectedOptions)} disabled={selectedOptions.length===0?true:false} backgroundColor={COLORS.PINK01} text='Continue' textColor={COLORS.BLACK} />
                </View>
            </LinearGradient>
        </View>
    )
}
export default Interest;