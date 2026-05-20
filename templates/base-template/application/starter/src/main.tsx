import {MFront} from "mfront";
import AppRegistry from "./config/app-registry";
import "./assets/styles/base-style.css"

MFront.boot({
    viewHolder: document.getElementById("bismillah"),
    registry: new AppRegistry()
})