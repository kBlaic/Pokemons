import React from "react";
import { View, Text } from 'react-native';
import { styles } from "../styles/styles";
import { capitalizeFirstLetter } from "../utils";

const DetailListItem = ({ label, value }) => {
   return (
      <View style={styles.detailContainer}>
         <Text style={styles.sectionHeader}>{label}</Text>
         {value.map((data, index) => (
            <Text key={index} style={styles.listItem}>{capitalizeFirstLetter(data)}</Text>
         ))}
      </View>
   );
};

export default DetailListItem;