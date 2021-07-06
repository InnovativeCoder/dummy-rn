import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import OrgList from "../screens/OrgList";
import StationList from "../screens/StationList";


const MainStack = createStackNavigator({
    OrgList:{
        screen: OrgList
    },
    StationList:{
        screen: StationList,
        navigationOptions: {
            headerTitle: "Station List"
        }
    }
})

export default createAppContainer(MainStack)