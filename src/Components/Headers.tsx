import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';
import '../css/App.css'


const Headers = () => {
    return (
        <div className="header">
            <Link href="/" asChild>
                <Pressable>
                    <Text>myBlog</Text>
                </Pressable>
            </Link>
            <View>
                <Link href="/login" asChild>
                    <Pressable>
                        <Text>Login</Text>
                    </Pressable>
                </Link>
                <Link href="/register" asChild>
                    <Pressable>
                        <Text>Register</Text>
                    </Pressable>
                </Link>
            </View>
        </div>
    );
};

export default Headers;
