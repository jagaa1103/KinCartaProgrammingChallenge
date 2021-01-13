import React, { useState } from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const FavButton = (props) => {
    const [isFav, toggleFav] = useState(props.isFav);
    const clicked = () => {
        toggleFav(!isFav);
        props.onPress();
    }
    return (
        <TouchableOpacity onPress={()=> clicked()}>
            <Image source={isFav ? require("../images/star.png") : require("../images/star2.png")} style={styles.icon} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    icon: {
        height: 25,
        aspectRatio: 1,
        marginRight: 20
    }
});


export default FavButton;