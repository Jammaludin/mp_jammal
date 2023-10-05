import { Button, View, Text } from "react-native";

export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.navigate('Notif')} title="Go to Notifications" />
            <Text>ini halaman home</Text>
        </View>
    )
}