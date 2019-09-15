let player;

const formatTime = timeSec => {
  const roundTime = Math.round(timeSec);

  const minutes = Math.floor(roundTime / 60);
  const seconds = roundTime - minutes * 60;

  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${formattedSeconds}`;
};


const onPlayerReady = () => {

  let interval;
  let durationSec = player.getDuration();

  $('.video__time-estimate').text(formatTime(durationSec));

  if (typeof interval !== "undefined") {
    clearInterval(interval);
  }

  interval = setInterval(() => {
    const completedSec = player.getCurrentTime();
    const completedPercent = (completedSec / durationSec) * 100;

    $(".video__playback-button").css({
      left: `${completedPercent}%`
    });

    $('.video__time-completed').text(formatTime(completedSec));

  }, 1000);
};

const eventsInit = () => {
    $('.video__start-button').on('click', e => {
        e.preventDefault();
        const btn = $(e.currentTarget);

        if(btn.hasClass('paused')) {
          player.pauseVideo();
          btn.removeClass('paused');
        } else {
          player.playVideo();
          btn.addClass('paused');
        }
    });

      $(".video__playback").on("click", e => {
        const bar = $(e.currentTarget);
        const newButtonPosition = e.pageX - bar.offset().left;
        const buttonPosPercent = (newButtonPosition / bar.width()) * 100;
        const newPlayerTimeSec = (player.getDuration() / 100) * buttonPosPercent;

        $(".video__playback-button").css({
          left: `${buttonPosPercent}%`
        });

        player.seekTo(newPlayerTimeSec);
      });

      $(".video-container__poster").on("click", e => {
        player.playVideo();
        $(".video-container-block1").addClass('active');
      });

};

const onPlayerStateChange = event => {
  const playerButton = $(".video__start-button");
  /*
  -1 (воспроизведение видео не начато)
  0 (воспроизведение видео завершено)
  1 (воспроизведение)
  2 (пауза)
  3 (буферизация)
  5 (видео подают реплики).
   */
  switch (event.data) {
    case 1: 
      $('.video-container-block1').addClass('active');
      playerButton.addClass("paused");
      break;
    case 2: 
      playerButton.removeClass("paused");
      break;
  }
};


     function onYouTubeIframeAPIReady() {
        player = new YT.Player('YT-player', {
          height: '100%',
          width: '100%',
          videoId: 'ZLywUPpuOig',
          events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
          },
          playerVars: {
            controls: 0,
            disablekb: 0,
            showinfo: 0,
            rel: 0,
            autoplay: 0,
            modestbranding: 0
          }
        });
      }

      eventsInit();