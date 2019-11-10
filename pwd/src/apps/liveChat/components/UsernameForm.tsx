import React from "react";

interface IProps {
    setUsernameCallback: any;
}

export default class UsernameForm extends React.Component<IProps> {

    public state = {
        value: "",
    };

    constructor(props: IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleChange(event: any) {
        this.setState({ value: event.target.value });
    }

    public handleSubmit(event: any) {
        this.props.setUsernameCallback(this.state.value);
        event.preventDefault();
    }

    public render() {
        return (
            <form onSubmit={this.handleSubmit} className="username-form">
                <label>
                    Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} className="username-form-input"/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
