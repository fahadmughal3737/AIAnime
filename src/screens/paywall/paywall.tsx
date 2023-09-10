import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, StatusBar, FlatList } from 'react-native'
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
    const GetData = async () => {
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

    ])
    return (
        <View style={styles.mainContainer}>
            <LinearGradient colors={[COLORS.BACKGROUND01, COLORS.BACKGROUND02, COLORS.BLACK]} style={styles.container}>
                <GlobalHeader />
                <Text style={[styles.mainHeadingText, { flex: 0.15, width: '75%', alignSelf: 'center', fontSize: normalize(20) }]}>Unlimited messaging with your girlfriend</Text>
                <Image resizeMode='contain' style={[styles.lowOpacityImage, { top: '18%', width: '70%', opacity: 1 }]} source={images.AIGIRL} />
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
                    }}
                    ItemSeparatorComponent={() => <View style={{ width: normalize(24) }} />}
 
                    />
                </View>
                <View style={styles.friendScreenFooter}>
                    <TouchableOpacity style={{ marginVertical: '5%' }}>
                        <Text style={styles.footerTextStyle}>Terms & Conditions</Text>
                    </TouchableOpacity>
                    <View style={{paddingHorizontal:'2.5%', width:'100%'}}>
                    <MainButton backgroundColor={COLORS.PINK01} text='Continue' textColor={COLORS.BLACK} />
                    </View> 
                </View>
            </LinearGradient>
        </View>
    )
}
export default Paywall;