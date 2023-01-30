/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Button
} from 'react-native';
import {Icon} from '@mrkpatchaa/react-native-ionicons';
import {Icons} from '@mrkpatchaa/react-native-ionicons/src/map';

const names = Object.keys(Icons);

function PickerItem({tag, selection, setSelection}) {
  return (
    <TouchableOpacity
      style={{padding: 6}}
      onPress={() => {
        setSelection(tag);
      }}>
      <Text
        style={{
          color: '#007aff',
          fontWeight: '600',
          fontSize: 16,
          textDecorationLine: selection === tag ? 'underline' : undefined,
        }}>
        {tag}
      </Text>
    </TouchableOpacity>
  );
}

const App = () => {
  const {width} = useWindowDimensions();
  const iconSize = (width - 6 * 32) / 5;
  const [color, setColor] = useState('');
  const [display, setDisplay] = useState('grid');
  const [iconStyle, setIconStyle] = useState('outline');

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text
        style={{
          paddingHorizontal: 32,
          paddingTop: 20,
          paddingBottom: 20,
          fontWeight: '600',
          fontSize: 30,
        }}>
        react-native-ionicons
      </Text>
      <View
        style={{
          marginHorizontal: 16,
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: 8,
        }}>
        {display === 'grid' && (
          <Button title='List' onPress={() => setDisplay('list')} />
        )}
        {display === 'list' && (
          <Button title='Grid' onPress={() => setDisplay('grid')} />
        )}
        <Text style={{fontSize: 16, color: '#007aff', fontWeight: '600'}}>
          #
        </Text>
        <TextInput
          style={{fontSize: 16, color: '#007aff', fontWeight: '600'}}
          autoCapitalize={'none'}
          value={color}
          onChangeText={text => {
            setColor(text.replace(/[^0-9a-f]/g, ''));
          }}
          placeholder="00c7be"
          maxLength={6}
        />
        <View style={{flex: 1}} />
        <PickerItem
          tag="outline"
          selection={iconStyle}
          setSelection={setIconStyle}
        />
        <PickerItem
          tag="filled"
          selection={iconStyle}
          setSelection={setIconStyle}
        />
        <PickerItem
          tag="sharp"
          selection={iconStyle}
          setSelection={setIconStyle}
        />
      </View>
      <FlatList
        contentContainerStyle={{paddingHorizontal: 16}}
        numColumns={display === 'grid' ? 5 : 1}
        data={names.filter(item => iconStyle === 'filled' && !(item.endsWith('-outline') || item.endsWith('-sharp')) || item.endsWith(`-${iconStyle}`))}
        keyExtractor={item => item}
        key={display}
        renderItem={({item}) => {
          return (
            <View style={{padding: 16, alignItems:'center', flexDirection: display === 'list' ? 'row' : 'column'}}>
              <Icon
                name={item}
                size={iconSize}
                color={color.length !== 6 ? '#000' : '#' + color}
              />
              {display === 'list' && <Text style={{marginLeft: 5}}>{item}</Text>  }
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default App;