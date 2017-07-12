import * as React from "react";
import {Label} from 'react-bootstrap';

export interface IncreaserProps { trigger: any }

export class Increaser extends React.Component<IncreaserProps, undefined> {

    render() {
        return <div className="col-xs-3">
            <Label bsStyle="default" onClick={this.props.trigger}>
                <span className="glyphicon glyphicon-plus">.</span>
            </Label>
        </div>
    }
}
