import {Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation<any>();



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