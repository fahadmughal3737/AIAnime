import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Paywall from '../../screens/paywall/paywall';
const Stack = createNativeStackNavigator();
const PaywallStack = () => {
    return (
        <Stack.Navigator screenOptions={{animation: "slide_from_right"}}>
            <Stack.Screen name='Paywall' component={Paywall} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export default PaywallStack;