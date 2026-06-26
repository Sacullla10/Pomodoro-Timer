import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './src/pages/Home';
import { Settings } from './src/pages/Settings';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
export function AppRoutes() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    </NavigationContainer>    
  );
}