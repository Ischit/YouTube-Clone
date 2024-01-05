import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title={"The BEST & The WORST of 2023 | ScoopCast 76"}
          views={"101K"}
          timestamp={"5 days ago"}
          channelImage={
            "https://yt3.googleusercontent.com/VrmYu0p5JYVmp-WhcgoqbSZnUL-X3xNwNDBQ7_FAMfjiFGC-J2DkdCuOkGTVinH8rg3d9QwNNuo=s176-c-k-c0x00ffffff-no-rj"
          }
          channel={"ScoopCast"}
          image={"https://img.youtube.com/vi/5oIvlZdNo8Q/maxresdefault.jpg"}
        />
        <VideoCard
          title={
            "These are the BEST Iron Players I've Ever Seen... (they're EVOLVING)"
          }
          views={"204K"}
          timestamp={"3 months ago"}
          channelImage={
            "https://yt3.googleusercontent.com/ytc/AIf8zZQaFgtWb64er3Zd0kf8aXjEMACNI2JcW86vUCgjlw=s176-c-k-c0x00ffffff-no-rj"
          }
          channel={"eggwick"}
          image={"https://img.youtube.com/vi/7Ydbi8ZES3U/maxresdefault.jpg"}
        />
        <VideoCard
          title={
            "ANIMAL: ARJAN VAILLY | Ranbir Kapoor | Sandeep Vanga | Bhupinder B, Manan B | Bhushan K"
          }
          views={"127M"}
          timestamp={"1 month ago"}
          channelImage={
            "https://yt3.googleusercontent.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s176-c-k-c0x00ffffff-no-rj"
          }
          channel={"T-Series"}
          image={"https://img.youtube.com/vi/zqGW6x_5N0k/maxresdefault.jpg"}
        />
        <VideoCard
          title={"100 Movies You have to watch before you DIE"}
          views={"128K"}
          timestamp={"5 hours ago"}
          channelImage={
            "https://yt3.ggpht.com/7oUYOkSQuvixFZonWiR_AC7uKfMyoqRCnSBpmH-V_KUry2QgeSK2zHUDlYoLtG9xfTR-2e_NJA=s88-c-k-c0x00ffffff-no-rj"
          }
          channel={"BnfTV"}
          image={"https://img.youtube.com/vi/x7LYlVv13AM/maxresdefault.jpg"}
        />
        <VideoCard
          title={"DUNKI vs. SALAAR Disappointed - MEN OF CULTURE 108"}
          views={"349K"}
          timestamp={"12 days ago"}
          channelImage={
            "https://yt3.ggpht.com/N_x8PwnZO6O5Vq0eTl9XEfN9zKmZKqjap4_lz1zNJjTGFgqiBHMw10H9Zx12eoaNqIpPISngmis=s88-c-k-c0x00ffffff-no-rj"
          }
          channel={"Men of culture"}
          image={"https://img.youtube.com/vi/46u_scGNWr4/maxresdefault.jpg"}
        />
        <VideoCard
          title={"An Important Update on Homelander"}
          views={"3.4M"}
          timestamp={"6 months ago"}
          channelImage={
            "https://yt3.ggpht.com/ytc/AIf8zZTII1mubU47JQmgtfXo9HEbHpV1Bn-aVahdTsZH=s88-c-k-c0x00ffffff-no-rj"
          }
          channel={"Vought International"}
          image={"https://img.youtube.com/vi/6smsQNjNXGg/maxresdefault.jpg"}
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
