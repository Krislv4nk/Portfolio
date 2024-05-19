import videoFile from '../../assets/img/video.mp4';
import {VideoBackground, VideoWrapper} from './Background.styled';
export const Background = () => {
  return (
    <VideoWrapper>
      <VideoBackground autoPlay loop muted playsInline >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
    </VideoWrapper>
  );
};