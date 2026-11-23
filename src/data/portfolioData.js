/**
 * Tüm kişisel bilgiler ve projeler burada.
 * Yeni proje / Drive linki eklemek için yalnızca bu objeyi güncelleyin.
 */
export const portfolioData = {
  personal: {
    name: 'Raul Bayramov',
    title: 'Mimar & Dijital Tasarımcı',
    bio: 'Mimari tasarım, 3D görselleştirme ve yazılım geliştirme alanlarında çalışan bir profesyonelim. Mekân, form ve teknolojiyi birleştirerek net, sürdürülebilir ve kullanıcı odaklı çözümler üretiyorum.',
    email: 'raul.bayramov@email.com',
    phone: '+90 555 000 00 00',
    location: 'İstanbul, Türkiye',
    cvUrl: '#', // CV dosyanızın linki (PDF)
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      behance: 'https://behance.net',
    },
  },

  skills: [
    'AutoCAD',
    'Revit',
    'SketchUp',
    '3ds Max',
    'V-Ray',
    'Photoshop',
    'Illustrator',
    'React',
    'JavaScript',
    'Python',
    'Figma',
  ],

  projects: [
    {
      id: 1,
      title: 'Konut Kompleksi Konsept Tasarımı',
      description:
        'Kentsel bir parselde sürdürülebilir konut yerleşimi için geliştirilmiş mimari konsept. Kat planları, cephe çalışmaları ve fotogerçekçi 3D renderlar içerir.',
      category: 'Mimari & 3D',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      driveUrl: 'https://drive.google.com/drive/folders/example-konut-kompleksi',
    },
    {
      id: 2,
      title: 'Portföy Yönetim Paneli',
      description:
        'Projelerin, dosya linklerinin ve müşteri notlarının tek yerden yönetildiği modern bir web uygulaması. React ve Tailwind ile geliştirildi.',
      category: 'Yazılım',
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
      driveUrl: 'https://drive.google.com/drive/folders/example-yonetim-paneli',
    },
    {
      id: 3,
      title: 'Marka Kimliği & Sunum Paketi',
      description:
        'Kurumsal bir stüdyo için logo varyasyonları, tipografi sistemi ve müşteri sunum şablonlarından oluşan kapsamlı bir görsel kimlik seti.',
      category: 'Diğer',
      image:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
      driveUrl: 'https://drive.google.com/drive/folders/example-marka-kimligi',
    },
  ],
}
