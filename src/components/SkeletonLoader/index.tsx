import React from 'react';
import { Skeleton } from './styles'

type SkeletonLoaderProps = {
    rows: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ rows }) => {
    const iterate = Array(rows).fill(true)
    return (
        <>
            {iterate.map((item, index) => <Skeleton key={`row-${index}`} data-testid="skeleton-row" />)}
        </>
    )
}

export default SkeletonLoader