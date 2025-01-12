import { View } from 'react-native';
import Headers from "./Components/Headers";
import Blogs from "./Components/Blogs";

export default function App () {
    return (
        <div className="main">
           <Headers/>
            <Blogs/>
        </div>
    );
}
