import { List } from "antd";
import "./ListViewItem.scss";

type ListViewItemProps = {
  thumbnailUrl: string;
  name: string;
  artists: string[];
};

export default function ListViewItem({
  thumbnailUrl,
  name,
  artists,
}: ListViewItemProps) {
  let artistsString: string = "";

  artists.forEach((value, index) => {
    if (index == 0) {
      artistsString = value;
    } else {
      artistsString = artistsString + " , " + value;
    }
  });

  return (
    <List.Item
      className="my-listview-item"
      title={name + "\n" + artistsString}
    >
      <List.Item.Meta
        avatar={<img src={thumbnailUrl} />}
        title={name}
        description={artistsString}
      />
    </List.Item>
  );
}
