import image1 from '../../images/svg-1.svg'
import image2 from '../../images/svg-2.svg'
import image3 from '../../images/svg-3.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Chi sono',
    headline: 'Un semplice ragazzo',
    description: '... alla quale piace scoprire, studiare, collaborare, sognare e darsi da fare.',
    buttonLabel: "Dai un'occhiata al mio CV!",
    imgStart: false,
    img: image1,
    alt: 'Immagine non disponibile',
    dark: true,
    primary: true,
    darkText: false,
    check: 'cv'
}

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Le mie passioni',
    headline: 'Sono infinite',
    description: "... ma hanno particolare rilievo nella mia vita la musica, la tecnologia, l'astronomia, il calcio e lo sport in generale, il gaming, "+
                  " la storia e il mondo in tutta la sua naturalezza.",
    buttonLabel: 'Ti racconto qualcosa?',
    imgStart: true,
    img: image2,
    alt: 'Immagine non disponibile',
    dark: false,
    primary: false,
    darkText: true,
    check: 'passion'
}

export const homeObjThree = {
    id: 'tutorial',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Come ho realizzato questo sito',
    headline: 'Grazie a un tutorial su youtube',
    description: 'Ho voluto studiare le basi di React per conto mio, realizzando questo sito seguendo un tutorial di un ragazzo con un canale di oltre 80.000 iscritti!',
    buttonLabel: 'Guarda il video',
    imgStart: false,
    img: image3,
    alt: 'Immagine non disponibile',
    dark: false,
    primary: false,
    darkText: true,
    check: 'tutorial'
}