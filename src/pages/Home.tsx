import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { TNavigationScreenProps } from '../../AppRoutes';
import { Theme } from '../shared/themes/Theme';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

export const Home = () => {
  const navigation = useNavigation<TNavigationScreenProps>();

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.settingsButton}
        onPress= {() => navigation.navigate('Settings')}>
        <MaterialIcons name="settings" size={28} color={Theme.colors.divider} />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.titleGroup}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Pomodoro
            </Text>
          </View>

          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitleText}>
              Hora de se concentrar!
            </Text>

            <Text style={styles.subtitleText}>
              Pausa curta. 
            </Text>

            <Text style={styles.subtitleText}>
              Pausa longa
            </Text>

            <Text style={styles.subtitleText}>
              Cronômetro em pausa
            </Text>
          </View>

          <View style={styles.progressContainer}>
            <AnimatedCircularProgress
              size={160}
              width={7}
              fill={10}
              rotation={0}
              tintColor={Theme.colors.divider}
              backgroundColor={Theme.colors.primary}
              children={() => (
                <Text style={styles.progressText}>
                  25:00
                </Text>
              )}
            ></AnimatedCircularProgress>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>
              Iniciar
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.primaryButtonText}>
              Continuar
            </Text>
          </TouchableOpacity>

                <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.primaryButtonText}>
              Reiniciar
            </Text>
          </TouchableOpacity> 

        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>
              Pausar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>
              Parar
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.pomodorosContainer}>
          <Text style={styles.pomodorosText}>
            Pomodoros:
          </Text>

          <View style={styles.pomodorosIndicatorComplete}/>
          <View style={styles.pomodorosIndicatorComplete}/>
          <View style={styles.pomodorosIndicator}/>
          <View style={styles.pomodorosIndicator}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 36,
  },

  titleGroup: {
    gap: 24,
  },

  settingsButton: {
    alignSelf: 'flex-end',
  },

  primaryButton: {
    backgroundColor: Theme.colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 55,
  },

  primaryButtonText: {
    color: Theme.colors.text,
    fontFamily: 'InterRegular',
    fontSize: Theme.fontSizes.body,
  },

  secondaryButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,

    borderWidth: 2,
    borderColor: Theme.colors.primary,
    borderRadius: 55,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10
  },

  progressContainer: {
    alignItems: 'center',
  },

  progressText: {
    fontSize: Theme.fontSizes.title,
    fontFamily: Theme.fonts.interBold,
    color: Theme.colors.text,
  },

  titleContainer: {
    alignItems: 'center',
  },

  titleText: {
    fontSize: Theme.fontSizes.title,
    fontFamily: Theme.fonts.interBold,
    color: Theme.colors.text,
  },

  subtitleContainer: {
    alignItems: 'center',
  },

  subtitleText: {
    fontSize: Theme.fontSizes.body,
    fontFamily: Theme.fonts.interRegular,
    color: Theme.colors.text,
  },

  pomodorosContainer: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pomodorosText: {
    fontSize: Theme.fontSizes.body,
    fontFamily: Theme.fonts.interRegular,
    color: Theme.colors.text,
  },

  pomodorosIndicator: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: Theme.colors.divider,
  },

  pomodorosIndicatorComplete: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: Theme.colors.primary,
  },
});