import React from "react";

interface IProps {
    initialX: number;
    initialY: number;
    initialZ: number;
    limits?:{
        top:number;
        left:number;
        bottom:number;
        right:number;
    }
}

export default class Draggable extends React.Component<IProps> {

    public myRef: any;
    
    public state = {
        pos: { x: this.props.initialX, y: this.props.initialY, z: this.props.initialZ },
        dragging: false,
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

    public componentDidUpdate() {
        if (this.state.dragging) {
            document.addEventListener("mousemove", this.onMouseMove);
            document.addEventListener("mouseup", this.onMouseUp);
        } else if (!this.state.dragging) {
            document.removeEventListener("mousemove", this.onMouseMove);
            document.removeEventListener("mouseup", this.onMouseUp);
        }
    }

    public onMouseDown(e: any) {
        if (e.button !== 0) { return; }
        const pos = e.target.getBoundingClientRect();
        this.setState({

            dragging: true,
            rel: {
                x: e.pageX - pos.left,
                y: e.pageY - pos.top,
            },
        });
        e.stopPropagation();
        e.preventDefault();
    }

    public onMouseUp(e: Event) {
        this.setState({ dragging: false });
        e.stopPropagation();
        e.preventDefault();
    }

    public onMouseMove(e: any) {
        if (!this.state.dragging) { return; }
        this.setState({
            pos: {
                x: e.pageX - this.state.rel.x,
                y: e.pageY - this.state.rel.y,
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
                style={{position: "absolute", left: this.state.pos.x + "px", top: this.state.pos.y + "px", zIndex: this.state.pos.z }}
            >
                {this.props.children}
            </div>
        );
    }
}
