import React from 'react'

const TeamWorksVideo = () => {
    return (
        <div>
            <div className='text-center mt-5 bg-[#CD2147] text-white py-1 rounded'>
                <h1>HEPİSTE TAKIMI TANITIM VİDEOLARI</h1>
            </div>
            <div className='flex gap-10 mt-5 justify-center'>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/UQO0Oe-o4tk?si=JcVlFB5PZUADo3qc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Fl3EpMICyzw?si=n8CGQIzaOIitusH1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default TeamWorksVideo