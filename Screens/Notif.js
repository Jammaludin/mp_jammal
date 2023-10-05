import { Button, View, Text } from "react-native";

export default function Notif({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
            <Text>ini halaman home</Text>
        </View>
    )
}