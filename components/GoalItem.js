import { StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalsItem}>
            <Text style={styles.goalsText}>{props.text}</Text>
        </View>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalsItem: {
        margin: 5,
        borderRadius: 10,
        backgroundColor: 'red',
        padding: 10,
    },
    goalsText: {
        color: 'white',
    }
});