import React from "react";
import {UserConsumer} from "../components/contextComponents/userContext";
import {ChannelContext} from "../App";


function FunContextComponent() {
    return (
        <UserConsumer>
            {username => {
                return (
                    <ChannelContext.Consumer>
                        {channel => {
                            return (
                                <div><b>Functional Context Component</b>
                                    <br />Username: {username}
                                    <br />Channel: {channel}
                                </div>
                            )
                        }}
                    </ChannelContext.Consumer>
                )
            }}
        </UserConsumer>
    )

}

export default FunContextComponent;
