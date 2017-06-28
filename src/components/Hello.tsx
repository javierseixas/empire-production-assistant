import * as React from "react";
import {DisposeSettlerButton, DisposeSettlerComponent} from "./DisposeSettler";
import {CurrentReserveComponent} from "./CurrentReserve";

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return (<div>
            <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
            </div>
        );
    }
}
