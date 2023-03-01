import Image from "antd/es/image";
import imageDefault from '../assets/images/ironman.jpg'
import './ThumbnailAndInfo.scss'

export default function ThumbnailAndInfo() {
    return (
        <div className="my-thumbnail-and-info">
            <Image className="my-thumbnail" src={imageDefault} />
            <div>
                <a>track name</a><br/>
                <a>track artist</a>
            </div>

        </div>
    )
}