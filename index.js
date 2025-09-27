import {videoInfos} from './data/videoInfo.js';
const videoGrid = document.querySelector('.js-video-grid');
let videoInfoHTML = '';
videoInfos.forEach(videoInfo => {
    videoInfoHTML += `
     <div class="video-1">
        <div class="thumbnail">
            <a href="${videoInfo.video}">
                <img class="video-thumbnail" src="${videoInfo.thumbnail}" alt="thumbnail">
            </a>
            <div class="video-time">${videoInfo.time}</div>
        </div>

        <div class="video-info">
            <div class="video-profile">
                <img class="profile-image" src="${videoInfo.channelPhoto}" alt="profile-image">
            </div>
            <div class="video-titles">
                <div class="title">${videoInfo.title}</div>
                <div class="video-author">${videoInfo.ChannelName}</div>
                <div class="video-status">${videoInfo.views}</div>
            </div>
        </div>
    </div>
    `;
    videoGrid.innerHTML = videoInfoHTML;
});
