import { StyleSheet, View, Text } from "react-native";
import MyColors from "../util/MyColors";
import { MaterialIcons } from '@expo/vector-icons';
import MyFonts from "../util/MyFonts";

function SessionHistoryCard({ title, style }) {
    return (
        <View style={[styles.card, style]}>
            <View style={styles.content}>
                <View
                    style={styles.icon}
                >
                    <MaterialIcons
                        name='movie'
                        size={20}
                        color={MyColors.textPrimary}
                    />
                </View>
                <Text
                    style={styles.title}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                >
                    {title}
                </Text>
            </View>
        </View>
    );
}

export default SessionHistoryCard;

const styles = StyleSheet.create({
    card: {
        width: 330,
        height: 125,
        overflow: 'hidden',
        padding: 15,
        justifyContent: 'center',
        shadowColor: MyColors.border,
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 2,
            height: 5
        },
        elevation: 5,
        margin: 10,
        borderRadius: 20,
        backgroundColor: MyColors.surface,
    },
    content: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        //backgroundColor: MyColors.background
    },
    icon: {
        marginEnd: 10,
        padding: 10,
        borderRadius: 30,
        backgroundColor: MyColors.border,
    },
    title: {
        width: 240,
        fontSize: 20,
        fontFamily: MyFonts.medium,
        //backgroundColor: MyColors.error
    },
});