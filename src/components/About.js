import React from 'react';
import { View, Text, Linking } from 'react-native';
import { styles } from '../styles/styles';

const About = () => {
   return (
      <View style={styles.aboutContainer}>
         <Text style={styles.aboutText}>
            This app is a simple Pokemon viewer that fetches data from the PokeAPI.
         </Text>
         <Text style={styles.aboutText}>
            The PokeAPI is a RESTful API that provides information about Pokemon species, abilities,
            moves, and more.
         </Text>
         <Text style={styles.aboutText}>
            For more details about the PokeAPI, you can visit their official website:
         </Text>
         <Text 
            style={styles.link}
            onPress={() => Linking.openURL('https://pokeapi.co/')}
         >
            https://pokeapi.co/
         </Text>
         <Text style={styles.aboutText}>
            This app is created for educational purposes and as a demonstration of React Native
            development.
         </Text>
      </View>
   );
};

export default About;