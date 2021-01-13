import React, { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet } from "react-native";

import FavButton from "./FavButton";
import DetailItem from "./DetailItem";
import { setFavorite } from "../service/apiService";

const ContactDetailPage = ({ navigation, route }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "",
            headerRight: () => <FavButton isFav={route.params.contact.isFavorite} onPress={()=> setFavorite(route.params.contact)} />,
        })
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.avatarField}>
                    <Image style={styles.avatar} source={{uri: route.params.contact.largeImageURL}} />
                    <Text style={styles.nameText}>{route.params.contact.name}</Text>
                    <Text style={styles.companyText}>{route.params.contact.companyName}</Text>
                </View>

                <DetailItem label="PHONE:" text1={route.params.contact.phone.home}   description="Home" />
                <DetailItem label="PHONE:" text1={route.params.contact.phone.mobile} description="Mobile" />
                <DetailItem label="PHONE:" text1={route.params.contact.phone.work}   description="Work" />
                <DetailItem label="ADDRESS:" text1={route.params.contact.address.street} text2={route.params.contact.address.city + ", " + route.params.contact.address.state + " " + route.params.contact.address.zipCode +", "+route.params.contact.address.country}  />
                <DetailItem label="BIRTHDAY:" text1={route.params.contact.birthdate} />
                <DetailItem label="EMAIL:" text1={route.params.contact.emailAddress} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 20,
    },
    scrollView: {
        padding: 20,
    },
    avatarField: {
        width: "100%",
        padding: 30,
        alignItems: "center"
    },
    avatar: {
        height: 100,
        aspectRatio: 1,
    },
    nameText: {
        fontSize: 30,
    },
    companyText: {
        fontSize: 14,
        color: "#7f8c8d",        
    }
});

export default ContactDetailPage;