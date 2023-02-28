import { Button, Tooltip } from "antd";
import { CloseIcon } from "../utils/Icons";

export default function CloseButton() {

    const title = 'close';
    const delay = 1;
    return (
        <Tooltip title={title} arrow={false} mouseEnterDelay={delay}>
            <Button icon={CloseIcon} />
        </Tooltip>
    )
}