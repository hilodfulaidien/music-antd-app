
import { Slider } from 'antd';
import './MusicBar.scss'
import PlayButton from "./PlayButton";
import PlayNextButton from "./PlayNextButton";
import PlayOrderButton from "./PlayOrderButton";
import PlayPreviousButton from "./PlayPreviousButton";
import PlayQueueButton from "./PlayQueueButton";
import ThumbnailAndInfo from './ThumbnailAndInfo';
import VolumeButtonAndSlider from "./VolumeButtonAndSlider";

export default function MusicBar() {
    return (
        <div className="my-music-bar">

            <div className='my-row-1'>
                <Slider />
            </div>
            
            <div className='my-row-2'>
                <div className='my-left-block'>
                    <ThumbnailAndInfo />
                </div>

                <div className='my-center-block'>
                    <PlayOrderButton />
                    <PlayPreviousButton />
                    <PlayButton />
                    <PlayNextButton />
                </div>
                <div className='my-right-block'>
                    <VolumeButtonAndSlider />
                    <PlayQueueButton />
                </div>
            </div>
        </div>
    )
}