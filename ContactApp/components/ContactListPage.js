import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, SectionList, StyleSheet } from "react-native";
import { getContactList, splitContactsByFavorite } from "../service/apiService";
import ListItem from "./ListItem";

const ContactListPage = ({navigation}) => {
    const [contacts, setContactList] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => loadData());
        return unsubscribe;
    }, [navigation]);    

    const loadData = async () => {
        await getContactList();
        let splittedData = splitContactsByFavorite();
        setContactList(splittedData);
    }

    const selectedContact = (contact) => {
        navigation.push("ContactDetail", {contact: contact});
    }

    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={contacts}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => <ListItem onPress={selectedContact} contact={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionTitle}>{title}</Text>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },

    sectionTitle: {
        width: "100%",
        height: 30,
        paddingLeft: 20,
        backgroundColor: "#ecf0f1",
        lineHeight: 30,
        color: "#2c3e50"
    }
});

export default ContactListPage;