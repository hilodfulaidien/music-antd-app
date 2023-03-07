import { Button, Tooltip } from "antd";
import { RightIcon } from "../utils/Icons";

export default function ForwardButton() {
  const title = "Forward";

  return <Button title={title} type="text" icon={<RightIcon />} />;
}
