import Home from "../Page/Home/Home"
import Successful from "../Page/Successful/Successful"
import QandA from "../Page/QandA/QandA"
import Introduce from "../Page/Introduce/Introduce"

const publicRoutes = [
    { path: "/", component: Home , num: 1 },
    { path: "/introduce", component: Introduce,num: 2 },
    { path: "/successful", component: Successful, num: 3 },
    { path: "/QandA", component: QandA, num: 4 },
];
export  {publicRoutes}