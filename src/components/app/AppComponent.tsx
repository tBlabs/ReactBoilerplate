import * as React from "react";
import * as ReactDOM from "react-dom";
import { Snackbar, IconButton } from "material-ui";
import { LazyInject } from "IoC/IoC";
import { TYPES } from "IoC/TYPES";
import { ISnackBarServiceEngine } from "services/snackbar/ISnackBarServiceEngine";
import { observer } from "mobx-react";
import CloseIcon from 'material-ui-icons/Close';

@observer
export default class AppComponent extends React.Component<{}, {}>
{
    @LazyInject(TYPES.ISnackBarServiceEngine)
    private snack: ISnackBarServiceEngine;


    render()
    {
        const $snackMessage: React.ReactElement<any> =
            (
                <span>{ this.snack.message }</span>
            );

        const $snackCloseButton: React.ReactElement<any> =
            (
                <IconButton key="close" aria-label="Close" color="inherit"
                            onClick={ () => this.snack.Hide() }>
                    <CloseIcon />
                </IconButton>
            );


        return (
            <div>
                { this.props.children }

                <Snackbar
                    open={ this.snack.isVisible }
                    message={ $snackMessage }
                    autoHideDuration={ 2500 }
                    action={ $snackCloseButton }
                    onRequestClose={
                        (reason: "timeout" | "clickaway") =>
                        {
                            this.snack.Hide();
                        }
                    }
                />
            </div>
        );
    }
}