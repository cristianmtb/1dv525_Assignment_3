import React from "react";
import Draggable from "react-draggable";
import "./LiveChat.css";

export default class LiveChat extends React.Component {
    public render() {
        return (
            <Draggable bounds="parent">
                <div className = "AppWindow">
                    <div className="TitleBar">
                        <button>Hell</button>
                    </div>
                    <div className="Content">
                        Henlo world
                    </div>
                </div>
            </Draggable>
        );
    }
}   
