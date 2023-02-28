import { Button, Tooltip } from "antd";
import { useState } from "react";
import { PauseIcon, PlayIcon } from "../utils/Icons";

export default function PlayButton() {

    const delay = 1;

    const [isPlayed, setIsPlayed] = useState<boolean>(false);

    function handleClick() {
        setIsPlayed(!isPlayed)
    }

    function makeButton() {
        let title;
        let icon;
        if (!isPlayed) {
            title = 'play';
            icon = PlayIcon;
        } else {
            title = 'pause';
            icon = PauseIcon;
        }
        return (
            <Tooltip title={title} arrow={false} mouseEnterDelay={delay}>
                <Button type="text" icon={icon} onClick={() => handleClick()} />
            </Tooltip>
        )
    }

    return (
        makeButton()
    )
}