import * as React from "react";

export interface DisposeSettlerButton { settlement: string; }

export class DisposeSettlerComponent extends React.Component<DisposeSettlerButton, undefined> {

    // TODO needs redux store in order to dispatch action
    yellSettlement = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();

        alert(this.props.settlement);
    };

    render() {
        return <button onClick={this.yellSettlement}>Dispose Settler for {this.props.settlement}</button>;
    }
}
