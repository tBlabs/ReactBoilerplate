import * as React from "react";
import * as ReactDOM from "react-dom";
import SomeItem from "components/nested/some_item/SomeItem";
import ISomeItemProps from "components/nested/some_item/ISomeItemProps";


export default class HighOrder extends React.Component<{}, {}>
{
    render(): React.ReactElement<{}>
    {
        const moreItems: React.ReactElement<ISomeItemProps>[] =
            [
                <SomeItem someProp="111" />,
                <SomeItem someProp="222" />,
                <SomeItem someProp="333" />
            ];


        const someArray: string[] = ["A", "B", "C"];
        let moreItemsMappedFromSomeArray: React.ReactElement<ISomeItemProps>[] = [];

        someArray.map((i: string) =>
        {
            moreItemsMappedFromSomeArray.push(<SomeItem someProp={ i } />);
        });


        return (
            <div>
                <SomeItem someProp="aaa" />
                <SomeItem someProp="bbb" />
                <SomeItem someProp="ccc" />

                { moreItems }

                { moreItemsMappedFromSomeArray }
            </div>
        );
    }
}