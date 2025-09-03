import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome6, Ionicons, FontAwesome5 } from '@expo/vector-icons'

import MyColors from "../util/MyColors";
import { useState } from "react";
import MyFonts from "../util/MyFonts";

function TimelineCard({ alpha, username, categories, post, hashtag }) {

    const [liked, setLiked] = useState(false);

    return (
        <View style={styles.cardContainer}>
            <View style={styles.top}>
                <View style={styles.userDetails}>
                    <View style={styles.alphaCircle}>
                        <Text style={styles.alphaText}>{alpha}</Text>
                    </View>
                    <View style={styles.usernameCateg}>
                        <View><Text style={styles.usernameText}>{username}</Text></View>
                        <View><Text style={styles.categoryText}>{categories}</Text></View>
                    </View>
                </View>
                <View style={styles.ellipsis}>
                    <FontAwesome6
                        name='ellipsis-vertical'
                        color={MyColors.textPrimary}
                        size={18}
                    />
                </View>
            </View>

            <View style={styles.middle}>
                <Text style={styles.postText}>{post}</Text>
                <Text style={styles.hashtag}>{hashtag}</Text>
            </View>

            <View style={styles.bottom}>
                <Pressable
                    style={styles.likeBtn}
                    onPress={() => {
                        setLiked(!liked);
                        console.log("Liked/Unliked...");
                    }}
                >
                    <Ionicons
                        name={liked ? "heart" : "heart-outline"}
                        color={liked ? MyColors.error : MyColors.textSecondary}
                        size={20}
                    />
                </Pressable>

                <Pressable
                    style={styles.commentBtn}
                    onPress={() => {
                        console.log("Commented/Uncommented...");
                    }}
                >
                    <FontAwesome5
                        name='comment'
                        color={MyColors.textSecondary}
                        size={18}
                    />
                </Pressable>

                <Pressable
                    style={styles.likeBtn}
                    onPress={() => {
                        console.log("Liked/Unliked...");
                    }}
                >
                    <Ionicons
                        name='share-outline'
                        color={MyColors.textSecondary}
                        size={20}
                    />
                </Pressable>
            </View>

        </View>
    );
}

export default TimelineCard;

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        padding: 20,
        marginVertical: 20,
        marginHorizontal: 20,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: MyColors.textSecondary,
        backgroundColor: MyColors.surface
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //backgroundColor: MyColors.success,
    },
    userDetails: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    alphaCircle: {
        width: 50,
        height: 50,
        marginEnd: 10,
        justifyContent: 'center',
        padding: 10,
        borderRadius: 30,
        backgroundColor: MyColors.border,
    },
    alphaText: {
        width: 240,
        fontSize: 20,
        fontFamily: MyFonts.medium,
        //backgroundColor: MyColors.error
    },
    usernameText: {
        fontSize: 18,
        fontFamily: MyFonts.medium,
        color: MyColors.textPrimary,
    },
    categoryText: {
        fontSize: 14,
        fontFamily: MyFonts.regular,
    },
    middle: {
        marginVertical: 15,
    },
    postText: {
        color: MyColors.textPrimary,
        fontSize: 18,
        fontFamily: MyFonts.regular,
        marginBottom: 10,
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});