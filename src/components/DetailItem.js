import React from "react";
import { View, Text } from 'react-native';
import { styles } from "../styles/styles";

const DetailItem = ({ label, value, unit }) => {
   return (
      <View style={styles.detailContainer}>
         <Text style={styles.detailLabel}>{label}</Text>
         <Text style={styles.detailValue}>{value} {unit}</Text>
      </View>
   );
};

export default DetailItem;