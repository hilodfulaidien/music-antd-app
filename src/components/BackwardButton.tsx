import { Button, Tooltip } from "antd";
import { LeftIcon } from "../utils/Icons";

export default function BackwardButton() {

    const title = 'backward';
    const delay = 1;

    return (
        <Tooltip title={title} arrow={false} mouseEnterDelay={delay}>
            <Button type="text" icon={LeftIcon} />
        </Tooltip>
    )
}