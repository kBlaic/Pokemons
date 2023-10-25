import { View, ActivityIndicator } from "react-native";
import { styles } from './styles/styles'

export const capitalizeFirstLetter = (string) => {
   return string.charAt(0).toUpperCase() + string.slice(1);
};

export const modifyNumber = (number) => {
   return number / 10;
};

export const activityIndicator = () => {
   return (
      <View style={styles.activityIndicator}>
         <ActivityIndicator size="large" color="#0000ff" />
      </View>
   );
};