import './Album.scss'
import AlbumCard from './AlbumCard'
import { AlbumCardProps } from './AlbumCard'
import imageDefault from '../assets/images/ironman.jpg'
import { Row } from 'antd'

export default function Album() {

    function makeItems() {
        return (
            albums.map((item, index) =>
                <AlbumCard thumbnailUrl={item.thumbnailUrl} albumName={item.albumName} albumArtists={item.albumArtists} />
            )
        )
    }

    return (
        <div className='my-album'>
            <Row gutter={8}>
                {makeItems()}
            </Row>
        </div>
    )
}

const albums: AlbumCardProps[] = [
    {
        thumbnailUrl: imageDefault,
        albumName: 'album 1 nsdddsdsdqwewqrqwrqrqsdsddddde',
        albumArtists: [
            'artist 1',
            'artist 2 sdddddddddddddddd',
        ]
    },

]
