import React from 'react'

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
    const errMessage = <h1>{props.err}</h1>
    const wintOrSumm = season === 'winter' ? 'Burr, it is Chilly!' : 'Lets hit the beach'
    const icon = season === 'winter' ? 'snowflake' : 'sun'
    // console.log(season)
    return (
        <div>
            {/* {season === 'winter' ? 'Burr, it is Chilly!' : 'Lets hit the beach'} */}
            {/* You can choose above or below(same thing) but
                but I think assiging the terny on var is easier and more comfortable */}
            <i className={`${icon} icon`} />
            <h1>{wintOrSumm}</h1>
            <i className={`${icon} icon`} />
        </div>
    )
}

export default SeasonDisplay