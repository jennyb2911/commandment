import * as React from 'react';
import {Link} from 'react-router-dom';
import {Device} from "../../models";
import {JSONAPIObject} from "../../json-api";


interface OSVerColumnProps {
    rowData: JSONAPIObject<Device>;
}

export class OSVerColumn extends React.Component<OSVerColumnProps, undefined> {
    render () {
        const {
            rowData
        } = this.props;

        let osName = '';

        switch (rowData.attributes.model_name) {
            case 'Mac Pro':
            case 'iMac':
                osName = 'macOS';
                break;
            case 'iPhone':
            case 'iPad':
                osName = 'iOS';
                break;
        }

        return (
            <div>
                <span>{osName} { rowData.attributes.os_version }</span>
            </div>
        )
    }
}