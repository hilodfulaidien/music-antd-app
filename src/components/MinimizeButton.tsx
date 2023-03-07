import { Button, Tooltip } from "antd";
import { MinimizeIcon } from "../utils/Icons";

export default function MinimizeButton() {

    const title = 'Minimize';


    return (

        <Button title={title} type='text' icon={<MinimizeIcon />} />

    )
}