import { Button, Dropdown, MenuProps, Tooltip } from "antd";
import { useState } from "react";
import { LoopIcon, LoopOneIcon, OrderedListIcon, ShuffleIcon } from "../utils/Icons";

type orderType = 'sequence' | 'loop' | 'loop one' | 'shuffle';

export default function PlayOrderButton() {

    const [order, setOrder] = useState<orderType>('sequence');

    const items: MenuProps['items'] = [
        {
            key: 'sequence',
            label: 'Sequence',
            icon: <OrderedListIcon />,
            onClick: () => setOrder('sequence')
        },
        {
            key: 'loop',
            label: 'Loop',
            icon: <LoopIcon />,
            onClick: () => setOrder('loop')
        },
        {
            key: 'loop one',
            label: 'Loop One',
            icon: <LoopOneIcon />,
            onClick: () => setOrder('loop one')
        },
        {
            key: 'shuffle',
            label: 'Shuffle',
            icon: <ShuffleIcon />,
            onClick: () => setOrder('shuffle')
        },
    ];

    function makeButton() {
        let title;
        let icon;
        if (order == 'sequence') {
            title = 'Sequence';
            icon = <OrderedListIcon />;
        } else if (order == 'loop') {
            title = 'Loop';
            icon = <LoopIcon />;
        } else if (order == 'loop one') {
            title = 'Loop One';
            icon = <LoopOneIcon />;
        } else {
            title = 'Shuffle';
            icon = <ShuffleIcon />;
        }

        return (
            <Dropdown menu={{ items }} trigger={['click']} placement='topCenter'>
                <Button title={title} type="text" icon={icon} />
            </Dropdown>
        )
    }

    return (
        makeButton()
    )
}