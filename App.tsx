import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingStack from './src/navigations/onboardingStack/onboardingStack';
import PaywallStack from './src/navigations/paywallStack/paywallStack';
import { COLORS } from './src/utils/colors';
import { Context } from './src/context.ts/context';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Purchases from 'react-native-purchases';

const Stack = createNativeStackNavigator();
const App = () => {
  const [test, setTest] = useState<boolean>(false)
  const [load, setLoad] = useState<boolean>(true)
  const getData = async () => {
    await AsyncStorage.getItem('key').then((res: any) => {
      console.log('res async app.tsx', res)
      if (res===null || res===undefined)
      { 
        null
      }
      else {
        setTest(true)
      }
      setLoad(false)
    }
    )
      .catch((e: any) =>
        console.log('error app.tsx async catch', e)
      )
  };

  useEffect(() => {
    getData()
    if (Platform.OS === 'ios') {
      Purchases.configure({apiKey: `it's gonna come here`});
   }
   else if (Platform.OS === 'android') {
    Purchases.configure({apiKey: `it's gonna come here`});
   
   // OR: if building for Amazon, be sure to follow the installation instructions then:
    // Purchases.configure({ apiKey: `it's gonna come here`, useAmazon: true });
 }
  }, [])
  const [userData, setUserData] = useState({
    nickname: '',
    interests: [],
    dateOfBirth: '',
    animeFriend: {},
  })
  return (
    <Context.Provider value={{ userData, setUserData }} >
      <NavigationContainer>
        {load ? <View style={{ flex: 1, justifyContent: 'center' }}><ActivityIndicator size={'large'} color={COLORS.PINK02} /></View> :
          <Stack.Navigator screenOptions={{ animation: "slide_from_right" }}>
            {test ? <Stack.Screen
              name="PaywallStack"
              component={PaywallStack}
              options={{ headerShown: false }}
            /> :
              <>
                <Stack.Screen
                  name="OnboardingStack"
                  component={OnboardingStack}
                  options={{ headerShown: false }}

                />
                <Stack.Screen
                  name="PaywallStack"
                  component={PaywallStack}
                  options={{ headerShown: false }}
                />
              </>
            }


          </Stack.Navigator>}

      </NavigationContainer>
    </Context.Provider>
  );
};
export default App;
