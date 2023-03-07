import { Tabs } from "antd";
import Album from "../routes/Album";
import { AlbumIcon, PlayListIcon, UserIcon } from "../utils/Icons";
import "./Content.scss";
import MenuButton from "./MenuButton";

export default function Content() {
    
    const operation = <MenuButton/>

    return (
        <Tabs
            defaultActiveKey="1"
            tabBarGutter={24}
            tabBarExtraContent={operation}
            items={[
                {
                    label: (
                        <>
                            <AlbumIcon />
                            Album
                        </>
                    ),
                    key: "1",
                    children: (<Album/>),
                },
                {
                    label: (
                        <>
                            <UserIcon />
                            Artist
                        </>
                    ),
                    key: "2",
                    children: "Tab 2",
                },
                {
                    label:(
                        <>
                            <PlayListIcon />
                            Playlist
                        </>
                    ),
                    key: "3",
                    children: "Tab 3",
                },
            ]}
        />
    );
}
