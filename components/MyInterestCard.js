import { StyleSheet, View, Text, Pressable } from "react-native";
import MyColors from "../util/MyColors";
import { FontAwesome6 } from '@expo/vector-icons';
import MyFonts from "../util/MyFonts";

function MyInterestCard({ title, description, style }) {

    function toMyInterestPage() {
        console.log('Going to my interest page...')
    }

    return (
        <Pressable
            onPress={toMyInterestPage}
        >
            <View style={[styles.card, style]}>
                <View style={styles.top}>
                    <FontAwesome6
                        name='hashtag'
                        size={20}
                        color={MyColors.textPrimary}
                        style={styles.icon}
                    />
                    <Text
                        style={styles.title}>{title}
                    </Text>
                </View>
                <View style={styles.bottom}>
                    <Text
                        style={styles.description}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >
                        {description}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
}

export default MyInterestCard;

const styles = StyleSheet.create({
    card: {
        width: 300,
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
    top: {
        flexDirection: 'row',
    },
    icon: {
        marginEnd: 10,
    },
    title: {
        fontSize: 20,
        fontFamily: MyFonts.medium
    },
    description: {
        fontSize: 14,
        color: MyColors.textSecondary
    }
});