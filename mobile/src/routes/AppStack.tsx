import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import Landing from '../pages/Landing'

function AppStack(){
  return(
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen  name='Landing' component={Landing}/>
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack