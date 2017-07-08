import * as React from "react";

export interface DecreaserProps { trigger: any }

export class Decreaser extends React.Component<DecreaserProps, undefined> {

    render() {
        return <div>
            <button onClick={this.props.trigger}>-</button>
        </div>
    }
}
