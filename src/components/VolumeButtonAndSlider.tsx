import { Button, Popover, Slider, Tooltip } from "antd";
import { useState } from "react";
import { VolumeMaxIcon, VolumeMuteIcon, VolumeSmallIcon } from "../utils/Icons";
import './VolumeButtonAndSlider.scss'

type volumeStageType = 'mute' | 'small' | 'max';

export default function VolumeButtonAndSlider() {

    const delay = 1;
    const formatter = (v?: number) => `${v}%`;
    const [volumeStage, setVolumeStage] = useState<volumeStageType>('max')



    function handleVolumeChange(v: number) {
        if (v == 100) {
            setVolumeStage('max')
        } else if (v < 100 && v > 0) {
            setVolumeStage('small')
        } else {
            setVolumeStage('mute')
        }
    }

    function makeButton() {

        const slider = <Slider className="my-volume-slider" vertical defaultValue={100} onChange={(v) => { handleVolumeChange(v) }} tooltip={{ formatter }} />

        let icon;
        if (volumeStage == 'max') {
            icon = <VolumeMaxIcon />;
        } else if (volumeStage == 'small') {
            icon = <VolumeSmallIcon />;
        } else {
            icon = <VolumeMuteIcon />;
        }

        return (
            <div className="my-volume-btn-and-slider">
                <Popover content={slider} trigger={'click'}>
                    <Button title="Volume" type="text" icon={icon} />
                </Popover>
            </div>
        )
    }


    return (
        makeButton()
    )
}