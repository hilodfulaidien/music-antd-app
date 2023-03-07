import { Button, Tooltip } from "antd";
import { PlayNextIcon } from "../utils/Icons";

export default function PlayNextButton() {

    const delay = 1;

    function makeButton() {
        return (

            <Button title='Play Next' type="text" icon={<PlayNextIcon />} />

        )
    }

    return (
        makeButton()
    )
}