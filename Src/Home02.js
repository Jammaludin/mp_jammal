import { Text, View, StyleSheet } from "react-native";
import Background from "./Background";
import Btn from "./Btn";

export default function Home(Props) {
    return (
        <Background>
            <View style={{ marginHorizontal: 80, marginVertical: 200, alignItems: 'center',}}>
                <Text style={{ color: 'white', fontSize: 35, }}>Welcome</Text>
                <Text style={{ color: 'white', fontSize: 20, marginBottom: 50, }}></Text>
                <Btn
                    bgColor="rgba(255,0,0,0.6)"
                    textColor="white"
                    btnLabel="Login"
                    Press={() => Props.navigation.navigate('Login')}
                    wBtn={200}
                />
                <Btn
                    bgColor="rgba(0,0,255,0.6)"
                    textColor="white"
                    btnLabel="Sign Up"
                    Press={() => Props.navigation.navigate('SignUp')}
                    wBtn={200}
                />
            </View>
        </Background>
    )
}