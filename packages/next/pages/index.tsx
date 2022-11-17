// Many libraries in the React ecosystem use the setImmediate() API (like react-native-reanimated),
// which Next.js doesn't polyfill by default.
import { HomeScreen } from "@my-app/app/src/screens/Home";
import "setimmediate";

export default HomeScreen;
