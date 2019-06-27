import React from "react";


var bgColors = { "Default": "#81b71a",
                    "Blue": "#295182", // rgb(41, 81, 130)
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#ffffff", // rgb(255, 255, 255)
                    "Yellow": "#fde100",// rgb(253, 225, 0)
                    "Black": "#000000",//rgb(0, 0, 0)

};

var ContainerStyle = {
    backgroundImage: "url(" + "https://medias.lequipe.fr/img-photo-jpg/-/1500000001175070/0:354,2500:1504-1305-600-75/8c9a7.jpg" + ")",
}

export default class ChampionshipContainer extends React.Component {
    render() {
        return (
            <main id='col-main'>
            </main>
        );
    }
}