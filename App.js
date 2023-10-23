import { SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import ProductList from "./component/ProductList";

export default function App() {
    const { colorScheme, toggleColorScheme } = useColorScheme();
    return (
        <View className="flex-1 items-center justify-center bg-white dark:bg-black">
            <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
            <Text className="dark:text-white text-2xl font-bold">New Collection</Text>
            <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark' } />
            <ProductList />
        </View>
    )
}