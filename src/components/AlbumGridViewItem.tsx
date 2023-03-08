import { Card, List } from "antd";
import "./AlbumGridViewItem.scss";
import Meta from "antd/es/card/Meta";

type AlbumCardProps = {
  thumbnailUrl: string;
  albumName: string;
  albumArtists: string[];
};

export default function AlbumGridViewItem({
  thumbnailUrl,
  albumName,
  albumArtists,
}: AlbumCardProps) {
  let artistsString: string = "";

  albumArtists.forEach((value, index) => {
    if (index == 0) {
      artistsString = value;
    } else {
      artistsString = artistsString + " , " + value;
    }
  });

  return (
    <List.Item className="my-album-gridview-item">
      <Card
        cover={
          <img src={thumbnailUrl} title={albumName + "\n" + artistsString} />
        }
      >
        <Meta title={albumName} description={artistsString} />
      </Card>
    </List.Item>
  );
}
