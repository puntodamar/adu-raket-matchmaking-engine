import React from 'react';
import { cn } from '@/lib/utils';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: HeadingLevel;
}

export default function Heading({children, as = 'h1', className, ...props}: HeadingProps) {
    const Tag: React.ElementType = as;
    
    return (
        <Tag
            className={cn(
                "text-heading text-center text-coral text-2xl font-bold border-b-2 border-coral pb-2 mb-4",
                className
            )}
            {...props}
        >
            {children}
        </Tag>
    );
}