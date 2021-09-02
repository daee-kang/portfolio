import Link, { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';

const Clink = ({ children, href, passHref, className }) => (
    <div className={className}>
        <Link href={href} passHref={passHref} scroll={false}>
            {children}
        </Link>
    </div>

);

export default Clink;