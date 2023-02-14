import Vimeo from '@vimeo/player';
import _throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(LOCAL_STORAGE_KEY);
const player = new Vimeo('vimeo-player');

player.on('loaded', loadCurrent);

player.on('timeupdate',_throttle(setCurrentTime, 1000)
);


function setCurrentTime(currentLoaction) {
  localStorage.setItem(LOCAL_STORAGE_KEY, currentLoaction.seconds);
}

function loadCurrent() {
   
  player.setCurrentTime(currentTime);
}