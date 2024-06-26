import React from 'react';

export default function Plus({size = 16, color = '#FAFAFA'}) {
    return (
        <svg width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.40625 11C2.40625 10.4305 2.86796 9.96875 3.4375 9.96875H18.5625C19.132 9.96875 19.5938 10.4305 19.5938 11C19.5938 11.5695 19.132 12.0312 18.5625 12.0312H3.4375C2.86796 12.0312 2.40625 11.5695 2.40625 11Z" fill={color}/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2.40625C11.5695 2.40625 12.0312 2.86796 12.0312 3.4375V18.5625C12.0312 19.132 11.5695 19.5938 11 19.5938C10.4305 19.5938 9.96875 19.132 9.96875 18.5625V3.4375C9.96875 2.86796 10.4305 2.40625 11 2.40625Z" fill={color}/>
        </svg>
    )
}