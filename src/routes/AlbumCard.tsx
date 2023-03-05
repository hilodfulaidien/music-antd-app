import { Card } from "antd";
import './AlbumCard.scss'

export interface AlbumCardProps {
    thumbnailUrl?: string,
    albumName?: string,
    albumArtists?: string[]
}

export default function AlbumCard({ thumbnailUrl, albumName, albumArtists }: AlbumCardProps) {


    return (
        <Card className="my-album-card" hoverable cover={<img src={thumbnailUrl} />}>
            <div className="my-album-card-name">
                <a title={albumName}>{albumName}</a>
            </div>
            <div className="my-album-card-artists">
                {albumArtists?.map((value, index) => {
                    if (index > 0) {
                        return <><span> / </span><a key={index}>{value}</a></>
                    } else {
                        return <a key={index}>{value}</a>
                    }
                })}
            </div>
        </Card>
    )
}