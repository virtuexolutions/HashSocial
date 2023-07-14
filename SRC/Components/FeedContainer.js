import React from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Platform,
  Text,
  TextInput,
  FlatList,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import Color from '../Assets/Utilities/Color';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';

const FeedContainer = () => {

    // feedsArray =[{
    //     Image : imagePath ,
    //     likes : 2 ,
    //     dislikes : 4 ,
    //     downloads : 4 ,
    //     enabled : true ,
    //     postUser : {
    //     name : steven ,
    //     city : new york ,
    //     profilepicture : imagePath ,
    //     },
    //     views : 22 ,
    //     comments : 20 ,
    //     description : lorem upsum,
        
    //     commentArray : [
    //     {
    //     name : test ,
    //     date : 20/2/2022 ,
    //     message : lorem upsum ,
    //     image : imagePath ,
        
    //     },
    //     ]
    //     },

    //     {
    //     Image : imagePath ,
    //     likes : 2 ,
    //     dislikes : 4 ,
    //     downloads : 4 ,
    //     enabled : true ,
    //     postUser : {
    //     name : steven ,
    //     city : new york ,
    //     profilepicture : imagePath ,
    //     },

    //     views : 22 ,
    //     comments : 20 ,
    //     description : lorem upsum,
        
    //     commentArray : [
    //     {
    //     name : test ,
    //     date : 20/2/2022 ,
    //     message : lorem upsum ,
    //     image : imagePath ,
        
    //     }
    //     ]
    //     },
    //     ]

  return (
    <View style={{width:windowWidth,height:windowHeight,backgroundColor:'red'}}>
     <Text>Feed</Text>
    </View>
  )
}

export default FeedContainer

const styles = StyleSheet.create({


})