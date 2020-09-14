import React, { useRef, useState, useCallback } from 'react'
import {
    View,
    Text,
    TextInput,
    StatusBar,
    ImageBackground,
    ScrollView,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'
import { storeData, getData } from '../../utils/asyncStorage'

const Login = ({ navigation }) => {
    const emailRef = useRef()
    const roleRef = useRef()
    const passRef = useRef()
    const cPassRef = useRef()
    const addrRef = useRef()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        password: '',
        cPassword: '',
        addrress: '',
    })

    const handleSignup = useCallback(async () => {

        const response = await fetch(
            'https://homechef-beta.herokuapp.com/api/v1/auth/register',
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(formData),
            }
        )

        const userData = await response.json()

        await storeData('token', userData.token)
    }, [formData])

    return (
        <ImageBackground
            source={require('../../assets/bkg2.jpg')}
            style={styles.image}
        >
            <View style={styles.overlay}>
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={[styles.brand, { marginBottom: 30 }]}>
                        ATTIL
                    </Text>
                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            placeholder="Your Name"
                            placeholderTextColor="gray"
                            onSubmitEditing={() => {
                                emailRef.current.focus()
                            }}
                            blurOnSubmit={false}
                            value={formData.name}
                            onChangeText={(name) => {
                                setFormData({ ...formData, name })
                            }}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            keyboardType="email-address"
                            placeholderTextColor="gray"
                            ref={emailRef}
                            onSubmitEditing={() => {
                                roleRef.current.focus()
                            }}
                            blurOnSubmit={false}
                            value={formData.email}
                            onChangeText={(email) => {
                                setFormData({ ...formData, email })
                            }}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Role"
                            placeholderTextColor="gray"
                            ref={roleRef}
                            onSubmitEditing={() => {
                                passRef.current.focus()
                            }}
                            blurOnSubmit={false}
                            value={formData.role}
                            onChangeText={(role) => {
                                setFormData({ ...formData, role })
                            }}
                        />
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            placeholder="Password"
                            placeholderTextColor="gray"
                            ref={passRef}
                            onSubmitEditing={() => {
                                cPassRef.current.focus()
                            }}
                            blurOnSubmit={false}
                            value={formData.password}
                            onChangeText={(password) => {
                                setFormData({ ...formData, password })
                            }}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            secureTextEntry={true}
                            placeholderTextColor="gray"
                            ref={cPassRef}
                            onSubmitEditing={() => {
                                addrRef.current.focus()
                            }}
                            blurOnSubmit={false}
                            value={formData.cPassword}
                            onChangeText={(cPassword) => {
                                setFormData({ ...formData, cPassword })
                            }}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Address"
                            placeholderTextColor="gray"
                            ref={addrRef}
                            value={formData.address}
                            onChangeText={(address) => {
                                setFormData({ ...formData, address })
                            }}
                        />
                        <TouchableOpacity
                            style={styles.mainButton}
                            onPress={handleSignup}
                        >
                            <Text style={styles.mainButtonText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.bottomText}
                        onPress={() => {
                            navigation.goBack()
                        }}
                    >
                        <Text style={styles.buttonText}>
                            Already have an account?{' '}
                            <Text
                                style={{ fontWeight: 'bold', color: '#25D366' }}
                            >
                                Login here
                            </Text>
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

export default Login
