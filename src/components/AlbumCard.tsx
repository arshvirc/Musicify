import { PurpleData } from "../redux/services/spotifytypes";

const AlbumCard = (props: PurpleData) => {
  return <div>{props.name} </div>;
};

export default AlbumCard;
