import { Text, View } from "react-native";

const ProfileContact = ({ route }) => {
    const { contact } = route.params;
    const { id, avatar, name, email, phone, cell, favorite } = contact;

    return (
        <View>
            <Text>Name: {name}</Text>
        </View>
    )
}

export default ProfileContact;