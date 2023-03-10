import "./AlbumPanel.scss";
import imageDefault from "../assets/images/ironman.jpg";
import { List, Segmented } from "antd";
import { GridViewIcon, ListViewIcon } from "../utils/Icons";
import GridViewItem from "../components/GridViewItem";
import ListViewItem from "../components/ListViewItem";
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
          <GridViewItem
            thumbnailUrl={item.thumbnailUrl}
            name={item.name}
            artists={item.artists}
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
          <ListViewItem
            thumbnailUrl={item.thumbnailUrl}
            name={item.name}
            artists={item.artists}
          />
        )}
      />
    );
  }

  return (
    <div className="my-album-panel">
      <div className="my-album-panel-toolbar">
        <SearchInput />
        <Segmented
          value={view}
          options={[
            {             
              value: "listview",
              label:(<span title='List View'><ListViewIcon /></span>)
              
            },
            {
              title:'Grid View',
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
  name: string;
  artists: string[];
};

const albums: AlbumCardProps[] = [
  {
    thumbnailUrl: imageDefault,
    name: "album 1 nsdddsdsdqwewqrqwrqrqsdsddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde",
    artists: ["artist 1"],
  },
  {
    thumbnailUrl: imageDefault,
    name: "album 1 nsdddsdsdqwewqrqwrqrqsdsddddde",
    artists: ["artist 1", "artist 2 sdddddddddddddddd"],
  },
  {
    thumbnailUrl: imageDefault,
    name: "album 1 nsdddsdsdqwewqrqwrqrqsdsddddde",
    artists: ["artist 1", "artist 2 sdddddddddddddddd"],
  },
  {
    thumbnailUrl: imageDefault,
    name: "album 1 nsdddsdsdqwewqrqwrqrqsdsddddde",
    artists: ["artist 1", "artist 2 sdddddddddddddddd"],
  },
  {
    thumbnailUrl: imageDefault,
    name: "album 1 nsdddsdsdqwewqrqwrqrqsdsddddde",
    artists: ["artist 1", "artist 2 sdddddddddddddddd"],
  },
  {
    thumbnailUrl: imageDefault,
    name: "album 1 nsdddsdsdqwewqrqwrqrqsdsddddde",
    artists: ["artist 1", "artist 2 sdddddddddddddddd"],
  },
];
