import { Tabs } from "antd";
import AlbumPanel from "../routes/AlbumPanel";
import { AlbumIcon, PlayListIcon, UserIcon } from "../utils/Icons";
import "./Content.scss";
import MenuButton from "./MenuButton";

export default function Content() {
  const operation = <MenuButton />;

  return (
    <Tabs
      defaultActiveKey="1"
      tabBarGutter={24}
      tabBarExtraContent={operation}
      items={[
        {
          label: (
            <span title="Album">
              <AlbumIcon />
              Album
            </span>
          ),
          key: "1",
          children: <AlbumPanel />,
        },
        {
          label: (
            <span title="Album Artist">
              <UserIcon />
              Album Artist
            </span>
          ),
          key: "2",
          children: "Tab 2",
        },
        {
          label: (
            <span title="Playlist">
              <PlayListIcon />
              Playlist
            </span>
          ),
          key: "3",
          children: "Tab 3",
        },
      ]}
    />
  );
}
