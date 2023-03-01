import './NavBar.scss'
import { Menu, MenuProps } from "antd";
import { AlbumIcon, HomeIcon, PlayListIcon, UserIcon } from "../utils/Icons";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    // {
    //     key: '1',
    //     icon: HomeIcon,
    //     label: 'Home'
    // },
    {
        key: '2',
        icon: AlbumIcon,
        label: 'Album'
    },
    {
        key: '3',
        icon: UserIcon,
        label: 'Artist'
    },
    {
        key: '4',
        icon: PlayListIcon,
        label: 'PlayList'
    }
];

export default function NavBar() {

    return (
        <Menu items={items} defaultSelectedKeys={['1']} theme='dark' />
    )

}