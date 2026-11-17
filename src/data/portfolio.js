export const profile = {
  name: "Sirajuddin Ahmad Kurniawan",
  displayName: "Sirajuddin",
  initials: "SA",
  role: "Web Developer, IT Support & Graphic Designer",
  location: "Bojong Gede, Bogor, Jawa Barat",
  email: "889yasuo@gmail.com",
  whatsapp: "+62 851-4118-2961",
  whatsappUrl: "https://wa.me/6285141182961",
  github: "https://github.com/SirajuddinAhmad",
  cv: "/cv/CV_Sirajuddin_Ahmad_Kurniawan.pdf",
  availability: "Terbuka untuk peluang baru",
};

export const navLinks = [
  { id: "about", label: "Tentang" },
  { id: "skills", label: "Keahlian" },
  { id: "projects", label: "Proyek" },
  { id: "journey", label: "Perjalanan" },
  { id: "contact", label: "Kontak" },
];

export const stats = [
  { value: "5", label: "Proyek nyata" },
  { value: "4", label: "Sertifikasi" },
  { value: "2", label: "Pengalaman magang" },
];

export const socials = [
  { id: "github", label: "GitHub", href: profile.github },
  { id: "email", label: "Email", href: `mailto:${profile.email}` },
  { id: "whatsapp", label: "WhatsApp", href: profile.whatsappUrl },
];

export const facts = [
  {
    icon: "education",
    label: "Pendidikan",
    value: "S1 Universitas Bina Sarana Informatika",
    detail: "Lulus tahun 2026",
  },
  {
    icon: "experience",
    label: "Pengalaman",
    value: "Web Developer Intern",
    detail: "PT Imersa Solusi Teknologi · 2025–2026",
  },
  {
    icon: "focus",
    label: "Fokus",
    value: "Web App & Digital Experience",
    detail: "Frontend, backend, UI/UX, dan IT support",
  },
  {
    icon: "location",
    label: "Domisili",
    value: "Bogor, Jawa Barat",
    detail: "Terbuka untuk remote dan on-site",
  },
];

export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Membangun antarmuka responsif yang cepat, rapi, dan mudah digunakan.",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Vite", "Bootstrap"],
  },
  {
    id: "backend",
    title: "Backend & Data",
    description: "Merancang alur data, basis data, dan API untuk kebutuhan aplikasi.",
    skills: ["PHP", "Laravel", "Node.js", "MySQL", "REST API"],
  },
  {
    id: "tools",
    title: "Tools & IT",
    description: "Alat kerja harian serta dukungan teknis untuk pengguna dan perangkat.",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Composer",
      "Generative AI",
      "Windows / Linux",
      "Troubleshooting",
    ],
  },
  {
    id: "design",
    title: "Design",
    description: "Merancang visual yang komunikatif, konsisten, dan berorientasi pengguna.",
    skills: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "UI/UX",
      "Graphic Design",
      "SEO",
    ],
  },
];

