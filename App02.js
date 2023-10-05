import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import Notif from './Screens/Notif';

const Drawer = createDrawerNavigator();

export default function App02() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Notif" component={Notif} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}