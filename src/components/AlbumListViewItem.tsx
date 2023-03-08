import { List } from "antd";
import "./AlbumListViewItem.scss";

type AlbumListProps = {
  thumbnailUrl: string;
  albumName: string;
  albumArtists: string[];
};

export default function AlbumListViewItem({
  thumbnailUrl,
  albumName,
  albumArtists,
}: AlbumListProps) {
  let artistsString: string = "";

  albumArtists.forEach((value, index) => {
    if (index == 0) {
      artistsString = value;
    } else {
      artistsString = artistsString + " , " + value;
    }
  });

  return (
    <List.Item
      className="my-listview-item"
      title={albumName + "\n" + artistsString}
    >
      <List.Item.Meta
        avatar={<img src={thumbnailUrl} />}
        title={albumName}
        description={artistsString}
      />
    </List.Item>
  );
}
