import { useRouter } from 'expo-router'; // ✅ import router
import { useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ContactItem from '../components/ContactItem';
import { fetchContacts } from '../store/contactsSlice';

export default function ContactListScreen() {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.contacts);
    const router = useRouter(); // ✅ use router

    useEffect(() => {
        dispatch(fetchContacts());
    }, []);

    if (loading) {
        return <ActivityIndicator style={{ marginTop: 50 }} size="large" />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.login.uuid}
                renderItem={({ item }) => (
                    <ContactItem
                        item={item}
                        onPress={() => router.push({ pathname: 'contact-detail', params: { contact: JSON.stringify(item) } })}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});
