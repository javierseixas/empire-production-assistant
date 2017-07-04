import * as React from "react";
import {Header} from "./Header";
import {ArmyModule} from "./army/ArmyModule";

export interface LayoutProps { compiler: string; framework: string; }

export class Layout extends React.Component<LayoutProps, undefined> {

    name: string;
    state: any;

    constructor() {
        super();
        this.name = "Javi";
        this.state = {
            title: "Title"
        }
    }

    changeTitle(title : string) {
        this.setState({title})
    };

    render() {
        return (
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
                <ArmyModule />
            </div>
        )
    }
}
