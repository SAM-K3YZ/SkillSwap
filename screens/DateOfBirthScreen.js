import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState, useRef } from 'react';
import { Calendar } from 'react-native-calendars';
import MyColors from '../util/MyColors';
import MyFonts from '../util/MyFonts';

function DateOfBirthScreen({ navigation }) {
    const today = new Date();
    const currentYear = today.getFullYear();
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(String(today.getMonth() + 1).padStart(2, '0'));
    const [selectedYear, setSelectedYear] = useState(String(currentYear));
    const previousMonthRef = useRef(parseInt(selectedMonth));
    const previousYearRef = useRef(parseInt(selectedYear));

    const months = [
        { label: 'January', value: '01' },
        { label: 'February', value: '02' },
        { label: 'March', value: '03' },
        { label: 'April', value: '04' },
        { label: 'May', value: '05' },
        { label: 'June', value: '06' },
        { label: 'July', value: '07' },
        { label: 'August', value: '08' },
        { label: 'September', value: '09' },
        { label: 'October', value: '10' },
        { label: 'November', value: '11' },
        { label: 'December', value: '12' },
    ];

    const years = Array.from({ length: currentYear - 1899 }, (_, i) => String(currentYear - i));

    const getCurrentDate = () => `${selectedYear}-${selectedMonth}-01`;

    const handleNext = () => {
        if (selectedDate) {
            navigation.navigate('Profession', { dob: selectedDate });
        }
    };

    const handleMonthChange = (date) => {
        const newMonth = date.month;
        const newYear = date.year;

        setSelectedMonth(String(newMonth).padStart(2, '0'));
        setSelectedYear(String(newYear));

        previousMonthRef.current = newMonth;
        previousYearRef.current = newYear;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Your Date of Birth</Text>

            <View style={styles.dropdownContainer}>
                <Picker
                    selectedValue={selectedMonth}
                    style={styles.picker}
                    onValueChange={(value) => {
                        setSelectedMonth(value);
                    }}
                >
                    {months.map((month) => (
                        <Picker.Item key={month.value} label={month.label} value={month.value} />
                    ))}
                </Picker>

                <Picker
                    selectedValue={selectedYear}
                    style={styles.picker}
                    onValueChange={(value) => {
                        setSelectedYear(value);
                    }}
                >
                    {years.map((year) => (
                        <Picker.Item key={year} label={year} value={year} />
                    ))}
                </Picker>
            </View>

            <Calendar
                key={`${selectedYear}-${selectedMonth}`}
                current={getCurrentDate()}
                onDayPress={(day) => setSelectedDate(day.dateString)}
                onMonthChange={handleMonthChange}
                markedDates={
                    selectedDate ? { [selectedDate]: { selected: true, selectedColor: MyColors.primary } } : {}
                }
                maxDate={today.toISOString().split('T')[0]}
                theme={{
                    selectedDayBackgroundColor: MyColors.primary,
                    todayTextColor: MyColors.primary,
                    textDayFontFamily: MyFonts.regular,
                    textMonthFontFamily: MyFonts.semiBold,
                    arrowColor: MyColors.primary,
                }}
            />

            <Pressable
                style={({ pressed }) => [
                    styles.nextBtn,
                    {
                        opacity: pressed ? 0.5 : 1,
                        backgroundColor: selectedDate ? MyColors.primary : MyColors.border,
                    },
                ]}
                onPress={handleNext}
                disabled={!selectedDate}
            >
                <Text style={styles.nextText}>Next</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: MyColors.background,
    },
    title: {
        fontSize: 22,
        fontFamily: MyFonts.semiBold,
        color: MyColors.primary,
        marginBottom: 20,
        textAlign: 'center',
        marginTop: 50,
    },
    dropdownContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    picker: {
        flex: 1,
        height: 50,
        color: MyColors.textPrimary,
    },
    nextBtn: {
        marginTop: 30,
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    nextText: {
        fontSize: 18,
        fontFamily: MyFonts.semiBold,
        color: MyColors.surface,
    },
});

export default DateOfBirthScreen;