import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Avatar from './src/components/Avatar';
import NameTitle from './src/components/NameTitle';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? 'black' : '#C5B4E3' }]}>
      <View style={[styles.profileContainer, { backgroundColor: isDarkMode ? '#C5B4E3' : 'black' }]}>
        <Avatar isDarkMode={isDarkMode} />
        <NameTitle isDarkMode={isDarkMode} />
      </View>
      <TouchableOpacity style={styles.button} onPress={toggleTheme}>
        <Text style={styles.buttonText}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileContainer: {
    width: 320,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    elevation: 5,
  },
  button: {
    marginTop: 50,
    backgroundColor: '#a56fc6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
});
