import React from "react";

interface IProps {
    sendCallback: any;
}
interface IState {
    message: string;
}
export default class MessageSend extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            message: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    public handleChange(event: any) {
        this.setState({ message: event.target.value });
    }

    public handleSubmit(event: any) {
        this.props.sendCallback(this.state.message);
        event.preventDefault();
    }

    public render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <div className="send-form">
                <textarea value={this.state.message} onChange={this.handleChange} />
                <input type="submit" value="Submit" className="submit-btn" />
                </div>
            </form>
        );
    }
}
