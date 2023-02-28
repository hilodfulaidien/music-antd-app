import { Button, Tooltip } from "antd";
import { RightIcon } from "../utils/Icons";

export default function ForwardButton() {

    const title = 'forward';
    const delay = 1;

    return (
        <Tooltip title={title} arrow={false} mouseEnterDelay={delay}>
            <Button type="text" icon={RightIcon} />
        </Tooltip>
    )
}