import React, { useState } from 'react'
import ArrowIcon from '../../../../assets/icons/ArrowIcon'
import Link from 'next/link';

export const ActionButton = (props) => {

    const { text, theme, style, width, height, link, className} = props;

    const [isHovered, setIsHovered] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);

    return (
        <>
            <Link href={link}>
                <button
                    style={style}
                    className={theme === 'light' ? 'action_button' :
                        theme === 'dark' ? 'action_button_dark' :
                            'action_button' + ' ' + className}
                    onMouseEnter={() => {
                        setIsHovered(true);
                        setIsLeaving(false);
                    }}
                    onMouseLeave={() => {
                        setIsHovered(false);
                        setTimeout(() => setIsLeaving(true), 500);
                    }}
                >
                    {text}
                    <ArrowIcon
                        className='arrow_icon'
                        width="35"
                        height="35"
                        fill={theme === 'light' ? (isHovered ? 'white' : 'black') : (theme === 'dark' ? (isHovered ? 'black' : 'white') : (isHovered ? 'white' : 'black'))}
                        style={{
                            transform: isHovered ? 'rotate(45deg)' : 'rotate(0deg)',
                            zIndex: 2
                        }}
                    />{isHovered && (
                        <div className={`circle ${isLeaving ? 'leave' : ''}`}></div>
                    )}
                </button>
            </Link>
        </>
    )
}
