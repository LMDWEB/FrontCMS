import React from "react";
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
// import react-native-web, react-art
export default class ActorContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {isLoading: true}
      }

    componentDidMount(){
        fetch('http://localhost:3000/actors', {
            method: 'GET',
            mode: "cors",
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('token')
            },
        }).then(response => response.json())
        .then((responseJson) => {
            this.setState({
              isLoading: false,
              dataSource: responseJson,
            }, function(){
    
            });
        }).catch((error) =>{
            console.error(error);
        });
    }

    render() {
        if(this.state.isLoading){
            return(
            <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
            </View>
            )
        }
    
        return(
            <View style={{flex: 1, paddingTop:20}}>
            <FlatList
                data={this.state.dataSource}
                renderItem={({item}) => <Text>{item.firstname}, {item.lastname}, {item.nationality}</Text>}
                keyExtractor={({id}, index) => id}
            />
            </View>
        );
    }
}