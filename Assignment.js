import {View, Text} from 'react-native';

function Assignment() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'space-between',
        padding: 10,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{backgroundColor: 'red', height: 50, width: 50}}></View>
        <View style={{backgroundColor: 'red', height: 50, width: 50}}></View>
        <View style={{backgroundColor: 'red', height: 50, width: 50}}></View>
        <View style={{backgroundColor: 'red', height: 50, width: 50}}></View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: 'red', flex: 0.46}}></View>
        <View style={{backgroundColor: 'red', height: 50, width: 50}}></View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'flex-end', gap: 65}}>
        <View
          style={{
            backgroundColor: 'red',
            height: 50,
            width: 170,
          }}></View>

        <View style={{backgroundColor: 'red', height: 50, width: 50}}></View>
      </View>

      <View style={{backgroundColor: 'red', flex: 0.5}}></View>

      <View style={{backgroundColor: 'red', flex: 0.2}}></View>

      <View style={{backgroundColor: 'red', flex: 0.1, borderRadius: 1}}></View>
    </View>
  );
}

export default Assignment;
