import { useState } from "react";
import {
    StyleSheet,
    View,
    FlatList
} from "react-native";
import GoalItem from "./componentss/GoalItemm";
import GoalInput from "./componentss/GoalInputt";

export default function Aplikasi() {
    
    const [tujuanUtama, settujuanUtama] = useState([]);

    function sendButtonHandler(enteredGoalText) {
        settujuanUtama(currenttujuanUtama => [
            ...tujuanUtama,
            {text: enteredGoalText, id: Math.random().toString()},
        ]);
    }
    
    function deleteGoalHandler(id) {
        settujuanUtama(currenttujuanUtama => {
            return currenttujuanUtama.filter((goal) => goal.id !== id);
        });
    }

    return (
        <View style={style.container}>
            <GoalInput onAddGoal={ sendButtonHandler } />
            <View style={style.goalsContainer}>
                <FlatList
                    data={tujuanUtama}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem
                                text={itemData.item.text}
                                id={itemData.item.id}
                                onDeleteItem={deleteGoalHandler}
                        />);
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