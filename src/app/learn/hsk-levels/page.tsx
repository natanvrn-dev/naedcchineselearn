'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HSK_ALL_CONTENT, LEARNING_RECOMMENDATIONS } from '@/data/hsk-all-content';

export default function HSKLevelsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">📚 Semua Level HSK (1-9)</h1>
          <p className="text-lg opacity-90">Panduan lengkap untuk setiap tingkat pembelajaran</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg p-8 shadow-lg mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Apa itu HSK?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            HSK (Hanyu Shuiping Kaoshi) adalah standar sertifikasi internasional untuk kemampuan Bahasa Mandarin. 
            Sistem ini membagi pembelajaran menjadi 9 level, mulai dari pemula hingga mahir seperti native speaker. 
            Setiap level memiliki target karakter dan kosakata yang terukur.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
            <p className="text-gray-800">
              <strong>📊 Statistik:</strong> Untuk mencapai HSK 9, rata-rata Anda membutuhkan sekitar 2200-2500 jam pembelajaran intensif.
            </p>
          </div>
        </motion.div>

        {/* All Levels */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Tingkat-Tingkat HSK</h2>
        <div className="space-y-6 mb-16">
          {Object.entries(HSK_ALL_CONTENT).map(([key, content], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition"
            >
              <div className="grid md:grid-cols-5 gap-6 items-center">
                {/* Level Badge */}
                <div className="text-center md:text-left">
                  <div className="text-5xl font-bold text-gradient-to-r from-red-600 to-orange-600">
                    {content.level}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    {content.level <= 3 && '🟢 Beginner'}
                    {content.level > 3 && content.level <= 6 && '🟡 Intermediate'}
                    {content.level > 6 && '🔴 Advanced'}
                  </div>
                </div>

                {/* Content Info */}
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    HSK {content.level}
                  </h3>
                  <p className="text-gray-700 mb-3">{content.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {content.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 text-center md:col-span-1">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{content.characters}</div>
                    <div className="text-xs text-gray-600">Karakter</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{content.words}</div>
                    <div className="text-xs text-gray-600">Kosakata</div>
                  </div>
                </div>

                {/* Action */}
                <div className="text-center md:text-right">
                  <Link
                    href={`/learn/hsk${content.level}`}
                    className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition transform hover:scale-105"
                  >
                    Pelajari →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Path Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8 border-l-4 border-yellow-500"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🎯 Rekomendasi Learning Path</h2>
          <div className="space-y-6">
            {LEARNING_RECOMMENDATIONS.map((rec, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl font-bold text-red-600">HSK {rec.level}</div>
                  <div>
                    <div className="font-bold text-gray-900">{rec.duration}</div>
                    <div className="text-sm text-gray-600">{rec.hoursPerWeek} jam/minggu</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {rec.tips.map((tip, idx) => (
                    <div key={idx} className="flex gap-2 text-gray-700">
                      <span>✓</span>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-white rounded-lg p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">❓ Pertanyaan yang Sering Diajukan</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Berapa lama waktu yang diperlukan untuk menyelesaikan satu level?',
                a: 'Durasi tergantung pada intensitas belajar Anda. Rata-rata, untuk HSK 1 diperlukan 2-3 minggu dengan belajar 10 jam/minggu. Untuk level yang lebih tinggi, waktu belajar meningkat secara eksponensial.',
              },
              {
                q: 'Apakah saya harus menyelesaikan HSK 1 sebelum HSK 2?',
                a: 'Ya, sangat disarankan untuk menyelesaikan satu level sebelum pindah ke level berikutnya. Setiap level dibangun atas fondasi level sebelumnya.',
              },
              {
                q: 'Berapa banyak karakter yang perlu saya hafalkan?',
                a: 'Untuk HSK 1 hanya 150 karakter. Namun, untuk HSK 6 (level praktis) dibutuhkan sekitar 2500 karakter. Tidak perlu menghafal semua untuk berkomunikasi dengan lancar.',
              },
              {
                q: 'Apakah sertifikat HSK diakui secara internasional?',
                a: 'Ya, sertifikat HSK diakui oleh institusi pendidikan dan perusahaan di seluruh dunia sebagai bukti kemampuan Bahasa Mandarin.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="border-b pb-6 last:border-b-0">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
