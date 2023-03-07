import { Button, Dropdown, Popover, Tooltip } from "antd";
import { PlayQueueIcon } from "../utils/Icons";

export default function PlayQueueButton() {

    const delay = 1;

    function makeButton() {
        return (
            <Popover>
                
                    <Button title="Play Queue" type="text" icon={<PlayQueueIcon/>} />
               
            </Popover>
        )
    }

    return (
        makeButton()
    )
}