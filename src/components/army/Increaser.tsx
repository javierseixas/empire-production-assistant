import * as React from "react";

export interface IncreaserProps { trigger: any }

export class Increaser extends React.Component<IncreaserProps, undefined> {

    render() {
        return <div>
            <button onClick={this.props.trigger}>+</button>
        </div>
    }
}
