import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        icoName: "weather-fog",
        gradient: ["#77A1D3", "#79CBCA", "#E684AE"],
        title: "Haze",
        subTitle: "심한 안개니까 앞이 안보여유"
    },
    Thunderstorm: {
        icoName: "weather-lightning",
        gradient: ["#0f0c29","#302b63","#24243e"],
        title: "Thunderstorm",
        subTitle: "번개 많이 치고 있어유"
    },
    Drizzle: {
        icoName: "weather-rainy",
        gradient: ["#314755","#26a0da"],
        title: "이슬비",
        subTitle: "이슬비가 내려서 짜증나유"
    },
    Rain: {
        icoName: "weather-pouring",
        gradient: ["#1488CC","#2B32B2"],
        title: "Rain",
        subTitle: "비내려서 더 짜증나유 ㅠ"
    },
    Snow: {
        icoName: "weather-snowy",
        gradient: ["#2193b0","#6dd5ed"],
        title: "Snow",
        subTitle: "눈내려서 너무 좋아유~"
    },
    Clear: {
        icoName: "weather-sunny",
        gradient: ["#e65c00","#F9D423"],
        title: "Clear",
        subTitle: "날씨 한번 좋구만"
    },
    Clouds: {
        icoName: "weather-cloudy",
        gradient: ["#2B32B2","#536976"],
        title: "Cloudy",
        subTitle: "구름이 햇빛을 다 가려요"
    },
    Mist: {
        icoName: "weather-fog",
        gradient: ["#00416A","#E4E5E6"],
        title: "Mist",
        subTitle: "또 안개 꼇어유"
    },
    Dust: {
        icoName: "weather-fog",
        gradient: ["#603813","#b29f94"],
        title: "황사",
        subTitle: "황사 진짜 다 없애버리고 싶넹"
    }

}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.conatiner}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].icoName || "weather-sunset"} color="white" />
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze", "Mist", "Dust"]).isRequired
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "100",
        marginBottom: 10
    },
    subTitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start",
        marginLeft: 10
    }
});