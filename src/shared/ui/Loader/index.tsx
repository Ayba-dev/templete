

import styles from './loader.module.css'
import React from "react";
import { cn } from '@shared/libs/cn.ts'

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const Loader = ({className, ...props}: LoaderProps) => {
    return (
        <div
            {...props}
            className={cn(styles.loader, 'w-10 h-10', className)}
        />
    )
}
