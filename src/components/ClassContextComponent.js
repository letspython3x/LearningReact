import React, {Component} from "react";
import UserContext from "./contextComponents/userContext";

class ClassContextComponent extends Component{
    static contextType = UserContext
}
