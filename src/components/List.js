import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';
import Card from './Card';
import { activityIndicator } from '../utils';
 
const List = ({ navigation }) => {
   const [loading, setLoading] = useState(true);
   const [pokemonList, setPokemonList] = useState([]);

   useEffect(() => {
      const fetchPokemons = async () => {
         try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=30');
            setPokemonList(response.data.results);
         } catch (error) {
            console.error('Error fetching Pokemon data: ', error);
         } finally {
            setLoading(false);
         }
      };

      fetchPokemons();
   }, []);

   if (loading) {
      return (activityIndicator());
   }

   return (
      <FlatList
         data={pokemonList}
         keyExtractor={(item) => item.name}
         renderItem={({ item }) => (
            <Card pokemon={item}
               onPress={() => navigation.navigate('Details', { pokemon: item })}
            />
         )}
      />
   );

};

export default List;