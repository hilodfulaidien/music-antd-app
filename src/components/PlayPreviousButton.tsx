import { Button, Tooltip } from "antd"
import { PlayPreviousIcon } from "../utils/Icons"


export default function PlayPreviousButton() {

    const delay = 1;

    function makeButton() {
        return (
            <Tooltip title='play previous' arrow={false} mouseEnterDelay={delay}>
                <Button type="text" icon={<PlayPreviousIcon/>} />
            </Tooltip>
        )
    }

    return (
        makeButton()
    )
}