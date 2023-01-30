# React Native Ionicons

Use the latest [Ionicons](https://ionic.io/ionicons/) (v6+) in your React Native project :tada:.

Based on this fantastic work [https://github.com/michaelbnd/react-native-ionicons](https://github.com/michaelbnd/react-native-ionicons)

<img src="Screenshots/exampleApp.gif">

## About Ionicons
Ionicons is a completely open-source icon set with 1,300+ icons.


Each icon has an outline, filled, and sharp variant.

#### Outline

<img width="100" src="https://unpkg.com/ionicons@6.1.1/dist/svg/glasses-outline.svg">

#### Filled

<img width="100" src="https://unpkg.com/ionicons@6.1.1/dist/svg/glasses.svg">

#### Sharp

<img width="100" src="https://unpkg.com/ionicons@6.1.1/dist/svg/glasses-sharp.svg">


## Install
```
npm install @mrkpatchaa/react-native-ionicons
npm install react-native-svg
npx pod-install
```

## Usage
```javascript
import React from 'react';
import {View} from 'react-native';
import {Icon} from '@mrkpatchaa/react-native-ionicons';

export default function App() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
      <Icon name="rocket-outline" size={64} color="#000" />
      <Icon name="rocket" size={64} color="#000" />
      <Icon name="rocket-sharp" size={64} color="#000" />
    </View>
  );
}
```

## Jest
Add the lines below in your package.json inside the "jest" key if you are testing your project with [Jest](https://jestjs.io).


```
"transformIgnorePatterns": [
  "/node_modules/(?!react-native)/.+"
]
```