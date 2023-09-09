import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, Image, TouchableOpacity, FlatList } from 'react-native'
import { styles } from "./style";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../utils/colors";
import MainButton from "../../components/buttons/mainButton";
import { FontFamily, images } from "../../assets";
import GlobalHeader from "../../components/headers/globalHeader";
import { normalize } from "../../utils/responsiveFont";
import Rectangle from "../../components/touchables/rectangle";
import Purchases from "react-native-purchases/dist/purchases";
const Paywall = (props: any) => {
    const [selectedPlan, setSelectedPlan] = useState({})
    const GetData = async () =>{
        try {
            const offerings = await Purchases.getOfferings();
            if (offerings.current !== null) {
                // Display current offering with offerings.current
                console.log('try offerings fetch', offerings.current)
            }
        } catch (e) {
          console.log('e', e)
        }
    } 
    useEffect(() => {
        GetData()
    }, [])
    const [data, setData] = useState<any>([
        {
            key: 1
        },
        {
            key: 2
        },
        {
            key: 3
        }
    ])
    return (
        <SafeAreaView style={styles.mainContainer}>
            <LinearGradient colors={[COLORS.BACKGROUND01, COLORS.BACKGROUND02]} style={styles.container}>
                <GlobalHeader />
                <Text style={[styles.mainHeadingText, { flex: 0.15, fontSize: normalize(40) }]}>Unlimited messaging with your girlfriend</Text>
                <Image resizeMode='contain' style={[styles.lowOpacityImage, { top: '25%', opacity: 1 }]} source={images.AIGIRL} />
                <View style={{ flex: 0.65, }}>
                    <FlatList contentContainerStyle={styles.flatListContainerStyle} data={data} renderItem={({ item }) => {
                        return (
                            <Rectangle
                                onPress={() => setSelectedPlan(item)}
                                discountedPrice={'99.00'}
                                actualAmount={'199.00'}
                                strikeTextColor={selectedPlan === item ? COLORS.PINK02 : COLORS.GRAY01}
                                percentAmountColor={selectedPlan === item ? COLORS.WHITE : COLORS.PINK01}
                                savePercentageAmount={50}
                                borderWidth={selectedPlan === item ? normalize(4) : normalize(2)}
                                borderColor={COLORS.PINK01}
                                backgroundColor={selectedPlan === item ? COLORS.PINK03 : COLORS.PINK02} />
                        )
                    }} />
                </View>
                <View style={styles.friendScreenFooter}>
                    <TouchableOpacity style={{ marginVertical: '5%' }}>
                        <Text style={styles.footerTextStyle}>Terms & Conditions</Text>
                    </TouchableOpacity>
                    <MainButton backgroundColor={COLORS.PINK01} text='Continue' textColor={COLORS.BLACK} />
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}
export default Paywall;