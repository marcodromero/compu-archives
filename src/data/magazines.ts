import bcCover01 from '../assets/covers/bc01.jpg';
import bcCover02 from '../assets/covers/bc02.jpg';
import bcCover03 from '../assets/covers/bc03.jpg';
import bcCover04 from '../assets/covers/bc04.jpg';
import bcCover05 from '../assets/covers/bc05.jpg';
import bcCover06 from '../assets/covers/bc06.jpg';
import bcCover07 from '../assets/covers/bc07.jpg';
import bcCover08 from '../assets/covers/bc08.jpg';
import bcCover09 from '../assets/covers/bc09.jpg';
import bcCover10 from '../assets/covers/bc10.jpg';
import bcCover11 from '../assets/covers/bc11.jpg';
import bcCover12 from '../assets/covers/bc12.jpg';
import bcCover13 from '../assets/covers/bc13.jpg';
import bcCover14 from '../assets/covers/bc14.jpg';
import bcCover15 from '../assets/covers/bc15.jpg';
import bcCover16 from '../assets/covers/bc16.jpg';
import bcCover17 from '../assets/covers/bc17.jpg';
import bcCover18 from '../assets/covers/bc18.jpg';
import bcCover19 from '../assets/covers/bc19.jpg';
import bcCover20 from '../assets/covers/bc20.jpg';
import bcCover21 from '../assets/covers/bc21.jpg';
import bcCover22 from '../assets/covers/bc22.jpg';
import bcCover23 from '../assets/covers/bc23.jpg';
import bcCover24 from '../assets/covers/no-image.jpg';
import bcCover25 from '../assets/covers/no-image.jpg';
import bcCover26 from '../assets/covers/no-image.jpg';
import bcCover27 from '../assets/covers/bc27.jpg';

import bc01Cd01Preview from '../assets/gifs/bc01-cd01-preview.gif';
import bc01Cd02Preview from '../assets/gifs/no-cover.gif';
import bc02Cd01Preview from '../assets/gifs/bc02-cd01-preview.gif';
import bc03Cd01Preview from '../assets/gifs/bc03-cd01-preview.gif';
import bc03Cd02Preview from '../assets/gifs/bc03-cd02-preview.gif';
import bc04Cd01Preview from '../assets/gifs/bc04-cd01-preview.gif';
import bc05Cd01Preview from '../assets/gifs/bc05-cd01-preview.gif';
import bc06Cd01Preview from '../assets/gifs/bc06-cd01-preview.gif';
import bc07Cd01Preview from '../assets/gifs/bc07-cd01-preview.gif';
import bc08Cd01Preview from '../assets/gifs/bc08-cd01-preview.gif';
import bc09Cd01Preview from '../assets/gifs/bc09-cd01-preview.gif';
import bc10Cd01Preview from '../assets/gifs/bc10-cd01-preview.gif';
import bc11Cd01Preview from '../assets/gifs/bc11-cd01-preview.gif';
import bc12Cd01Preview from '../assets/gifs/bc12-cd01-preview.gif';
import bc13Cd01Preview from '../assets/gifs/bc13-cd01-preview.gif';
import bc14Cd01Preview from '../assets/gifs/bc14-cd01-preview.gif';
import bc15Cd01Preview from '../assets/gifs/bc15-cd01-preview.gif';
import bc16Cd01Preview from '../assets/gifs/bc16-cd01-preview.gif';
import bc17Cd01Preview from '../assets/gifs/bc17-cd01-preview.gif';
import bc18Cd01Preview from '../assets/gifs/bc18-cd01-preview.gif';
import bc18Cd02Preview from '../assets/gifs/bc18-cd02-preview.gif';
import bc19Cd01Preview from '../assets/gifs/bc19-cd01-preview.gif';
import bc19Cd02Preview from '../assets/gifs/bc19-cd02-preview.gif';
import bc20Cd01Preview from '../assets/gifs/bc20-cd01-preview.gif';
import bc20Cd02Preview from '../assets/gifs/bc20-cd02-preview.gif';
import bc21Cd01Preview from '../assets/gifs/bc21-cd01-preview.gif';
import bc21Cd02Preview from '../assets/gifs/bc21-cd02-preview.gif';
import bc22Cd01Preview from '../assets/gifs/bc22-cd01-preview.gif';
import bc22Cd02Preview from '../assets/gifs/bc22-cd02-preview.gif';
import bc23Cd01Preview from '../assets/gifs/bc23-cd01-preview.gif';
import bc23Cd02Preview from '../assets/gifs/bc23-cd02-preview.gif';
import bc24Cd01Preview from '../assets/gifs/bc24-cd01-preview.gif';
import bc24Cd02Preview from '../assets/gifs/bc24-cd02-preview.gif';
import bc24Cd03Preview from '../assets/gifs/bc24-cd03-preview.gif';
import bc25Cd01Preview from '../assets/gifs/bc25-cd01-preview.gif';
import bc25Cd02Preview from '../assets/gifs/no-cover.gif';
import bc25Cd03Preview from '../assets/gifs/bc25-cd03-preview.gif';
import bc26Cd01Preview from '../assets/gifs/bc26-cd01-preview.gif';
import bc26Cd02Preview from '../assets/gifs/bc26-cd02-preview.gif';
import bc27Cd01Preview from '../assets/gifs/bc27-cd01-preview.gif';
import bc27Cd02Preview from '../assets/gifs/bc27-cd02-preview.gif';

