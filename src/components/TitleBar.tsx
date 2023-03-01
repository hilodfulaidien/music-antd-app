import BackwardButton from './BackwardButton'
import CloseButton from './CloseButton'
import ForwardButton from './ForwardButton'
import MaximizeButton from './MaximizeButton'
import MenuButton from './MenuButton'
import MinimizeButton from './MinimizeButton'
import SearchInput from './SearchInput'
import './TitleBar.scss'

export default function TitleBar() {
    return (
        <div className="my-title-bar">
            <div className='my-right-block'>
                <BackwardButton />
                <ForwardButton />
                <SearchInput/>
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