import React, { useState } from 'react'

export default function Slider() {
    const [volume, setVolume] = useState(1)

    var sliderIndx = Math.floor(volume / 25);
    var ulli = document.getElementsByClassName('sliderLi');

    for (var i = 0; i < sliderIndx; i++) {
        ulli[i].classList.add('active');
    }

    for (var i = 0; i < ulli.length - sliderIndx; i++) {
        ulli[ulli.length - i - 1].classList.remove('active');
    }

    const arr = [1, 25, 50, 75, 100]
    function NumButtons(props) {
        return <button onClick={props.onClick}>{props.numButton}%</button>;
    }

    return (
        <div className='container'>
            <div className='sliderNum'>
                <span>{volume}</span>
                <span>%</span>
            </div>
            <input
                type='range' 
                min={1} 
                max={100} 
                step={1} 
                value={volume}
                style={{ background: `linear-gradient(to right, #66c4cd 0%, #66c4cd ${volume}%, #9e9e9e ${volume}%, #9e9e9e 100%)` }}
                onChange={event => { setVolume(event.target.valueAsNumber) }}
            />

            <ul className='sliderUl'>
                <li className='active'></li>
                <li className='sliderLi'></li>
                <li className='sliderLi'></li>
                <li className='sliderLi'></li>
                <li className='sliderLi'></li>
            </ul>

            <div className='buttonSetVolume'>
                {arr.map(numButton => (
                    <NumButtons numButton={numButton} onClick={() => setVolume(numButton)} key={`numButton${numButton}`} />
                ))}
            </div>
        </div>
    )
}
