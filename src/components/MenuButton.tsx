import { Button, Dropdown, MenuProps, Tooltip } from "antd";
import { MenuIcon, SettingsIcon } from "../utils/Icons";


export default function MenuButton() {
    const title = 'Menu';
    const delay = 1;

    const items: MenuProps['items'] = [
        {
            key: 'settings',
            label: 'Settings',
            icon: <SettingsIcon />,

        },

    ];

    return (
        <Dropdown menu={{ items }} trigger={['click']} placement='topCenter'>
            <Button title={title} type="text" icon={<MenuIcon />} />
        </Dropdown >
    )
}