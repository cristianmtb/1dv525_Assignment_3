import React from "react";

interface IProps {
    image: number;
    tilesPerRow: number;
    clickCallback: any;
}

export default class Brick extends React.Component<IProps> {

    public state = {
        dissapear: false,
        hidden: true,
    };

    constructor(props: IProps) {
        super(props);
        this.successfull = this.successfull.bind(this);
    }

    public render() {
        if (this.state.dissapear === true) {
            return (
                <div style={{ width: 35 / this.props.tilesPerRow + "vh", height: 35 / this.props.tilesPerRow + "vh" }}>
                </div>
            );
        }
        if (this.state.hidden === true) {
            return (
                <button
                    onClick={(event) => this.clicked(event)}
                    className="brick-btn"
                    style={{ width: 35 / this.props.tilesPerRow + "vh", height: 35 / this.props.tilesPerRow + "vh" }}>
                    <img src={require("./image/0.png")}
                        style={{ width: 35 / this.props.tilesPerRow + "vh", height: 35 / this.props.tilesPerRow + "vh" }}
                        alt="Could not load" />
                </button>
            );
        }
        return (
            <div style={{ width: 35 / this.props.tilesPerRow + "vh", height: 35 / this.props.tilesPerRow + "vh" }}>
                <img src={require(`./image/${this.props.image}.png`)}
                    style={{ width: 35 / this.props.tilesPerRow + "vh", height: 35 / this.props.tilesPerRow + "vh" }}
                    alt="" />
            </div>
        );
    }

    public clicked(event: any) {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        this.setState({
            hidden: false,
        });
        this.props.clickCallback(this.successfull, this.props.image);
    }

    public successfull(successState: boolean) {
        if (successState === true) {
            this.setState({
                dissapear: true,
            });
        } else {
            this.setState({
                hidden: true,
            });
        }
    }
}
