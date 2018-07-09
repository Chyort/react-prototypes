import React from 'react';

export default props => {

    console.log("props:", props);

    const { src, style } = props.about;

    return (
        <img className="scrapbook-image" style={style} src={src} />
    )
}
