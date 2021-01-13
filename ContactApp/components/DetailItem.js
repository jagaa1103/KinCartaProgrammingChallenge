import React from "react";
import { View, Text, StyleSheet } from "react-native";
const DetailItem = (props) => {
    return (
        <View style={styles.subView}>
            <Text style={styles.titleText}>{props.label}</Text>
            <Text style={styles.mainText}>{props.text1}</Text>
            <Text style={styles.mainText}>{props.text2}</Text>
            <Text style={styles.thirdText}>{props.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subView: {
        width: "100%",
        minHeight: 60,
        borderColor: "#7f8c8d",
        borderBottomWidth: 0.5,
        paddingTop: 10,
        paddingBottom: 10, 
    },
    titleText: {
        color: "#7f8c8d",
        fontWeight: "bold",
        lineHeight: 30,
    },
    mainText: {
        fontSize: 16
    },
    thirdText: {
        position: "absolute",
        right: 0,
        bottom: 18,
        fontSize: 14,
        color: "#7f8c8d",
    },
});

export default DetailItem;