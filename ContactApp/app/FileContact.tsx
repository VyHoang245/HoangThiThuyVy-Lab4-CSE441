import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ContactListItem from "./ContactListITem";

const Contacts = ({ navigation }) => {
    const [data, setData] = useState([]);
    const filePath = 'https://randomuser.me/api/?results=50';

    useEffect(() => {
        axios.get(filePath)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    const renderContacts = ({ item }) => {
        const { name, avatar, phone } = item;
        return (
            <ContactListItem
                name={name}
                avatar={avatar}
                phone={phone}
                onPress={() => navigation.navigate("ProfileContact", { contact: item })} />
        )
    };

    return (
        <View style={styles.container}>
            <FlatList data={data}
                renderItem={renderContacts} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
    }
});

export default Contacts;