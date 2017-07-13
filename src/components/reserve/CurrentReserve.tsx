import * as React from "react";

export interface CurrentReserveProps { wealth: number }

export class CurrentReserve extends React.Component<CurrentReserveProps, undefined> {

    render() {
        return <div className="col-xs-6">
            <table>
                <thead>
                    <th>
                        <td>Good</td>
                        <td>Quantity</td>
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td>Wealth</td>
                        <td>{this.props.wealth}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    }
}
