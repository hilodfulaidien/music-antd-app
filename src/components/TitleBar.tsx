import CloseButton from './CloseButton'
import './TitleBar.scss'

export default function TitleBar() {
    return (
        <div className="my-title-bar">
            <div className='my-left-block'>
                <CloseButton />
            </div>
        </div>
    )
}