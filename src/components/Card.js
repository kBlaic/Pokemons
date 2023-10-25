import React from "react";
import { View, Text, Image, Pressable, StyleSheet} from 'react-native';
import { capitalizeFirstLetter } from "../utils";

const Card = React.memo(({ pokemon, onPress }) => {
   return (
      <Pressable onPress={onPress}>
         <View style={styles.card}>
            <Image 
               style={styles.cardImage}
               source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6].replace(/\D/g, '')}.png`,}}
            />
            <Text style={styles.cardTitle}>{capitalizeFirstLetter(pokemon.name)}</Text>
         </View>
      </Pressable>
   );
});

export default Card;

const styles = StyleSheet.create({
   card: {
      backgroundColor: '#b7d7e8',
      borderRadius: 10,
      padding: 20,
      margin: 8,
      alignItems: 'center',
   },

   cardImage: {
      width: 100,
      height: 100,
   },

   cardTitle: {
      fontSize: 18,
      marginTop: 8,
   },
});