import { useState } from "react";
import {
    StyleSheet,
    View,
    FlatList
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function Aplikasi() {
    
    const [tujuanUtama, settujuanUtama] = useState([]);

    function sendButtonHandler(enteredGoalText) {
        settujuanUtama(currenttujuanUtama => [
            ...tujuanUtama,
            {text: enteredGoalText, id: Math.random().toString()},
        ]);
     }

    return (
        <View style={style.container}>
            <GoalInput onAddGoal={ sendButtonHandler } />
            <View style={style.goalsContainer}>
                <FlatList
                    data={tujuanUtama}
                    renderItem={(itemData) => {
                        return <GoalItem text={itemData.item.text} />;
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    } }
                    alwaysBounceVertical={false} />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: 'pink'
    },
    goalsContainer: {
        flex: 4
    },
})