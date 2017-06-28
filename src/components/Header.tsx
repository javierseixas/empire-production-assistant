import * as React from "react";
import {Title} from "./Title";

export interface HeaderProps { changeTitle: any, title : string }

export class Header extends React.Component<HeaderProps, undefined> {

    handleChange(e : any) {
        const title : string = e.target.value;
        this.props.changeTitle(title);
    }

    render() {
        return <header>
            <Title title={this.props.title} />
            <input value={this.props.title} onChange={this.handleChange.bind(this)} />
        </header>
    }
}