export const projects = [
  {
    id: "edms",
    title: "EDMS",
    subtitle: "Electronic Document Management System",
    category: "Web Application",
    featured: true,
    description:
      "Platform arsip digital terpadu untuk mengelola dokumen perusahaan — dari unggah dan klasifikasi, alur persetujuan, kontrol versi, hingga penegakan jadwal retensi dan audit trail.",
    highlights: [
      "Mengacu pada ISO 27001",
      "Approval workflow",
      "Jadwal Retensi Arsip",
      "Rekam jejak audit",
    ],
    tech: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    image: "/projects/edms.jpg",
    imageAlt: "Dashboard EDMS dengan ringkasan dokumen dan indikator kinerja",
    imagePosition: "left top",
    browserLabel: "internal · EDMS",
    repo: "https://github.com/SirajuddinAhmad/EDMS-System",
    demo: null,
  },
  {
    id: "presensi",
    title: "Presensi Pro",
    subtitle: "Sistem Absensi & Payroll",
    category: "Web Application",
    featured: false,
    description:
      "Aplikasi presensi dan penggajian dengan verifikasi wajah, geofencing GPS, dashboard real-time, cuti berjenjang, pengaturan shift, lembur, dan kalkulasi slip gaji otomatis.",
    tech: ["Laravel 11", "React.js", "MySQL", "REST API"],
    image: "/projects/presensi.jpg",
    imageAlt: "Dashboard Presensi Pro dengan kartu statistik kehadiran karyawan",
    imagePosition: "left top",
    browserLabel: "internal · presensi",
    repo: "https://github.com/SirajuddinAhmad/Absensi-Karyawan",
    demo: null,
  },
  {
    id: "pos",
    title: "POS System",
    subtitle: "Point of Sale & Manajemen Toko",
    category: "Web Application",
    featured: false,
    description:
      "Sistem kasir multi-gateway untuk retail, kafe, dan minimarket — lengkap dengan katalog produk, transaksi, laporan laba kotor, grafik penjualan, dan manajemen pengguna.",
    tech: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    image: "/projects/pos-system.jpg",
    imageAlt: "Dashboard POS System dengan grafik penjualan dan produk terlaris",
    imagePosition: "left top",
    browserLabel: "internal · POS",
    repo: "https://github.com/SirajuddinAhmad/POS-SYSTEM",
    demo: null,
  },
  {
    id: "rotcode",
    title: "RotCode",
    subtitle: "Marketplace Source Code",
    category: "Landing Page",
    featured: false,
    description:
      "Landing page marketplace source code dengan hierarki visual yang jelas, navigasi ringan, dan alur konversi yang terarah menuju katalog produk.",
    tech: ["React.js", "Vite", "CSS3", "SEO"],
    image: "/projects/rotcode.jpg",
    imageAlt: "Landing page RotCode dengan headline Solusi Source Code Web Aplikasi",
    imagePosition: "center top",
    browserLabel: "rotecommerce.vercel.app",
    repo: null,
    demo: "https://rotecommerce.vercel.app",
  },
  {
    id: "sirot",
    title: "Sirot Store",
    subtitle: "Landing Page Layanan Digital",
    category: "Landing Page",
    featured: false,
    description:
      "Landing page bernuansa dark neon untuk layanan desain, AI, dan VPS/RDP. Dibangun untuk menonjolkan produk sekaligus memandu pengunjung melakukan pemesanan.",
    tech: ["React.js", "Vite", "CSS3", "SEO"],
    image: "/projects/sirot-store.jpg",
    imageAlt: "Landing page Sirot Store bernuansa gelap dengan aksen hijau neon",
    imagePosition: "center top",
    browserLabel: "sirotstore.vercel.app",
    repo: null,
    demo: "https://sirotstore.vercel.app",
  },
];

export const experiences = [
  {
    role: "Web Developer Intern",
    company: "PT Imersa Solusi Teknologi",
    period: "2025 — 2026",
    description:
      "Membangun sistem manajemen arsip digital serta menelusuri kebutuhan dan kendala proses pengelolaan dokumen, terutama terkait efisiensi waktu dan akses bagi staf yang bekerja di luar kantor.",
    highlights: [
      "Mengembangkan fitur dan alur kerja sistem arsip digital.",
      "Menganalisis proses bisnis dan menerjemahkannya menjadi solusi web.",
    ],
  },
  {
    role: "IT Support Intern",
    company: "Institut Digital Bisnis",
    period: "2021",
    description:
      "Menangani kebutuhan teknis harian pengguna, mulai dari perbaikan perangkat hingga instalasi dan pembaruan sistem operasi.",
    highlights: [
      "Troubleshooting perangkat keras dan perangkat lunak.",
      "Instalasi Windows/Linux, perangkat lunak kantor, dan antivirus.",
      "Menyusun laporan pekerjaan secara berkala kepada atasan.",
    ],
  },
];

export const education = {
  degree: "S1",
  school: "Universitas Bina Sarana Informatika",
  period: "Lulus 2026",
  description:
    "Mengembangkan dasar pengembangan perangkat lunak, sistem informasi, dan desain melalui perkuliahan serta proyek nyata.",
};

export const certifications = [
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding",
    date: "26 Juni 2025",
    topic: "Programming",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "26 Juni 2025",
    topic: "Security",
  },
  {
    title: "Sertifikat Mahir Bahasa Inggris dari Dasar",
    issuer: "JobStreet",
    date: "10 Mei 2025",
    topic: "Language",
  },
  {
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "21 April 2025",
    topic: "Programming",
  },
];
