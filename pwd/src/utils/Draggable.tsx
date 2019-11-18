/*
 * This Component forms the draggable part of an app. It's an empty div (that will hold the content inside)
 * The prop "limits" is there because I wanted to implement limits on where the draggable can move. It turned
 * out to be too big of a project, but I still keep it there in case I have time to give it another try.
 */

import React from "react";

interface IProps {
    initialX: number;
    initialY: number;
    initialZ: number;
    zIndexSource: any;
    limits?: {
        top: number;
        left: number;
        bottom: number;
        right: number;
    };
}

export default class Draggable extends React.Component<IProps> {

    public myRef: any;

    public state = {
        dragging: false,
        pos: {
            x: this.props.initialX,
            y: this.props.initialY,
            z: this.props.initialZ,
        },
        rel: {
            x: 0,
            y: 0,
        },
    };

    constructor(props: IProps) {
        super(props);
        this.myRef = React.createRef();
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
    }

    /*
     *  On every update, so everytime the state was modifited, this function checks if dragging is true or false
     *  If dragging is true it adds event listeners to handle mouse movement or the release of the mouse button
     *  If draggins is false it removes the event listeners mention previously.
     */
    public componentDidUpdate() {
        if (this.state.dragging) {
            document.addEventListener("mousemove", this.onMouseMove);
            document.addEventListener("mouseup", this.onMouseUp);
        } else if (!this.state.dragging) {
            document.removeEventListener("mousemove", this.onMouseMove);
            document.removeEventListener("mouseup", this.onMouseUp);
        }
    }

    /*
     *  This is where the drag is activated. On left mouse button press the draggable is brought
     *  to highest Z level and if the press didn't happen
     *  on a button, input (of any kind), image, etc. drag will be activated.
     */
    public onMouseDown(e: any) {
        if (e.target.localName === "button" || e.target.localName === "textarea"
        || e.target.localName === "img" || e.target.localName === "input" || e.target.localName === "select") {
            this.setState({
                pos: {
                    z: this.props.zIndexSource(),
                },
            });
            return; }
        if (e.button !== 0) { return; }
        const pos = e.target.getBoundingClientRect();
        this.setState({
            dragging: true,
            pos: {
                z: this.props.zIndexSource(),
            },
            rel: {
                x: e.pageX - pos.left,
                y: e.pageY - pos.top,
            },

        });
        e.stopPropagation();
    }

    // This functions handles the release of the left mouse button
    public onMouseUp(e: Event) {
        this.setState({ dragging: false });
        e.stopPropagation();
        e.preventDefault();
    }

    /*
     *  This function takes care of changing the position of the draggable
     *  The position is calculated as a function of where the mouse is currently and where
     *  the press happened in relation to the elements previous position (see onMouseDown function)
     */
    public onMouseMove(e: any) {
        if (!this.state.dragging) { return; }
        this.setState({
            pos: {
                x: e.pageX - this.state.rel.x,
                y: e.pageY - this.state.rel.y,
                z: this.state.pos.z,
            },
        });
        e.stopPropagation();
        e.preventDefault();
    }

    public render() {
        return (
            <div
                ref={this.myRef}
                onMouseDown={this.onMouseDown}
                style={{
                    left: this.state.pos.x + "px",
                    position: "absolute",
                    top: this.state.pos.y + "px",
                    zIndex: this.state.pos.z,
                }}
            >
                {this.props.children}
            </div>
        );
    }
}
