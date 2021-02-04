import React from 'react'
import Skeleton from "react-loading-skeleton";
import {Bigbox} from './styled'

const SkeletonEnrollClick = () => {
    return (
        <Bigbox>
            <Skeleton count={2} />
        </Bigbox>
    )
}

export default SkeletonEnrollClick