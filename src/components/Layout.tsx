import * as React from "react";
import {Header} from "./Header";
import {ArmyModule} from "./army/ArmyModule";

export class Layout extends React.Component<any, any> {

    render() {
        const {children} = this.props;

        return (
            <div>
                {children}
            </div>
        )
    }
}
