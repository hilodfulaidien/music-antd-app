import { Button, Tooltip } from "antd";
import { PlayNextIcon } from "../utils/Icons";

export default function PlayNextButton() {

    const delay = 1;

    function makeButton() {
        return (
            <Tooltip title='play previous' arrow={false} mouseEnterDelay={delay}>
                <Button type="text" icon={<PlayNextIcon/>} />
            </Tooltip>
        )
    }

    return (
        makeButton()
    )
}