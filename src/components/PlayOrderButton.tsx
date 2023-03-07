import { Button, Dropdown, MenuProps, Tooltip } from "antd";
import { useState } from "react";
import { LoopIcon, LoopOneIcon, OrderedListIcon, ShuffleIcon } from "../utils/Icons";

type orderType = 'sequence' | 'loop' | 'loop one' | 'shuffle';

export default function PlayOrderButton() {

    const delay = 1;
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
            title = 'sequence';
            icon = <OrderedListIcon />;
        } else if (order == 'loop') {
            title = 'loop';
            icon = <LoopIcon />;
        } else if (order == 'loop one') {
            title = 'loop one';
            icon = <LoopOneIcon />;
        } else {
            title = 'shuffle';
            icon = <ShuffleIcon />;
        }

        return (
            <Dropdown menu={{ items }} trigger={['click']} placement='topCenter'>
                <Tooltip title={title} arrow={false} mouseEnterDelay={delay}>
                    <Button type="text" icon={icon} />
                </Tooltip>
            </Dropdown>
        )
    }

    return (
        makeButton()
    )
}