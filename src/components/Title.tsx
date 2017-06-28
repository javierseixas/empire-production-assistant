import * as React from "react";

export interface TitleProps { title: any }

export class Title extends React.Component<TitleProps, undefined> {

    render() {
        return <h1>{this.props.title}</h1>
    }
}
