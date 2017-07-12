import * as React from "react";
import { Button } from 'react-bootstrap';

export interface IncreaserProps { trigger: any }

export class Increaser extends React.Component<IncreaserProps, undefined> {

    render() {
        return <div className="col-xs-3">
            <Button bsStyle="default" onClick={this.props.trigger}>
                <span className="glyphicon glyphicon-plus">.</span>
            </Button>
        </div>
    }
}
