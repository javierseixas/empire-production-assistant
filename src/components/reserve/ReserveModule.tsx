import * as React from "react";

import { returntypeof } from 'react-redux-typescript';
import {connect} from "react-redux";
import {RootState} from "../../store/index";
import {CurrentReserve} from "./CurrentReserve";

const mapStateToProps = (state: RootState) => ({
    reserve: state.reserve
});

const dispatchToProps = {};

// Props types inferred from mapStateToProps & dispatchToProps
const stateProps = returntypeof(mapStateToProps);
type Props = typeof stateProps;
type State = {};

class ReserveModule extends React.Component<any, any> {

    render() {
        debugger;
        return <div className="row">
            <CurrentReserve wealth={this.props.reserve.wealth} />
        </div>
    }
}

export default connect(mapStateToProps, dispatchToProps)(ReserveModule);
