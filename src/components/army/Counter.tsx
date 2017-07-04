import * as React from "react";

export interface CounterProps { value: number}

export class Counter extends React.Component<CounterProps, undefined> {

    render() {
        return <div>{this.props.value}</div>
    }
}
