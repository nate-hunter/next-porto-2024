import React from 'react';

import style from './ALink.module.css';

type ALinkProps = React.ComponentPropsWithoutRef<'a'> & {
    to: string;
    newTab?: boolean;
};

export const ALink = React.forwardRef<HTMLAnchorElement, ALinkProps>(
    ({ children, to = '#', newTab = true, ...props }, ref) => {
        const newTabAttrs = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : '';

        console.log('new tab?', newTabAttrs.toString());

        return (
            <a ref={ref} href={to} className={style.link} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        );
    }
);

ALink.displayName = 'ALink';
