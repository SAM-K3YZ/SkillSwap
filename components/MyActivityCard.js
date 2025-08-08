import { StyleSheet, Text, View } from "react-native";
import MyColors from "../util/MyColors";
import MyFonts from "../util/MyFonts";

function MyActivityCard({ alpha, title, time, desc }) {
    return (
        <View style={styles.card}>
            <View style={styles.content}>
                <View style={styles.alphaContainer}>
                    <Text style={styles.alpha}>{alpha}</Text>
                </View>
                <View>
                    <View style={styles.top}>
                        <Text style={styles.title}>{title}</Text>
                        <View style={styles.dot}></View>
                        <Text>{time}</Text>
                    </View>
                    <View style={styles.bottom}>
                        <Text>{desc}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default MyActivityCard;

const styles = StyleSheet.create({
    card: {
        width: 330,
        height: 125,
        overflow: 'hidden',
        padding: 15,
        justifyContent: 'center',
    },
    content: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start'
        //backgroundColor: MyColors.background
    },
    alphaContainer: {
        padding: 20,
        borderRadius: 50,
        marginEnd: 15,
        backgroundColor: MyColors.border
    },
    alpha: {
        fontSize: 16,
        fontFamily: MyFonts.medium,
        color: MyColors.textPrimary
    },
    top: {
        width: 200,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        //backgroundColor: MyColors.border,
    },
    title: {
        fontSize: 16,
        fontFamily: MyFonts.medium,
        //backgroundColor: MyColors.error
    },
    dot: {
        width: 5,
        height: 5,
        margin: 5,
        borderRadius: 20,
        backgroundColor: MyColors.border
    }
}); ''