'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">🌏 Tentang NAED Chinese Learn</h1>
          <p className="text-lg opacity-90">Platform pembelajaran Bahasa Mandarin yang dirancang untuk semua orang</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Misi Kami</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            NAED Chinese Learn didirikan dengan visi untuk membuat pembelajaran Bahasa Mandarin 
            menjadi mudah, menyenangkan, dan dapat diakses oleh semua orang, 
            terutama bagi pemula yang belum pernah belajar Mandarin sebelumnya.
          </p>
        </motion.section>

        {/* Why Learn Chinese */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">🌟 Mengapa Belajar Bahasa Mandarin?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🌍', title: 'Berbicara dengan 1 Miliar+', desc: 'Mandarin adalah bahasa yang paling banyak digunakan di dunia' },
              { icon: '💼', title: 'Peluang Karir', desc: 'Membuka peluang pekerjaan di perusahaan China dan internasional' },
              { icon: '🧠', title: 'Melatih Otak', desc: 'Belajar Mandarin membantu meningkatkan kognitif dan memori' },
              { icon: '🎓', title: 'Pendidikan', desc: 'Akses ke literatur, filsafat, dan budaya China yang kaya' },
              { icon: '🤝', title: 'Koneksi Budaya', desc: 'Menghubungkan diri dengan jutaan orang dan budaya yang unik' },
              { icon: '📈', title: 'Investasi Masa Depan', desc: 'China adalah ekonomi terbesar kedua di dunia' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 bg-blue-50 rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">✨ Fitur Platform</h2>
          <ul className="space-y-4">
            {[
              'Materi pembelajaran lengkap dari HSK 1-9',
              'Video stroke-by-stroke untuk setiap karakter',
              'Audio pronunciation dari native speaker',
              'Flashcard interaktif dengan spaced repetition',
              'Mini games dan interactive quizzes',
              'Progress tracking dan personalized learning path',
              'Community features untuk belajar bersama',
              'Responsive design untuk semua perangkat',
            ].map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="flex gap-4 text-lg text-gray-700"
              >
                <span className="text-2xl">✅</span>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* History */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">📖 Sejarah Bahasa Mandarin</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Asal-usul:</strong> Bahasa Mandarin atau Hanyu (汉语) berasal dari bahasa Proto-Sino-Tibetan 
              yang digunakan oleh masyarakat kuno di lembah Sungai Kuning (Yellow River) sekitar 3000-4000 tahun yang lalu.
            </p>
            <p>
              <strong>Evolusi:</strong> Bahasa ini terus berkembang dan berevolusi, mempengaruhi dan dipengaruhi oleh 
              bahasa-bahasa lain. Era Qin dan Han menjadi titik balik dalam standarisasi bahasa Mandarin.
            </p>
            <p>
              <strong>Standardisasi Modern:</strong> Pada era modern, Mandarin distandarkan berdasarkan dialek Beijing. 
              Sistem Pinyin (拼音) yang menggunakan huruf Latin juga dikembangkan untuk merepresentasikan pronunsiasi.
            </p>
            <p>
              <strong>Karakter Tulisan:</strong> Mandarin ditulis menggunakan karakter Han (汉字). Setiap karakter merepresentasikan 
              satu suku kata dan konsep. Terdapat ribuan karakter, namun yang sering digunakan hanya sekitar 3000-5000 karakter.
            </p>
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Punya Pertanyaan?</h2>
          <p className="text-lg mb-6">Hubungi kami melalui email atau social media</p>
          <div className="flex justify-center gap-4">
            <a href="mailto:info@naedchinese.com" className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition">
              📧 Email
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
