const glide = new Glide(".glide")
const captionsEl = document.querySelectorAll('.slide-caption')

glide.on(['mount.after', 'run.after'], () => {
  const caption = captionsEl[glide.index]
  anime({
    targets: caption.children,
    opacity: [0, 1],
    duration: 1600,
    ease: 'limear',
    delay: anime.stagger(400, { start: 300 }),
    translateY: [anime.stagger([40, 10]), 0]
  })
})

glide.on('run.before', () => {
  document.querySelectorAll('.slide-caption > *').forEach(item => {
    item.style.opacity = 0
  })
})

glide.mount()