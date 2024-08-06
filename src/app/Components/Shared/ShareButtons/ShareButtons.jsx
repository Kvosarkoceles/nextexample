import React from 'react'
import { Layout } from '../Layout/Layout';
import './ShareButtons.css'
import { Icon } from '@iconify/react';
import { usePathname } from 'next/navigation';




export const ShareButtons = () => {
    
    const fullUrl = "https://newv3.t7g.ai" + usePathname()
    const encodedUrl = encodeURI(fullUrl);

    return (
        
        <div className="shareButtons">
            <div className="title">Share</div>
            <div className="iconList">
                <a href={"https://api.whatsapp.com/send?phone=whatsappphonenumber&text=" + encodedUrl} target='_blank' className="shareButton" data-action="share/whatsapp/share">
                    <Icon icon="basil:whatsapp-outline" />
                </a>
                <a href={"https://www.facebook.com/sharer/sharer.php?u=#"+encodedUrl} target='_blank' className="shareButton" data-action="share/whatsapp/share">
                    <Icon icon="foundation:social-facebook" />
                </a>
                <a href={"https://www.linkedin.com/sharing/share-offsite/?url=" + encodedUrl} target='_blank' className="shareButton" data-action="share/whatsapp/share">
                    <Icon icon="foundation:social-linkedin" />
                </a>
                <a href={"http://www.twitter.com/share?url=" + encodedUrl} target='_blank' className="shareButton" data-action="share/whatsapp/share">
                    <Icon icon="mingcute:social-x-fill" />
                </a>
                
            </div>
            
        </div>
            
    )
}
