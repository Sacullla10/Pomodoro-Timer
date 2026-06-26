import {Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { TNavigationScreenProps } from '../../AppRoutes';

export const Home = () => {
  const navigation = useNavigation<TNavigationScreenProps>();



  return (
    <View>
      <Text style={{ fontSize: 24, fontFamily: 'InterRegular' }}>
        Home Page
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
}