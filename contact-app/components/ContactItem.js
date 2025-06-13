import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ContactItem({ item, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Image source={{ uri: item.picture.thumbnail }} style={styles.avatar} />
            <View>
                <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
                <Text style={styles.phone}>{item.phone}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 0.5,
        alignItems: 'center',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 12,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    phone: {
        color: 'blue',
    },
});
