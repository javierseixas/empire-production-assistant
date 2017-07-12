import * as React from "react";
import {Label} from "react-bootstrap";

export interface DecreaserProps { trigger: any }

export class Decreaser extends React.Component<DecreaserProps, undefined> {

    render() {
        return <div className="col-xs-3">
            <Label bsStyle="default" onClick={this.props.trigger}>
                <span className="glyphicon glyphicon-minus">.</span>
            </Label>
        </div>
    }
}
