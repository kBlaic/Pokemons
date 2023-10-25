import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   activityIndicator: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
   },

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

   container: {
      flexGrow: 1,
      alignItems: 'center',
      padding: 16,
   },

   detailImage: {
      width: 200,
      height: 200,
      marginBottom: 16,
   },

   detailTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
   },

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

   aboutContainer: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
   },

   aboutText: {
      fontSize: 16,
      marginBottom: 10,
   },

   link: {
      fontSize: 16,
      color: 'blue',
      textDecorationLine: 'underline',
      marginBottom: 10,
   },
});