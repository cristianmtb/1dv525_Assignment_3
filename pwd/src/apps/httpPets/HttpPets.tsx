import React from "react";
import "./HttpPets.css";

export default class HttpPets extends React.Component {

    public state = {
        code: "",
        imgURL: "",
        type: "https://http.cat/",
    };

    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleText = this.handleText.bind(this);
    }

    public render() {
        return (
            <div>
                <div className="input-div">
                    <form onSubmit={this.handleSubmit}>
                        <select value={this.state.type} onChange={this.handleSelect} defaultValue={"https://http.cat/"}>
                            <option value="https://http.cat/">Cat</option>
                            <option value="https://httpstatusdogs.com/img/">Dog</option>
                        </select>
                        <input type="text" value={this.state.code} onChange={this.handleText} />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="image-div" >
                    <img src={this.state.imgURL} alt="Please select a pet type and an HTTP Response code. If it didn't work, try another code"></img>
                </div>
            </div>
        );
    }

    public handleText(event: any) {
        this.setState({
            code: event.target.value,
        });
    }

    public handleSelect(event: any) {
        this.setState({ type: event.target.value });
    }

    private async handleSubmit(event: any) {
        event.preventDefault();
        event.stopPropagation();
        let img;
        let response;
        if (this.state.type === "https://httpstatusdogs.com/img/") {
            response = await fetch(`https://cors-anywhere.herokuapp.com/${this.state.type}${this.state.code}.jpg`,
                { mode: "cors" });
        } else {
            response = await fetch(`https://cors-anywhere.herokuapp.com/${this.state.type}${this.state.code}`,
                { mode: "cors" });
        }
        if (response.status === 200) {
            const blob = await response.blob();
            img = URL.createObjectURL(blob);
            this.setState({
                imgURL: img,
            });
        }
    }
}
