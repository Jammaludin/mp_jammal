import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home02 from './Src/Home02';
import Login from './Src/Login';
import SignUp from './Src/SignUp';

const Stack = createNativeStackNavigator();

function App03() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName='Home02' >
                <Stack.Screen name="Home02" component={Home02} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App03;