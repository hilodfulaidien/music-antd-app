import { Button, Tooltip } from "antd";
import { MinimizeIcon } from "../utils/Icons";

export default function MinimizeButton() {

    const title = 'minimize';
    const delay = 1;

    return (
        <Tooltip title={title} arrow={false} mouseEnterDelay={delay}>
            <Button type='text' icon={MinimizeIcon} />
        </Tooltip>
    )
}