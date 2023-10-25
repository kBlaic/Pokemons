import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const ActivityIndicatorComponent = () => {
    return (
        <View style={styles.activityIndicator}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};

export default ActivityIndicatorComponent;

const styles = StyleSheet.create({
    activityIndicator: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
 });