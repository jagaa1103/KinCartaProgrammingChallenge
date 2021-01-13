import React from "react";
import { TouchableOpacity,  Text, Image, StyleSheet, View } from "react-native";

const ListItem = (props) => {
    const renderFavIcon = () => {
        if (props.contact.isFavorite) return <Image source={require("../images/star.png")} style={styles.favIcon} resizeMode="stretch" />
        return <View style={styles.favIcon}></View>;
    }
    return (
        <TouchableOpacity style={styles.container} onPress={()=> props.onPress(props.contact)}>
            <Image source={{uri: props.contact.smallImageURL}} style={styles.image} resizeMode="stretch" />
            {renderFavIcon()}
            <View>
                <Text style={styles.nameText}>{props.contact.name}</Text>
                <Text style={styles.addressText}>{props.contact.companyName ? props.contact.companyName : ""}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        padding: 20,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#ecf0f1"
    },
    image: {
        height: "100%",
        aspectRatio: 1,
    },
    nameText: {
        fontSize: 22,
        color: "#34495e",
        lineHeight: 30,
    },
    addressText: {
        fontSize: 14,
        color: "#7f8c8d",
        lineHeight: 20
    },
    favIcon: {
        width: 30,
        margin: 10,
        alignContent: "center",
        aspectRatio: 1
    }
});

export default ListItem;
