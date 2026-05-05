let currentAudio: HTMLAudioElement | null = null
let isPlayListenerReady = false

function pauseAudio(audio: HTMLAudioElement) {
  audio.pause()
  audio.currentTime = 0
}

function pauseOtherDocumentAudio(target?: HTMLAudioElement) {
  if (typeof document === 'undefined')
    return

  for (const audio of Array.from(document.getElementsByTagName('audio'))) {
    if (audio !== target)
      pauseAudio(audio)
  }
}

function ensurePlayListener() {
  if (isPlayListenerReady || typeof document === 'undefined')
    return

  document.addEventListener('play', (event) => {
    const target = event.target
    if (!(target instanceof HTMLAudioElement))
      return

    if (currentAudio && currentAudio !== target)
      pauseAudio(currentAudio)

    pauseOtherDocumentAudio(target)
    currentAudio = target
  }, true)

  isPlayListenerReady = true
}

export function useAudioPlayer() {
  ensurePlayListener()

  function playAudio(src: string) {
    if (currentAudio)
      pauseAudio(currentAudio)

    pauseOtherDocumentAudio()

    const audio = document.createElement('audio')
    audio.src = src
    currentAudio = audio

    audio.addEventListener('ended', () => {
      if (currentAudio === audio)
        currentAudio = null
    })

    audio.play()
  }

  return {
    playAudio,
  }
}
