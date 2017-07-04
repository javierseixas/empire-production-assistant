import * as React from "react";
import {Increaser} from "./Increaser";
import {Decreaser} from "./Decreaser";
import {Counter} from "./Counter";

export interface ArmyModuleProps { }

export class ArmyModule extends React.Component<ArmyModuleProps, undefined> {

    render() {
        return <div>
            <Increaser />
            <Decreaser />
            <Counter value={1} />
        </div>
    }
}
