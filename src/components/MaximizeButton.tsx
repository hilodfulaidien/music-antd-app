import { Button} from "antd";
import { useState } from "react";
import { MaximizeIcon, UnmaximizeIcon } from "../utils/Icons";

export default function MaximizeButton() {
    const [isMaximized, setIsMaximized] = useState<boolean>(false);

    function handleOnClick() {
        setIsMaximized(!isMaximized);
    }

    function makeButton() {
        let title;
        let icon;

        if (!isMaximized) {
            title = 'Maximize'
            icon = <MaximizeIcon />

        } else {
            title = 'Unmaximize';
            icon = <UnmaximizeIcon />
        }

        return (

            <Button title={title} type="text" icon={icon} onClick={() => { handleOnClick() }} />

        )
    }

    return (
        makeButton()
    )


}