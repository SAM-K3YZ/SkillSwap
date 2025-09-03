import { StyleSheet, View } from "react-native";
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import MyColors from "../util/MyColors";
import { TextInput } from "react-native-gesture-handler";

function SearchInput() {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.content}>
                <Ionicons
                    name="search-outline"
                    color={MyColors.textPrimary}
                    size={18}
                    style={{marginEnd: 5}}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="what would you like to learn?"
                    placeholderTextColor={MyColors.textSecondary}
                />
            </View>
        </View>
    );
}

export default SearchInput;

const styles = StyleSheet.create({
    inputContainer: {
        width: '90%',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingStart: 20,
        backgroundColor: MyColors.border
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor: MyColors.success
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: MyColors.textPrimary,
    },
});