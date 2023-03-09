import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

export default function AlbumDetailPanel() {
  return (
    <div className="my-album-detail-panel">
      <div className="my-album-detail-panel-header">
        <div className="my-album-detail-panel-thumbnail">
          <img />
        </div>
        <div className="my-album-detail-panel-info">
          <div className="my-album-detail-panel-name">
            <span></span>
          </div>
          <div className="my-album-detail-panel-artist">
            <span></span>
          </div>
          <div className="my-album-detail-panel-action"></div>
        </div>
      </div>

      <div className="my-album-detail-panel-content">
        <Table columns={columns} dataSource={data} showHeader={true} />
      </div>
    </div>
  );
}



interface TrackDataType {
  //key: React.Key;
  trackNumber: number;
  trackName: string;
  trackArtist: string[];
  length: number;
}

const columns: ColumnsType<TrackDataType> = [
  {
    title: "#",
    dataIndex: "trackNumber",
  },
  {
    title: "Title",
    dataIndex: "trackName",
  },
  {
    title: "Artist",
    dataIndex: "trackArtist",
  },
  {
    title: "length",
    dataIndex: "length",
  },
];

const data: TrackDataType[] = [
  {
    trackNumber: 1,
    trackName: "string",
    trackArtist: ['string','string',],
    length: 45,
  },
];

