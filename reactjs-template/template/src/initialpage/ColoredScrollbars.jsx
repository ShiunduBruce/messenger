import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export default class ColoredScrollbars extends Component {

    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = { top: 0 };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.renderView = this.renderView.bind(this);
        this.renderThumb = this.renderThumb.bind(this);
    }

    handleUpdate(values) {
        const { top } = values;
        this.setState({ top });
    }

    renderView({ style, ...props }) {
        const { top } = this.state;
        const viewStyle = {
            // padding: 15,
            // backgroundColor:`rgb(206, 212, 218)`,
            // color: `rgb(206, 212, 218)`
        };
        return (
            <div
                className="box"
                style={{ ...style, ...viewStyle }}
                {...props}/>
        );
    }

    renderThumb({ style, ...props }) {
        const { top } = this.state;
        const thumbStyle = {
            borderRadius: "3px",
            width:"4px",
            backgroundColor: `rgb(104, 10, 131)`
        };
        return (
            <div
            style={{ ...style, ...thumbStyle }}
                {...props}/>
        );
    }
    renderTrack({ style, ...props }) {
        // const { top } = this.state;
        const thumbStyle = {
            borderRadius: "3px",
            width:"4px",
            backgroundColor: `rgb(206, 212, 218)`
        };
        return (
            <div
            style={{ ...style, ...thumbStyle }}
                {...props}/>
        );
    }

    render() {
        return (
            <Scrollbars
                renderView={this.renderView}
                renderThumbHorizontal={this.renderThumb}
                renderTrackVertical={props => < div {...props} className="track-vertical"/>}
                renderThumbVertical={props => < div {...props} className="thumb-vertical"/>}
                onUpdate={this.handleUpdate}
                {...this.props}/>
        );
    }
}