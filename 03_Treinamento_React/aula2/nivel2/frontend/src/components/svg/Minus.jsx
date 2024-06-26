import React from 'react';

export default function Minus({size = 16, color = '#FAFAFA'}) {
    return (
        <svg width={size} height={size} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.53125 7.5C1.53125 7.13756 1.82506 6.84375 2.1875 6.84375H11.8125C12.1749 6.84375 12.4688 7.13756 12.4688 7.5C12.4688 7.86244 12.1749 8.15625 11.8125 8.15625H2.1875C1.82506 8.15625 1.53125 7.86244 1.53125 7.5Z" fill={color}/>
        </svg>
    )
}