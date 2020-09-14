import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}


export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
            return value
        } else {
            return false
        }
    } catch (e) {
        console.log(e)
    }
}

export const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    }
    catch (exception) {
        return false;
    }
}

