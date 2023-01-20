import { Skeleton } from './styles'

const SkeletonLoader = (props: any) => {
    const { rows } = props
    const iterate = Array(rows).fill(true)

    return (
        <>
            {iterate.map((item, index) => <Skeleton key={`row-${index}`}/>)}
        </>
    )
}

export default SkeletonLoader