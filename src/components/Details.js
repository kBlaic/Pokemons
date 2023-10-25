import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image } from 'react-native';
import axios from 'axios';
import { activityIndicator, capitalizeFirstLetter, modifyNumber } from '../utils';
import { styles } from '../styles/styles';
import DetailItem from './DetailItem';
import DetailsListItem from './DetailListItem';

const Details = ({ route }) => {
   const { pokemon } = route.params;
   const pokemonName = pokemon.name;
   const [loading, setLoading] = useState(true);
   const [pokemonDetails, setPokemonDetails] = useState(null);

   useEffect(() => {
      const fetchPokemonDetails = async () => {
         try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            const basicDetails = response.data;

            const moves = basicDetails.moves.slice(0, 10).map(move => move.move.name);
            const abilities = basicDetails.abilities.map(ability => ability.ability.name);

            setPokemonDetails({
               name: basicDetails.name,
               exp: basicDetails.base_experience,
               height: basicDetails.height,
               weight: basicDetails.weight,
               abilities,
               moves,
            });
            
         } catch (error) {
            console.error('Error fetching Pokemon details: ', error);
         } finally {
            setLoading(false);
         }
      };

      fetchPokemonDetails();
   }, [pokemonName]);

   if (loading) {
      return (activityIndicator());
    }

   return (
      <ScrollView contentContainerStyle={styles.container}>
         <Image 
               style={styles.detailImage}
               source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6].replace(/\D/g, '')}.png`,}}
         />
         <Text style={styles.detailTitle}>{capitalizeFirstLetter(pokemonDetails.name)}</Text>

         <DetailItem label={'Base experience:'} value={pokemonDetails.exp} unit={'XP'} />
         <DetailItem label={'Height:'} value={modifyNumber(pokemonDetails.height)} unit={'m'} />
         <DetailItem label={'Weight:'} value={modifyNumber(pokemonDetails.weight)} unit={'kg'} />

         <DetailsListItem label={'Abilities:'} value={pokemonDetails.abilities} />
         <DetailsListItem label={'Moves:'} value={pokemonDetails.moves} />
      </ScrollView>
   );
};

export default Details;