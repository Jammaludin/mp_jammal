import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";

export default function Aplikasi() {
    const [enteredGoalText, setenteredGoalText] = useState('');
    const [tujuanUtama, settujuanUtama] = useState([]);
    function goalsInputHandler(enteredText) {
        setenteredGoalText(enteredText);
     };

    function sendButtonHandler() {
        settujuanUtama(currenttujuanUtama => [
            ...tujuanUtama,
            enteredGoalText
        ]);
     };

    return (
        <View style={style.container}>
            <View style={style.inputContainer}>
                <TextInput
                    style={style.textInput}
                    placeholder="Ketik disini"
                    onChangeText={goalsInputHandler}
                />
                <Button
                    title="Send"
                    onPress={sendButtonHandler}
                />
            </View>
            <View style={style.goalsContainer}>
                <ScrollView>
                {tujuanUtama.map((goals) => (
                    <View
                        style={style.goalsItem}
                        key={goals}>
                    <Text style={style.goalsText}>{goals}</Text>
                    </View>
                ))}
                </ScrollView>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: 'purple'
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
        borderBottomColor: 'black',
        
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'white',
        width: '80%',
        padding: 5,
        backgroundColor: 'white'
    },
    goalsContainer: {
        flex: 4
    },
    goalsItem: {
        margin: 5,
        borderRadius: 10,
        backgroundColor: 'red',
        padding: 10,
    },
    goalsText: {
        color: 'white',
    }
})