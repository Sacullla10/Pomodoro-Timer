import {Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { TNavigationScreenProps } from '../../AppRoutes';
import { Theme } from '../shared/themes/Theme';

export const Home = () => {
  const navigation = useNavigation<TNavigationScreenProps>();



  return (
    <View>
      <Text style={{ fontSize: Theme.fontSizes.title, fontFamily: 'InterRegular', color: Theme.colors.text }}>
        Home Page
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text style={{ fontFamily: 'InterRegular', color: Theme.colors.text }}>
          Go to Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
}