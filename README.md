# react-native-intent-launcher
call native function `startActivity` in react-native

Support Android 7 FileProvider

thanks poberwong's work[react-native-intent-launcher](https://github.com/poberwong/react-native-intent-launcher)
## Description
You can call native function `startActivity` in react-native to do something with `Intent` which can only be solved with android native code

## Compatibility
| @yz1311/react-native-intent-launcher version | Required React Native Version |
|----|-----|
|`0.2.x`|`>=0.60` or `>=0.59` if using [Jetifier]|
|`0.1.x`|`<=0.59`|

## Installation

1. `npm install @yz1311/react-native-intent-launcher --save`   
2. `react-native link react-native-intent-launcher`

## Usage startActivity
```
import IntentLauncher, { IntentConstant } from 'react-native-intent-launcher'
...
IntentLauncher.startActivity({
	action: 'android.settings.APPLICATION_DETAILS_SETTINGS',
	data: 'package:com.example'
})
...
```

you can view the code in [Example](https://github.com/Bob1993/react-native-intent-launcher/blob/master/Example/index.android.js) of the Repository

## Properties
* `action` String
* `data` String
* `category` String
* `type` String
* `extra` Object
* `packageName` String
* `className` String
* `flags` Number    (to set multi flgas,eg: flag1|flag2|flag2)

In the `IntentConstant`, we provide some constants for these properties, you can look up document provided by google to find out property we didn't support currently.

## Usage finish

to finish a exist activity
```
import IntentLauncher, { IntentConstant } from 'react-native-intent-launcher'
...
IntentLauncher.finish(0,'',{});  //if no resultCode,just like this
...
```

## References
[react-native-activity-result](https://github.com/rozele/react-native-activity-result)


## License
*MIT*


