import React from 'react'

export const Badge = (props) => {

    const { text, theme } = props
    return (
        <>
            <div className={theme === 'light' ? 'badge' :
                theme === 'dark' ? 'badge_dark' :
                    'badge'}>
                {text}
            </div>
        </>
    )
}
