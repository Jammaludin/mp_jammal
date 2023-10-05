import { ImageBackground, View } from "react-native";

export default function Background({ children }) {
    return (
        <View>
            <ImageBackground
                source={require('../assets/bg.jpg')}
                style={{ height: '100%', width: '100%' }} />
            <View style={{position: 'absolute'}}>{ children }</View>
        </View>
    )
}