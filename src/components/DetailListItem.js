import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { capitalizeFirstLetter } from "../utils";

const DetailListItem = ({ label, value }) => {
   return (
      <View style={styles.detailContainer}>
         <Text style={styles.sectionHeader}>{label}</Text>
         {value.map((data, index) => (
            <Text key={index + '-' + data} style={styles.listItem}>{capitalizeFirstLetter(data)}</Text>
         ))}
      </View>
   );
};

export default DetailListItem;

const styles = StyleSheet.create({
   detailContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 10,
   },

   sectionHeader: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 16,
      marginBottom: 8,
   },

   listItem: {
      fontSize: 16,
      marginBottom: 8,
   },
});
