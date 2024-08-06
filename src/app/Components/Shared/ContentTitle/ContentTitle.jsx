import React from 'react'

export const ContentTitle = (props) => {

    const {text} = props;

    return (
        <>
            <div className="section_title">{text}</div>
        </>
    )
}
