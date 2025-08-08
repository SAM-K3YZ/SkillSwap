import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'

import MyColors from "../util/MyColors";
import MyFonts from "../util/MyFonts";

function SaveResourcesCard({ title }) {
    return (
        <View style={styles.card}>
            <View style={styles.content}>
                <Text
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    style={styles.title}
                >
                    {title}
                </Text>
                <Pressable
                    style={styles.icon}
                >
                    <FontAwesome
                        name="bookmark"
                        size={18}
                        color={MyColors.textPrimary}
                    />
                </Pressable>
            </View>
        </View>
    );
}

export default SaveResourcesCard;

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
        justifyContent: 'space-between'
        //backgroundColor: MyColors.background
    },
    icon: {
        margin: 15,
        // backgroundColor: MyColors.border,
    },
    title: {
        width: 240,
        fontSize: 20,
        fontFamily: MyFonts.medium,
        //backgroundColor: MyColors.error
    },
});