import * as React from "react";
import {Increaser} from "./Increaser";
import {Decreaser} from "./Decreaser";
import {Counter} from "./Counter";

import { returntypeof } from 'react-redux-typescript';
import {connect} from "react-redux";
import {ActionCreators} from "../../store/reducer";
import {RootState} from "../../store/index";

const mapStateToProps = (state: RootState) => ({
    counter: state.pepito
});

const dispatchToProps = {
    decreaseCounter: ActionCreators.decreaseArmyCost.create,
};

// Props types inferred from mapStateToProps & dispatchToProps
const stateProps = returntypeof(mapStateToProps);
type Props = typeof stateProps & typeof dispatchToProps;
type State = {};

export class ArmyModule extends React.Component<any, any> {


    // decreaseCounter = () => {
    //     console.log("Decreasing");
    //     this.setState({armyCost: this.props.armyCost - 1});
    //     this.props.armyCost = this.props.armyCost - 1;
    // }

    increaseCounter = () => {
        console.log("increasing");
        //this.setState({ armyCost: this.props.armyCost + 1});
    };

    render() {
        console.log(this.props);
        return <div>
            <Increaser trigger={this.increaseCounter} />
            <Decreaser trigger={this.props.decreaseCounter} />
            <Counter value={this.props.counter.armyCost} />
        </div>
    }
}

export default connect(mapStateToProps, dispatchToProps)(ArmyModule);
