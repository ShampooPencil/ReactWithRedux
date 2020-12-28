import React from 'react'

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is cold!',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth())
    console.log(season)

    const { text, iconName } = seasonConfig[season] // {text, iconName}

    // if (seasonConfig.winter === seasonConfig[season]) {
    //     console.log('It is the same thing')
    // }
    // console.log(seasonConfig[season])
    // console.log(seasonConfig.winter)

    return (
        <div>
            {/* {season === 'winter' ? 'Burr, it is Chilly!' : 'Lets hit the beach'} */}
            {/* You can choose above or below(same thing) but
                but I think assiging the terny on var is easier and more comfortable */}
            <i className={`${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay