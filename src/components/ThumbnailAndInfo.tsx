import Image from "antd/es/image";
import imageDefault from '../assets/images/ironman.jpg'
import './ThumbnailAndInfo.scss'

export default function ThumbnailAndInfo() {
    return (
        <div className="my-thumbnail-and-info">
            <Image className="my-thumbnail" src={imageDefault} />
            <div className="my-thumbnail-info">
                <div className="my-thumbnail-info-name">
                    <a>track name</a>
                </div>
                <div className="my-thumbnail-info-artists">
                    <a>track artist</a>
                </div>

            </div>

        </div>
    )
}