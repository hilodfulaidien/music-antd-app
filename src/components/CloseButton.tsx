import { Button, Tooltip } from "antd";
import { CloseIcon } from "../utils/Icons";

export default function CloseButton() {
  const title = "Close";

  return <Button title={title} type="text" icon={<CloseIcon />} />;
}
