import React, {useContext} from "react";
import UserContext from "../components/contextComponents/userContext";
import {ChannelContext} from "../App";

export default function FunContextHookComponent() {
    const username = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div><br />
            <b>Functional useContext Hook Component</b>
            <br />User: {username} <br/>channel: {channel}
        </div>
    )
}