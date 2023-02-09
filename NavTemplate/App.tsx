import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import  { Home }  from './pages/home';
import  { Page1 }  from './pages/page1';
import  { Page2 }  from './pages/page2';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Page 1" component={Page1} />
        <Drawer.Screen name="Page 2" component={Page2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;