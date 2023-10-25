import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';
import Card from '../components/Card';
import ActivityIndicatorComponent from '../components/ActivityIndicatorComponent';
 
const ListScreen = ({ navigation }) => {
   const [offset, setOffset] = useState(0);
   const [loading, setLoading] = useState(true);
   const [pokemonList, setPokemonList] = useState([]);

   const fetchPokemons = async (newOffset) => {
      try {
         setLoading(true);
         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=60&offset=${newOffset}`);
         const newPokemons = response.data.results;
         setPokemonList((prevPokemons) => [...prevPokemons, ...newPokemons]);
      } catch (error) {
         console.error('Error fetching Pokemon data: ', error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchPokemons(offset);
   }, [offset]);

   const handleEndReached = () => {
      const newOffset = offset + 60;
      setOffset(newOffset);
   };

   if (loading) {
      return <ActivityIndicatorComponent />;
   }

   return (
      <FlatList
         data={pokemonList}
         keyExtractor={(item) => item.name}
         renderItem={({ item }) => (
            <Card
               key={item.name}
               pokemon={item}
               onPress={() => navigation.navigate('Details', { pokemon: item })}
            />
         )}
         onEndReached={handleEndReached}
         onEndReachedThreshold={0.1}
      />
   );

};

export default ListScreen;