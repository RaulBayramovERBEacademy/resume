/**
 * Tüm kişisel bilgiler ve projeler burada.
 * Yeni proje / Drive linki eklemek için yalnızca bu objeyi güncelleyin.
 */
import render1 from '../images/render1.png'
import Aduashvili from '../images/Aduashvili.png'
import avakova from '../images/avakova.png'
import iremashvili from '../images/iremashvili.png'
import akaganian from '../images/akaganian.png'
import evakucation from '../images/evakucation.png'
export const portfolioData = {
  personal: {
    name: 'Raul Bayramov',
    title: 'არქიტექტორი',
    bio: `კომპიუტერული მეცნიერებების მიმართულების სტუდენტი/კურსდამთავრებული არქიტექტურულ სფეროში 1-წლიანი
სამუშაო გამოცდილებით. ვფლობ Archicad-ს მაღალ დონეზე და დამოუკიდებლად მომზადებული მაქვს 10-ზე მეტი
არქიტექტურული პროექტი. ვიცი პროექტის მომზადების, მერიის მოთხოვნებთან შესაბამისობისა და მშენებლობის
ნებართვის მიღებამდე არსებული ძირითადი პროცედურები. ვაერთიანებ არქიტექტურულ, ტექნოლოგიურ და
ციფრულ უნარებს.`,
    email: 'raulbayramov152@gmail.com',
    phone: '+995 599 06 65 46',
    location: 'გარდაბანი, საქართველო',
    cvUrl: '/Raul_Bayramov_CV.pdf',
    cvFileName: 'Raul_Bayramov_CV.pdf',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com/RaulBayramovERBEacademy',
    },
  },

  skills: [
    'JavaScript',
    'ICT',
    'Figma',
    'Archicad',
    'Gis',
    'GEECB',
  ],

  projects: [
    {
      id: 1,
      title: '60 -მდე სახლის მშენებლობის პროექტი',
      description:
        'გარდაბნის რაიონში სოფ. გამარჯვება I-ში 60მ²-მდე დამხმარე სათავსოს მოწყობის სამშენებლო დოკუმენტაციის პროექტი.',
      category: 'არქიტექტურა',
      image: render1,
      driveUrl: 'https://drive.google.com/drive/folders/1dmHNyoQ9wd-tKwODS0B1KQqYmhmhh8MG',
    },

    {
      id: 2,
      title: 'ინდივიდუალური საცხოვრებელი სახლის რეკონსტრუქცია(გარდაბნის რაიონი, სოფელი ფოლადაანთ-კარი)',
      description:
        'წინამდებარე პროექტი ითვალისწინებს გარდაბნის რაიონში, სოფელ ფოლადაანთ კარში არსებული ორსართულიანი ინდივიდუალური საცხოვრებელი სახლის რეკონსტრუქციას.',
      category: 'არქიტექტურა',
      image:
          Aduashvili,
      driveUrl: 'https://drive.google.com/drive/folders/1QunhhzSNqpPjxRrEegWwbGuwXZ6d3t0D?usp=sharing',
    },
    {
      id: 3,
      title: 'ინდივიდუალური საცხოვრებელი სახლის მიშენების პროექტი',
      description:
        `წინამდებარე პროექტი ითვალისწინებს გარდაბნის მუნიციპალიტეტში, სოფელ გამარჯვებაში ერთსართულიანი ინდივიდუალური
საცხოვრებელი სახლის მიშენაბას.`,
      category: 'არქიტექტურა',
      image:
        avakova,
      driveUrl: 'https://drive.google.com/drive/folders/12qSIIU3-ztIVNf2UuXbWiJc89OvVvrb2?usp=sharing',
    },
    {
      id: 4,
      title: 'ინდივიდუალური საცხოვრებელი სახლის მიშენების პროექტი',
      description:
        `პროექტი ითვალისწინებს ქ.რუსთავში XVIII-XIXმიკრო/რაიონის მიმდებარე ტერიტორიაზე(ნაკვეთი 170)
საკადასტრო კოდი 02.02.02.116 მოქალაქე გიული ირემაშვილის საკუთრებაში არსებულ მიწის ნაკვეთზე ინდივიდუალური საცხოვრებელი სახლის სამშენებლოდ მიწის ნაკვეთის პირობების დადგენის პროექტს`,
      category: 'არქიტექტურა',
      image:
        iremashvili,
      driveUrl: 'https://drive.google.com/drive/folders/1MXz-1g0FSEpbrGCSnsetidMjbDl2LKL7?usp=sharing',
    },
    {
      id: 5,
      title: 'სტომატოლოგიური კლინიკა „ედიდენტი“ (EDIDENT)',
      description:
        `პროექტის დასახელება: შენობა-ნაგებობის ფასადზე მცირე ზომის არქიტექტურული ელემენტების, კონსტრუქციების და ტექნიკური საშუალებების
მოწყობა ან დემონტაჟი
ობიექტის ფუნქცია: სტომატოლოგიური კლინიკა „ედიდენტი“ (EDIDENT)`,
      category: 'არქიტექტურა',
      image:
        akaganian,
      driveUrl: 'https://drive.google.com/drive/folders/1ReH_d48GLlYze6IHPcHrE8w45qe2xpQo?usp=sharing',
    },
    {id: 6,
      title: 'ევაკუაციის ნახაზი',
      description:
        `ქალაქ თბილისში, შპს პოსტრედისთვის შენობის ევაკუაციის ნახაზი`,
      category: 'არქიტექტურა',
      image:
        evakucation,
      driveUrl: 'https://drive.google.com/drive/folders/135bWqYsfiW0rZytI0gt11s686d2doFma?usp=sharing',
    }
  ],
}
