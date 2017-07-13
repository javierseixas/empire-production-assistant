import * as React from "react";
import {Increaser} from "./Increaser";
import {Decreaser} from "./Decreaser";
import {Counter} from "./Counter";

import { returntypeof } from 'react-redux-typescript';
import {connect} from "react-redux";
import {ActionCreators} from "../../store/reducer";
import {RootState} from "../../store/index";
import ReserveModule from "../reserve/ReserveModule";

const mapStateToProps = (state: RootState) => ({
    counter: state.pepito
});

const dispatchToProps = {
    increaseCounter: ActionCreators.increaseArmyCost.create,
    decreaseCounter: ActionCreators.decreaseArmyCost.create
};

// Props types inferred from mapStateToProps & dispatchToProps
const stateProps = returntypeof(mapStateToProps);
type Props = typeof stateProps & typeof dispatchToProps;
type State = {};

export class ArmyModule extends React.Component<any, any> {

    // TODO increase disabled if value < -5

    render() {
        return <div className="row">
            <Increaser trigger={this.props.increaseCounter} />
            <Decreaser trigger={this.props.decreaseCounter} />
            <Counter value={this.props.counter.armyCost} />
            <ReserveModule />
        </div>
    }
}

export default connect(mapStateToProps, dispatchToProps)(ArmyModule);
