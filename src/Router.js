
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Products from './pages/Products';
import Detail from './pages/Detail';

const Stack = createStackNavigator();

const Router = () => {  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsScreen" component={Products} options={{
          title: 'Dükkan',
          headerStyle: {backgroundColor: '#64b5f6'},
          headerTitleAlign: 'center',
          headerTitleStyle: {color: 'white'}
        }} />
        <Stack.Screen name="DetailScreen" component={Detail} options={{
          title: 'Ürün Detayı',
          headerStyle: {backgroundColor: '#64b5f6'},
          headerTitleAlign: 'center',
          headerTitleStyle: {color: 'white'},
          headerTintColor: 'white'
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Router;
