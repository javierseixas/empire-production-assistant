import * as React from "react";

export class Layout extends React.Component<any, any> {

    render() {
        const {children} = this.props;

        return (
            <div className="container-fluid">
                {children}
            </div>
        )
    }
}
