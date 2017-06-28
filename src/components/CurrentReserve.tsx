import * as React from "react";

export interface CurrentReserve { food : Number }

export class CurrentReserveComponent extends React.Component<CurrentReserve, undefined> {

    render() {
        return <table>
            <tr>
                <td>Food</td>
            </tr>
        </table>
    }
}
