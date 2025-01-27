export const VideoList = ({ videos, onSelect }) => {
  return (
    <ul>
      {videos.map((video) => (
        <li key={video.id} onClick={() => onSelect(video.link)}></li>
      ))}
    </ul>
  );
};
