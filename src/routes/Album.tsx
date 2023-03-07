import './Album.scss'
import imageDefault from '../assets/images/ironman.jpg'
import { Card, List, Row } from 'antd'
import Meta from 'antd/es/card/Meta'

export default function Album() {

    function makeCardItem(item: AlbumCardProps) {

        let artistsString: string = '';

        item.albumArtists.forEach((value, index) => {

            if (index == 0) {
                artistsString = value;
            } else {
                artistsString = artistsString + ' , ' + value;
            }
        });

        return (
            <List.Item className='my-list-card-item'>
                <Card cover={<img src={item.thumbnailUrl} />}>
                    <div title={item.albumName + '\n' + artistsString}>
                        <Meta title={item.albumName} description={artistsString} />
                    </div>
                </Card>
            </List.Item>
        )
    }

    function makeNormalItem(item: AlbumCardProps) {
        let artistsString: string = '';

        item.albumArtists.forEach((value, index) => {

            if (index == 0) {
                artistsString = value;
            } else {
                artistsString = artistsString + ' , ' + value;
            }
        });

        return (
            <List.Item className='my-list-normal-item'>
                <List.Item.Meta avatar={<img src={item.thumbnailUrl} />} title={item.albumName} description={artistsString} />
            </List.Item>
        )
    }

    return (
        <div className='my-album'>
            <div className='my-album-toolbar'>

            </div>
            <List grid={{gutter:16,}} dataSource={albums} renderItem={(item) => makeCardItem(item)} />
            {/* <List dataSource={albums} renderItem={(item) => makeNormalItem(item)} /> */}
        </div>
    )
}


// ---------------------------------------------

type AlbumCardProps = {
    thumbnailUrl: string;
    albumName: string;
    albumArtists: string[];
}

const albums: AlbumCardProps[] = [
    {
        thumbnailUrl: imageDefault,
        albumName: 'album 1 nsdddsdsdqwewqrqwrqrqsdsddddde',
        albumArtists: [
            'artist 1',
           
        ]
    },
    {
        thumbnailUrl: imageDefault,
        albumName: 'album 1 nsdddsdsdqwewqrqwrqrqsdsddddde',
        albumArtists: [
            'artist 1',
            'artist 2 sdddddddddddddddd',
        ]
    },
    {
        thumbnailUrl: imageDefault,
        albumName: 'album 1 nsdddsdsdqwewqrqwrqrqsdsddddde',
        albumArtists: [
            'artist 1',
            'artist 2 sdddddddddddddddd',
        ]
    },
    {
        thumbnailUrl: imageDefault,
        albumName: 'album 1 nsdddsdsdqwewqrqwrqrqsdsddddde',
        albumArtists: [
            'artist 1',
            'artist 2 sdddddddddddddddd',
        ]
    },
    {
        thumbnailUrl: imageDefault,
        albumName: 'album 1 nsdddsdsdqwewqrqwrqrqsdsddddde',
        albumArtists: [
            'artist 1',
            'artist 2 sdddddddddddddddd',
        ]
    },
    {
        thumbnailUrl: imageDefault,
        albumName: 'album 1 nsdddsdsdqwewqrqwrqrqsdsddddde',
        albumArtists: [
            'artist 1',
            'artist 2 sdddddddddddddddd',
        ]
    },
]
