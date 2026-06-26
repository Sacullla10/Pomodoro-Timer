import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './src/pages/Home';
import { Settings } from './src/pages/Settings';
import { DefaultTheme, NavigationContainer, NavigationProp } from '@react-navigation/native';
import { Theme } from './src/shared/themes/Theme';

type TScreenDefinitions = {
  Home: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<TScreenDefinitions>();
export function AppRoutes() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        fonts: {
            ...DefaultTheme.fonts,
            regular: {
                fontFamily: Theme.fonts.interRegular,
                fontWeight: '400',
            },
            bold: {
                fontFamily: Theme.fonts.interBold,
                fontWeight: '700',
            },
        },
        colors: {
            ...DefaultTheme.colors,
            background: Theme.colors.background,
            primary: Theme.colors.primary,
            text: Theme.colors.text,
        }
      }}>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    </NavigationContainer>    
  );
}

export type TNavigationScreenProps = NavigationProp<TScreenDefinitions>