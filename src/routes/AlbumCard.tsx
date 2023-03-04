import { Card } from "antd";
import Image from "antd/es/image";
import imageDefault from '../assets/images/ironman.jpg'

import './AlbumCard.scss'



export default function AlbumCard() {

    const albumName = 'album nsdddsdsdqwewqrqwrqrqsdsddddde';
    const albumArtists = [
        'artist 1',
        'artist 2',
    ];

    return (
        <Card className="my-album-card">
            <Image src={imageDefault} preview={false} />

            <div className="my-album-card-info">
                <div className="my-album-card-info-name">
                    <a title={albumName}>{albumName}</a>
                </div>

                <div className="my-album-card-info-artists">
                    {albumArtists.map((value, index) => {
                        if (index > 0) {
                            return <><span> / </span><a key={index}>{value}</a></>
                        } else {
                            return <a key={index}>{value}</a>
                        }
                    })}
                </div>
            </div>
        </Card>
    )
}