import { Button, Tooltip } from "antd"
import { PlayPreviousIcon } from "../utils/Icons"


export default function PlayPreviousButton() {

    const delay = 1;

    function makeButton() {
        return (
            <Button title="Play Previous" type="text" icon={<PlayPreviousIcon />} />
        )
    }

    return (
        makeButton()
    )
}