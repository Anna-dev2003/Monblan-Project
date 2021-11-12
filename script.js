
const galleryG = document.getElementById('gallery-grey')
const lineB = document.getElementById('line-blue')
const galleryB = document.getElementById('gallery-blue')
const lineG = document.getElementById('line-grey')

const sectionGallery = document.querySelector('.photo-bloks-gallery')
const sectionLine = document.querySelector('.photo-bloks-line')


sectionGallery.style.display = 'none'

lineB.addEventListener('click', (event) => {
    lineB.style.display = 'block'
    lineG.style.display = 'none'

    galleryB.style.display = 'none'
    galleryG.style.display = 'grid'

    sectionGallery.style.display = 'none'
    sectionLine.style.display = 'block'
})
galleryG.addEventListener('click', (event) => {
    lineB.style.display = 'none'
    lineG.style.display = 'block'

    galleryB.style.display = 'grid'
    galleryG.style.display = 'none'

    sectionGallery.style.display = 'block'
    sectionLine.style.display = 'none'
    console.log(sectionGallery)
})

lineG.addEventListener('click', (event) => {
    lineB.style.display = 'block'
    lineG.style.display = 'none'

    galleryB.style.display = 'none'
    galleryG.style.display = 'grid'

    sectionGallery.style.display = 'none'
    sectionLine.style.display = 'block'
})

galleryB.addEventListener('click', (event) => {
    lineB.style.display = 'none'
    lineG.style.display = 'block'

    galleryB.style.display = 'grid'
    galleryG.style.display = 'none'

    sectionGallery.style.display = 'block'
    sectionLine.style.display = 'none'
    console.log(sectionGallery)
})