import { Card } from "antd";
import Image from "antd/es/image";
import './AlbumCard.scss'

export interface AlbumCardProps {
    thumbnailUrl: string,
    albumName: string,
    albumArtists: string[]
}

export default function AlbumCard({ thumbnailUrl, albumName, albumArtists }: AlbumCardProps) {

    return (
        <Card className="my-album-card">
            <Image src={thumbnailUrl} preview={false} />

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