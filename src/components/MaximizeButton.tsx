import { Button, Tooltip } from "antd";
import { useState } from "react";
import { MaximizeIcon, UnmaximizeIcon } from "../utils/Icons";

export default function MaximizeButton() {
    const delay = 1;
    const [isMaximized, setIsMaximized] = useState<boolean>(false);

    function handleOnClick() {
        setIsMaximized(!isMaximized);
    }

    function makeButton() {
        let title;
        let icon;

        if (!isMaximized) {
            title = 'maximize'
            icon = MaximizeIcon

        } else {
            title = 'unmaximize';
            icon = UnmaximizeIcon
        }

        return (
            <Tooltip title={title} arrow={false} mouseEnterDelay={delay}>
                <Button icon={icon} onClick={() => { handleOnClick() }} />
            </Tooltip>
        )
    }

    return (
        makeButton()
    )


}