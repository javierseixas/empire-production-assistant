import * as React from "react";
import {Increaser} from "./Increaser";
import {Decreaser} from "./Decreaser";
import {Counter} from "./Counter";

import { returntypeof } from 'react-redux-typescript';
import {RootState} from "../../store/index";
import {connect} from "react-redux";
import {ActionCreators, State} from "../../store/reducer";

const mapStateToProps = (rootState: RootState) => ({
    armyCost: rootState.army.armyCost
});
const dispatchToProps = {
    //decreaseCounter: ActionCreators.decreaseArmyCost.create,
};

// Props types inferred from mapStateToProps & dispatchToProps
const stateProps = returntypeof(mapStateToProps);
type Props = typeof stateProps & typeof dispatchToProps;

export class ArmyModule extends React.Component<Props, State> {


    // decreaseCounter = () => {
    //     console.log("Decreasing");
    //     this.setState({armyCost: this.props.armyCost - 1});
    //     this.props.armyCost = this.props.armyCost - 1;
    // }

    increaseCounter = () => {
        console.log("increasing");
        this.setState({ armyCost: this.props.armyCost + 1});
    };
    decreaseCounter = () => {
        console.log("decreasing");
        this.setState({ armyCost: this.props.armyCost - 1});
    };

    render() {
        return <div>
            <Increaser trigger={this.increaseCounter} />
            <Decreaser trigger={this.decreaseCounter} />
            <Counter value={this.props.armyCost} />
        </div>
    }
}

export default connect(mapStateToProps, dispatchToProps)(ArmyModule);
