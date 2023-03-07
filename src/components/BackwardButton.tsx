import { Button, Tooltip } from "antd";
import { LeftIcon } from "../utils/Icons";

export default function BackwardButton() {
  const title = "Backward";

  return <Button title={title} type="text" icon={<LeftIcon />} />;
}
