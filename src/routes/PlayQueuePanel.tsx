import Table, { ColumnsType } from "antd/es/table";


export default function PlayQueuePanel(){
    return (
        <Table />
    )
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
  