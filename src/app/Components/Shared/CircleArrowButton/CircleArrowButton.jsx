import React, {useState} from 'react'
import ArrowIcon from '../../../../assets/icons/ArrowIcon'

export const CircleArrowButton = (props) => {

    const {theme, style, height, width} = props;

    const [isHovered, setIsHovered] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);

    return (
        <>
            <button
                style={style}
                className={ theme === 'light' ? 'arrow_button' : 
                theme === 'dark' ? 'arrow_button_dark' : 
                'arrow_button'}
                onMouseEnter={() => {
                    setIsHovered(true);
                    setIsLeaving(false);
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
                    setTimeout(() => setIsLeaving(true), 500);
                }}
            >
                <ArrowIcon
                    className='arrow_icon'
                    width={width}
                    height={height}
                    fill={theme === 'light' ? (isHovered ? 'white' : 'black') : (theme === 'dark' ? (isHovered ? 'black' : 'white') : (isHovered ? 'white' : 'black'))}
                    style={{
                        transform: isHovered ? 'rotate(45deg)' : 'rotate(0deg)',
                        zIndex: 2
                    }}
                />{isHovered && (
                    <div style={{height: height, width: width}} className={`circle_arrow ${isLeaving ? 'leave' : ''}`}></div>
                )}
            </button>
        </>
    )
}
