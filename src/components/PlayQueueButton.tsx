import { Button, Dropdown, Popover, Tooltip } from "antd";
import { PlayQueueIcon } from "../utils/Icons";

export default function PlayQueueButton() {

    const delay = 1;

    function makeButton() {
        return (
            <Popover>
                <Tooltip title='play queue' arrow={false} mouseEnterDelay={delay}>
                    <Button type="text" icon={PlayQueueIcon} />
                </Tooltip>
            </Popover>
        )
    }

    return (
        makeButton()
    )
}