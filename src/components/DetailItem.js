import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const DetailItem = ({ label, value, unit }) => {
   return (
      <View style={styles.detailContainer}>
         <Text style={styles.detailLabel}>{label}:</Text>
         <Text style={styles.detailValue}>{value} {unit}</Text>
      </View>
   );
};

export default DetailItem;

const styles = StyleSheet.create({
   detailContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 10,
   },

   detailLabel: {
      fontSize: 16,
      fontWeight: 'bold',
   },

   detailValue: {
      fontSize: 16,
   },
});