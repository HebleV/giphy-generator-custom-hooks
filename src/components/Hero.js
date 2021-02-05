import React from 'react'

const Hero = ({heroName}) => {
    if(heroName === 'joker') {
        throw new Error('Not hero')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero
