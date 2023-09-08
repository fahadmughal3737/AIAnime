import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Nickname from '../../screens/onboarding/nickname';
import DateOfBirth from '../../screens/onboarding/dateofbirth';
import AnimeFriend from '../../screens/onboarding/animefriend';
import Interest from '../../screens/onboarding/interest';
import OnboardNotification from '../../screens/onboarding/onboardNotification';
const Stack = createNativeStackNavigator();
const OnboardingStack = () => {
    return (
        <Stack.Navigator screenOptions={{animation: "slide_from_right"}}>
            <Stack.Screen name='Nickname' component={Nickname} options={{ headerShown: false }} />
            <Stack.Screen name='DateOfBirth' component={DateOfBirth} options={{ headerShown: false }} />
            <Stack.Screen name='AnimeFriend' component={AnimeFriend} options={{ headerShown: false }} />
            <Stack.Screen name='Interest' component={Interest} options={{ headerShown: false }} />
            <Stack.Screen name='OnboardNotification' component={OnboardNotification} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export default OnboardingStack;