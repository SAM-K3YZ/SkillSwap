import { Animated } from "react-native";

const  PaginationProps =({data, scrollX}) => {
    data: any[];
    scrollX: Animated.Value;
}

const  NextButtonProps {
    scrollTo: () => void;
}

const  OnBoardingScreenProps{
    item: {
        id: string,
        image: any;
        title: string;
        description: string;
    };
}