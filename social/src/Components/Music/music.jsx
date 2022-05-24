export default function Music(params) {
    
    return(
        <div>
            <div className="music-player">
  
  
  <div className="info">
    
    <div className="left">
      <a href="javascript:;" className="icon-shuffle"></a>
      <a href="javascript:;" className="icon-heart"></a>
    </div>
    
    <div className="center">
      <div className="jp-playlist">
        <ul>
          <li></li>
        </ul>
      </div> 
    </div>
    
    <div className="right">
      <a href="javascript:;" className="icon-repeat"></a>
      <a href="javascript:;" className="icon-share"></a>
    </div>
    
    <div className="progress"></div>
    
  </div>
      
  <div className="controls">
    <div className="current jp-current-time">00:00</div>
    <div className="play-controls">
      <a href="javascript:;" className="icon-previous jp-previous" title="previous"></a>
      <a href="javascript:;" className="icon-play jp-play" title="play"></a>
      <a href="javascript:;" className="icon-pause jp-pause" title="pause"></a>
      <a href="javascript:;" className="icon-next jp-next" title="next"></a>
    </div>
    <div className="volume-level">
      <a href="javascript:;" className="icon-volume-up" title="max volume"></a>
      <a href="javascript:;" className="icon-volume-down" title="mute"></a>
    </div>
  </div>
  
  <div id="jquery_jplayer" className="jp-jplayer"></div>
  
</div>

<p className="copyrights">
  Designed by <a href='https://dribbble.com/shots/1680792-Music-Player-Widget-Free-PSD'>Vladimyr Kondriianenko</a> and coded by <a href='https://codepen.io/mustafaismail22/'>Mustafa ismail</a>
</p>

        </div>
    )
}