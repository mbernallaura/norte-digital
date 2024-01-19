import React from 'react'

const Title = ({name, sizeText, font='font-normal'}) => {
    return (
        <div className='w-full flex flex-col gap-3 justify-center divide-y divide-grey'>
            <span className={`${sizeText} ${font} text-blueDark`}>{ name }</span>
            <span></span>
        </div>
    )
}

export default Title
