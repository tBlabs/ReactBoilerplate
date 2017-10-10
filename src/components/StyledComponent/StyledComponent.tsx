import * as React from "react";
import * as ReactDOM from "react-dom";

import * as styles from "./styles.css";


export class StyledComponent extends React.Component<{}, {}>
{
    render()
    {
        console.log("styles:", styles);
        return (
            <p className={ styles.foo }>Styled Component: {styles.foo}</p>
        );
    }
}
