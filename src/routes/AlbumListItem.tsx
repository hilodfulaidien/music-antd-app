import './AlbumListItem.scss'

export interface AlbumListItemProps {
    thumbnailUrl?: string,
    albumName?: string,
    albumArtists?: string[]
}


export default function AlbumListItem({ thumbnailUrl, albumName, albumArtists }: AlbumListItemProps) {
    return (
        <div className="my-album-list-item">
            <img className='my-album-list-item-thumbnail' src={thumbnailUrl} />
            <div className='my-album-list-item-info'>
                <div className="my-album-list-item-name">
                    <a title={albumName}>{albumName}</a>
                </div>
                <div className="my-album-list-item-artists">
                    {albumArtists?.map((value, index) => {
                        if (index > 0) {
                            return <><span> / </span><a key={index}>{value}</a></>
                        } else {
                            return <a key={index}>{value}</a>
                        }
                    })}
                </div>
            </div>
        </div>
    )
}