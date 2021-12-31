import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

// Screens
import HomeScreen from './src/screens/Home';
import NewAppt from './src/screens/NewAppt';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000000'
          },
              headerTintColor: '#00ffff'
          }} 
        initialRouteName="Home"
      >

        <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={({ navigation }) => ({
                headerRight: () => (
                  <Icon 
                    name="plus" 
                    type="feather" 
                    color="#00ffff"
                    style={style.headerIcon}
                    onPress={() => navigation.navigate('New Appointment')}
                  />
                )
            })}
        />
        <Stack.Screen name="New Appointment" component={NewAppt}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  headerIcon: {
    marginRight: 20
  }
});