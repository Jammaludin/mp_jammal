import { Text, View, StyleSheet } from "react-native";
import Background from "./Background";
import Btn from "./Btn";

export default function Home(Props) {
    return (
        <Background>
            <View style={{ marginHorizontal: 95, marginVertical: 300, alignItems: 'center'}}>
                <Text style={{ color: 'white', fontSize: 35, }}>Let's Start</Text>
                <Text style={{ color: 'white', fontSize: 20, marginBottom: 50 }}>Use Aplication</Text>
                <Btn
                    bgColor="rgba(255,0,0,0.6)"
                    textColor="white"
                    btnLabel="Login"
                    wBtn={150}
                />
                <Btn
                    bgColor="rgba(0,0,255,0.6)"
                    textColor="white"
                    btnLabel="Sign Up"
                    wBtn={150}
                />
            </View>
        </Background>
    )
}