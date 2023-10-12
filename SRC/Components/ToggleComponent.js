import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const ToggleComponent = (
  navigation,
  selectionMode,
  roundCorner,
  option1,
  option2,
  onSelectSwitch,
  selectionColor,
) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const [getRoundCorner, setRoundCorner] = useState(roundCorner);

  const updatedSwitchData = val => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  return (
    <View>
      <View
        style={{
          height: 44,
          width: 100,
          backgroundColor: 'white',
          borderRadius: getRoundCorner ? 25 : 0,
          borderWidth: 1,
          borderColor: selectionColor,
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 2,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 1 ? selectionColor : 'red',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: getSelectionMode == 1 ? 'white' : selectionColor,
            }}>
            {option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}
          style={{
            flex: 1,

            backgroundColor: getSelectionMode == 2 ? selectionColor : 'white',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: getSelectionMode == 2 ? 'white' : selectionColor,
            }}>
            {option2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToggleComponent;


//   container: {
//     width: 50,
//     height: 30,
//     borderRadius: 15,
//     justifyContent: 'center',
//     padding: 2,
//   },
//   activeContainer: {
//     backgroundColor: 'green',
//   },
//   inactiveContainer: {
//     backgroundColor: 'gray',
//   },
//   circle: {
//     width: 26,
//     height: 26,
//     borderRadius: 13,
//     backgroundColor: 'white',
//   },
//   activeCircle: {
//     backgroundColor: 'green',
//     transform: [{translateX: 30}],
//   },
//   inactiveCircle: {
//     backgroundColor: 'gray',
//     transform: [{translateX: 2}],
//   },
// });
