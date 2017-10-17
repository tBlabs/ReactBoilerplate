import * as React from "react";
import * as ReactDOM from "react-dom";
import ISomeItemProps from "components/nested/some_item/ISomeItemProps";


export default class SomeItem extends React.Component<ISomeItemProps, {}>
{
    constructor(props: ISomeItemProps)
    {
        super(props);
    }

    render(): React.ReactElement<{}>
    {
        return (
            <div>
                props.someProp: { this.props.someProp }
            </div>
        );
    }
}