import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ContactDetailScreen() {
    const { contact } = useLocalSearchParams();
    const router = useRouter();
    const parsed = JSON.parse(contact);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.back} onPress={() => router.back()}>
                <Text style={styles.backText}>← Profile contact</Text>
            </TouchableOpacity>

            <View style={styles.header}>
                <Image source={{ uri: parsed.picture.large }} style={styles.avatar} />
                <Text style={styles.name}>{`${parsed.name.first} ${parsed.name.last}`}</Text>
                <Text style={styles.phone}>📞 {parsed.phone}</Text>
            </View>

            <View style={styles.infoBox}>
                <InfoRow icon="envelope" label="Email" value={parsed.email} />
                <InfoRow icon="phone" label="Work" value={parsed.cell} />
                <InfoRow icon="mobile" label="Personal" value={parsed.phone} />
            </View>
        </View>
    );
}

function InfoRow({ icon, label, value }) {
    return (
        <View style={styles.row}>
            <Icon name={icon} size={20} style={{ width: 30 }} />
            <View>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.value}>{value}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    back: { margin: 15 },
    backText: { fontSize: 16, color: '#333' },
    header: { alignItems: 'center', backgroundColor: 'blue', padding: 20 },
    avatar: { width: 100, height: 100, borderRadius: 50 },
    name: { color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 10 },
    phone: { color: 'white', fontSize: 16, marginTop: 5 },
    infoBox: { padding: 20 },
    row: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
    label: { fontWeight: 'bold' },
    value: { color: 'blue' },
});
