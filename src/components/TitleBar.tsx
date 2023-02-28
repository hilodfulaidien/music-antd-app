import BackwardButton from './BackwardButton'
import CloseButton from './CloseButton'
import ForwardButton from './ForwardButton'
import MaximizeButton from './MaximizeButton'
import MenuButton from './MenuButton'
import MinimizeButton from './MinimizeButton'
import './TitleBar.scss'

export default function TitleBar() {
    return (
        <div className="my-title-bar">
            <div className='my-right-block'>
                <BackwardButton />
                <ForwardButton />
            </div>

            <div className='my-left-block'>
                <MenuButton />
                <MinimizeButton />
                <MaximizeButton />
                <CloseButton />
            </div>
        </div>
    )
}