import bc01Video from '../assets/videos/bc01-video-101999.mp4';
import bc06Video from '../assets/videos/bc06-video-032000.mp4';
import bc07Video from '../assets/videos/bc07-video-042000.mp4';
import bc10Video from '../assets/videos/bc10-video-072000.mp4';
import bc11Video from '../assets/videos/bc11-video-082000.mp4';
import bc12Video from '../assets/videos/bc12-video-092000.mp4';
import bc14Video from '../assets/videos/bc14-video-112000.mp4';
import bc15Video from '../assets/videos/bc15-video-122000.mp4';
import bc18Video from '../assets/videos/bc18-video-032001.mp4';

type magazinesType = {
  edition: string;
  cover: string;
  published: string;
  cds: { code: string; preview: string }[];
  video?: string;
  description: string;
}[];

const magazines: magazinesType = [
  {
    edition: '01',
    cover: bcCover01,
    published: 'Octubre de 1999',
    cds: [
      { code: 'bc01cd01', preview: bc01Cd01Preview },
      { code: 'bc01cd02', preview: bc01Cd02Preview },
    ],
    video: bc01Video,
    description: 'Claw + Encarta 2000 (Demo)',
  },
  {
    edition: '02',
    cover: bcCover02,
    published: 'Noviembre de 1999',
    cds: [{ code: 'bc02cd01', preview: bc02Cd01Preview }],
    description: 'S.A.R: Helicópteros de búsqueda y rescate',
  },
  {
    edition: '03',
    cover: bcCover03,
    published: 'Diciembre de 1999',
    cds: [
      { code: 'bc03cd01', preview: bc03Cd01Preview },
      { code: 'bc03cd02', preview: bc03Cd02Preview },
    ],
    description: 'Super bike racing + 4 Demos',
  },
  {
    edition: '04',
    cover: bcCover04,
    published: 'Enero de 2000',
    cds: [{ code: 'bc04cd01', preview: bc04Cd01Preview }],
    description: 'El Diablo de Halloween + Supertrucos',
  },
  {
    edition: '05',
    cover: bcCover05,
    published: 'Febrero de 2000',
    cds: [{ code: 'bc05cd01', preview: bc05Cd01Preview }],
    description: 'Snowmobile Championship 2000',
  },
  {
    edition: '06',
    cover: bcCover06,
    published: 'Marzo de 2000',
    cds: [{ code: 'bc06cd01', preview: bc06Cd01Preview }],
    video: bc06Video,
    description: 'Diccionario Elemental Multilenguaje',
  },
  {
    edition: '07',
    cover: bcCover07,
    published: 'Abril de 2000',
    cds: [{ code: 'bc07cd01', preview: bc07Cd01Preview }],
    video: bc07Video,
    description: 'Eliminatorias Europeas',
  },
  {
    edition: '08',
    cover: bcCover08,
    published: 'Mayo de 2000',
    cds: [{ code: 'bc08cd01', preview: bc08Cd01Preview }],
    description: "Oddworld Aby's odysee",
  },
  {
    edition: '09',
    cover: bcCover09,
    published: 'Junio de 2000',
    cds: [{ code: 'bc09cd01', preview: bc09Cd01Preview }],
    description: 'Creatures + 2 Antivirus',
  },
  {
    edition: '10',
    cover: bcCover10,
    published: 'Julio de 2000',
    cds: [{ code: 'bc10cd01', preview: bc10Cd01Preview }],
    video: bc10Video,
    description: 'Lode runner 2 + Fotos de la NASA',
  },
  {
    edition: '11',
    cover: bcCover11,
    published: 'Agosto de 2000',
    cds: [{ code: 'bc11cd01', preview: bc11Cd01Preview }],
    video: bc11Video,
    description: 'Speedboat Attack + Programas',
  },
  {
    edition: '12',
    cover: bcCover12,
    published: 'Septiembre de 2000',
    cds: [{ code: 'bc12cd01', preview: bc12Cd01Preview }],
    video: bc12Video,
    description: 'Speed 2021 + Fotos de Australia',
  },
  {
    edition: '13',
    cover: bcCover13,
    published: 'Octubre de 2000',
    cds: [{ code: 'bc13cd01', preview: bc13Cd01Preview }],
    description: 'Crazy Pirat Pinball + 10 Programas',
  },
  {
    edition: '14',
    cover: bcCover14,
    published: 'Noviembre de 2000',
    cds: [{ code: 'bc14cd01', preview: bc14Cd01Preview }],
    video: bc14Video,
    description: 'Total Soccer 2000 + 3 Tetris',
  },
  {
    edition: '15',
    cover: bcCover15,
    published: 'Diciembre de 2000',
    cds: [{ code: 'bc15cd01', preview: bc15Cd01Preview }],
    video: bc15Video,
    description: 'Toyland Racing + 5 Demos',
  },
  {
    edition: '16',
    cover: bcCover16,
    published: 'Enero de 2001',
    cds: [{ code: 'bc16cd01', preview: bc16Cd01Preview }],
    description: 'G-Tok: Batalla espacial + Salvapantallas 3D',
  },
  {
    edition: '17',
    cover: bcCover17,
    published: 'Febrero de 2001',
    cds: [{ code: 'bc17cd01', preview: bc17Cd01Preview }],
    description:
      'Rollerbot: El robot cometodo + Kit digital para papelería personal',
  },
  {
    edition: '18',
    cover: bcCover18,
    published: 'Marzo de 2001',
    cds: [
      { code: 'bc18cd01', preview: bc18Cd01Preview },
      { code: 'bc18cd02', preview: bc18Cd02Preview },
    ],
    video: bc18Video,
    description: 'Patrulla 2098 + Firewall',
  },
  {
    edition: '19',
    cover: bcCover19,
    published: 'Abril de 2001',
    cds: [
      { code: 'bc19cd01', preview: bc19Cd01Preview },
      { code: 'bc19cd02', preview: bc19Cd02Preview },
    ],
    description:
      ' RoboRumble + Fondos de escritorio + Curso de Internet + Fotos satelitales de Argentina',
  },
  {
    edition: '20',
    cover: bcCover20,
    published: 'Mayo de 2001',
    cds: [
      { code: 'bc20cd01', preview: bc20Cd01Preview },
      { code: 'bc20cd02', preview: bc20Cd02Preview },
    ],
    description: 'Caballeros y Mercaderes + Dinosaurios',
  },
  {
    edition: '21',
    cover: bcCover21,
    published: 'Junio de 2001',
    cds: [
      { code: 'bc21cd01', preview: bc21Cd01Preview },
      { code: 'bc21cd02', preview: bc21Cd02Preview },
    ],
    description:
      'Silkolene Honda Motocross GP + Enciclopedia del Espacio y el Universo',
  },
  {
    edition: '22',
    cover: bcCover22,
    published: 'Julio de 2001',
    cds: [
      { code: 'bc22cd01', preview: bc22Cd01Preview },
      { code: 'bc22cd02', preview: bc22Cd02Preview },
    ],
    description: ' Akimbo + Felinos',
  },
  {
    edition: '23',
    cover: bcCover23,
    published: 'Agosto de 2001',
    cds: [
      { code: 'bc23cd01', preview: bc23Cd01Preview },
      { code: 'bc23cd02', preview: bc23Cd02Preview },
    ],
    description: 'Speedway + Top of the Pops Mix Factory',
  },
  {
    edition: '24',
    cover: bcCover24,
    published: 'Septiembre de 2001',
    cds: [
      { code: 'bc24cd01', preview: bc24Cd01Preview },
      { code: 'bc24cd02', preview: bc24Cd02Preview },
      { code: 'bc24cd03', preview: bc24Cd03Preview },
    ],
    description: 'Seven Kingdoms + Enciclopedia de la naturaleza',
  },
  {
    edition: '25',
    cover: bcCover25,
    published: 'Octubre de 2001',
    cds: [
      { code: 'bc25cd01', preview: bc25Cd01Preview },
      { code: 'bc25cd02', preview: bc25Cd02Preview },
      { code: 'bc25cd03', preview: bc25Cd03Preview },
    ],
    description: 'Super atletismo + Enciclopedia de la ciencia 2.0 + 9 Demos',
  },
  {
    edition: '26',
    cover: bcCover26,
    published: 'Noviembre de 2001',
    cds: [
      { code: 'bc26cd01', preview: bc26Cd01Preview },
      { code: 'bc26cd02', preview: bc26Cd02Preview },
    ],
    description: 'Hades 2 + Moving Puzzle Mundo marino + 3 Demos',
  },
  {
    edition: '27',
    cover: bcCover27,
    published: 'Diciembre de 2001',
    cds: [
      { code: 'bc27cd01', preview: bc27Cd01Preview },
      { code: 'bc27cd02', preview: bc27Cd02Preview },
    ],
    description: 'Tzar + Boomeran Breaker + 21 Programas',
  },
];

export default magazines;
