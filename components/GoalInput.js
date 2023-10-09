import { useState } from "react";
import { Button, StyleSheet, View, TextInput } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setenteredGoalText] = useState('');

    function goalsInputHandler(enteredText) {
        setenteredGoalText(enteredText);
    }

    function sendButtonHandler() {
        props.onAddGoal(enteredGoalText);
        setenteredGoalText('');
    }
    
    return (
        <View style={style.inputContainer}>
                <TextInput
                    style={style.textInput}
                    placeholder="Ketik disini"
                    onChangeText={goalsInputHandler}
                    value={enteredGoalText}
                />
                <Button
                    title="Send"
                    onPress={sendButtonHandler}
                />
            </View>
    )
};

export default GoalInput;

const style = StyleSheet.create({
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
        backgroundColor: 'white',
        borderRadius: 5,
    },
})