import { Button, Tooltip } from "antd";
import { useState } from "react";
import { PauseIcon, PlayIcon } from "../utils/Icons";

export default function PlayButton() {



    const [isPlayed, setIsPlayed] = useState<boolean>(false);

    function handleClick() {
        setIsPlayed(!isPlayed)
    }

    function makeButton() {
        let title;
        let icon;
        if (!isPlayed) {
            title = 'Play';
            icon = <PlayIcon />;
        } else {
            title = 'Pause';
            icon = <PauseIcon />;
        }
        return (

            <Button title={title} type="text" icon={icon} onClick={() => handleClick()} />

        )
    }

    return (
        makeButton()
    )
}