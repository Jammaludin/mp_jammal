import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
    return (
        
        <View style={styles.goalsItem}>
            <Pressable android_ripple={{ color: 'white' }} onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressedItem}>
                <Text style={styles.goalsText}>{props.text}</Text>
            </Pressable>
        </View>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalsItem: {
        margin: 5,
        borderRadius: 5,
        backgroundColor: 'red',
        
    },
    pressedItem: {
        opacity: 0.5
    },
    goalsText: {
        color: 'white',
        padding: 10,
    }
});