import { Card } from "antd";
import Image from "antd/es/image";
import imageDefault from '../assets/images/ironman.jpg'

import './AlbumCard.scss'



export default function AlbumCard() {

    const albumName = <a>album nsddddddddddddddddddddddddddddddame</a>;
    const albumArtists = [
        <a>artist 1</a>,
        <a>artist 2</a>,
    ];

    return (
        <Card className="my-album-card">
            <Image src={imageDefault} preview={false} />

            <div className="my-album-card-info">
                <div className="my-album-card-info-name">
                    {albumName}
                </div>

                <div className="my-album-card-info-artists">
                    {albumArtists}
                </div>
            </div>
        </Card>
    )
}