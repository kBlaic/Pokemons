import React from "react";
import { View, Text, Image, Pressable} from 'react-native';
import { styles } from "../styles/styles";
import { capitalizeFirstLetter } from "../utils";

const Card = ({ pokemon, onPress }) => {
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
};

export default Card;