import { useRouter } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function FavoritesScreen() {
    const { data } = useSelector((state) => state.contacts);
    const router = useRouter();

    // Example filter: You can mark favorites based on `login.uuid` or random condition
    const favorites = data.slice(0, 5); // Simulating favorites

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favorites</Text>
            <FlatList
                data={favorites}
                numColumns={3}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            router.push({
                                pathname: 'contact-detail',
                                params: { contact: JSON.stringify(item) },
                            })
                        }
                        style={styles.avatarWrapper}
                    >
                        <Image source={{ uri: item.picture.large }} style={styles.avatar} />
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.login.uuid}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#eee', paddingTop: 20 },
    title: { fontSize: 20, fontWeight: 'bold', marginLeft: 10, marginBottom: 10 },
    list: { alignItems: 'center' },
    avatarWrapper: { margin: 10 },
    avatar: { width: 80, height: 80, borderRadius: 40, borderWidth: 2, borderColor: '#fff' },
});
