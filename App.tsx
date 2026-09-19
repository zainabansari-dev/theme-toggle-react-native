import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Switch,
  StatusBar,
} from 'react-native';

function App(): React.JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(previousState => !previousState);
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#121212' : '#F5F7FA'},
      ]}>
      
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#121212' : '#F5F7FA'}
      />

      <View style={styles.content}>

        {/* App Icon */}
        <View style={styles.iconCircle}>
          <Text style={styles.icon}>🅿️</Text>
        </View>

        {/* App Name */}
        <Text
          style={[
            styles.title,
            {color: isDarkMode ? '#FFFFFF' : '#1A1A1A'},
          ]}>
          Smart Parking Finder
        </Text>

        <Text
          style={[
            styles.subtitle,
            {color: isDarkMode ? '#BBBBBB' : '#666666'},
          ]}>
          Find your parking spot easily
        </Text>

        {/* Theme Toggle */}
        <View
          style={[
            styles.themeBox,
            {
              backgroundColor: isDarkMode ? '#1F1F1F' : '#FFFFFF',
            },
          ]}>
          
          <Text
            style={[
              styles.themeText,
              {color: isDarkMode ? '#FFFFFF' : '#222222'},
            ]}>
            {isDarkMode ? '🌙  Dark Mode' : '☀️  Light Mode'}
          </Text>

          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            trackColor={{
              false: '#BDBDBD',
              true: '#4CAF50',
            }}
            thumbColor={isDarkMode ? '#FFFFFF' : '#FFFFFF'}
          />
        </View>

        {/* Welcome Text */}
        <Text
          style={[
            styles.welcome,
            {color: isDarkMode ? '#AAAAAA' : '#777777'},
          ]}>
          Welcome to Smart Parking
        </Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },

  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#20B486',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },

  icon: {
    fontSize: 45,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },

  themeBox: {
    width: '90%',
    minHeight: 65,
    borderRadius: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    elevation: 4,
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  themeText: {
    fontSize: 17,
    fontWeight: '600',
  },

  welcome: {
    fontSize: 15,
    marginTop: 35,
  },
});

export default App;