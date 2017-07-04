import * as React from "react";

export interface IncreaserProps { }

export class Increaser extends React.Component<IncreaserProps, undefined> {

    render() {
        return <div>
            <button>+</button>
        </div>
    }
}
