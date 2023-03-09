import { Card, List } from "antd";
import "./GridViewItem.scss";
import Meta from "antd/es/card/Meta";

type GridViewItemProps = {
  thumbnailUrl: string;
  name: string;
  artists: string[];
};

export default function GridViewItem({
  thumbnailUrl,
  name,
  artists,
}: GridViewItemProps) {
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
      className="my-album-gridview-item"
      title={name + "\n" + artistsString}
    >
      <Card cover={<img src={thumbnailUrl} />}>
        <Meta title={name} description={artistsString} />
      </Card>
    </List.Item>
  );
}
