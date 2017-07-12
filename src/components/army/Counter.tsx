import * as React from "react";

export interface CounterProps { value: number}

export class Counter extends React.Component<CounterProps, undefined> {

    render() {
        return <div className="col-xs-3"><span className="label label-default">{this.props.value}</span></div>
    }
}
