import "./AlbumPanel.scss";
import imageDefault from "../assets/images/ironman.jpg";
import { List, Segmented } from "antd";
import { GridViewIcon, ListViewIcon } from "../utils/Icons";
import AlbumGridItem from "../components/AlbumGridViewItem";
import AlbumListItem from "../components/AlbumListViewItem";
import { useState } from "react";
import SearchInput from "../components/SearchInput";
type ViewType = "listview" | "gridview";

export default function AlbumPanel() {
  const [view, setView] = useState<ViewType>("gridview");

  function makeGridView() {
    return (
      <List
        grid={{ gutter: 16 }}
        dataSource={albums}
        renderItem={(item) => (
          <AlbumGridItem
            thumbnailUrl={item.thumbnailUrl}
            albumName={item.albumName}
            albumArtists={item.albumArtists}
          />
        )}
      />
    );
  }

  function makeListView() {
    return (
      <List
        dataSource={albums}
        renderItem={(item) => (
          <AlbumListItem
            thumbnailUrl={item.thumbnailUrl}
            albumName={item.albumName}
            albumArtists={item.albumArtists}
          />
        )}
      />
    );
  }

  return (
    <div className="my-album-panel">
      <div className="my-album-panel-toolbar">
        <SearchInput/>
        <Segmented
          value={view}
          options={[
            {
              value: "listview",
              icon: <ListViewIcon />,
            },
            {
              value: "gridview",
              icon: <GridViewIcon />,
            },
          ]}
          onChange={(v) => setView(v as ViewType)}
        />
      </div>
      {view == "gridview" ? makeGridView() : makeListView()}
    </div>
  );
}

// ---------------------------------------------

type AlbumCardProps = {
  thumbnailUrl: string;
  albumName: string;
  albumArtists: string[];
};

const albums: AlbumCardProps[] = [
  {
    thumbnailUrl: imageDefault,
    albumName:
      "album 1 nsdddsdsdqwewqrqwrqrqsdsddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde",
    albumArtists: ["artist 1"],
  },
  {
    thumbnailUrl: imageDefault,
    albumName: "album 1 nsdddsdsdqwewqrqwrqrqsdsddddde",
    albumArtists: ["artist 1", "artist 2 sdddddddddddddddd"],
  },
  {
    thumbnailUrl: imageDefault,
    albumName: "album 1 nsdddsdsdqwewqrqwrqrqsdsddddde",
    albumArtists: ["artist 1", "artist 2 sdddddddddddddddd"],
  },
  {
    thumbnailUrl: imageDefault,
    albumName: "album 1 nsdddsdsdqwewqrqwrqrqsdsddddde",
    albumArtists: ["artist 1", "artist 2 sdddddddddddddddd"],
  },
  {
    thumbnailUrl: imageDefault,
    albumName: "album 1 nsdddsdsdqwewqrqwrqrqsdsddddde",
    albumArtists: ["artist 1", "artist 2 sdddddddddddddddd"],
  },
  {
    thumbnailUrl: imageDefault,
    albumName: "album 1 nsdddsdsdqwewqrqwrqrqsdsddddde",
    albumArtists: ["artist 1", "artist 2 sdddddddddddddddd"],
  },
];
