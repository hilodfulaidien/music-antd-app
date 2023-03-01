import { Card } from "antd";
import Image from "antd/es/image";
import imageDefault from '../assets/images/ironman.jpg'

import './AlbumCard.scss'



export default function AlbumCard() {

    const albumName = 'name';
    const albumArtists = [
        <a>artist 1</a>,
        <a>artist 2</a>,
    ];

    return (
        <Card className="my-album-card">
            <Image src={imageDefault} preview={false} />
            <div className="my-album-card-info">
                <a>{albumName}</a>
                <br />
                {albumArtists}
            </div>
        </Card>
    )
}