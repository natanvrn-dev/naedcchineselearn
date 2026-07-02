'use client';

import { motion } from 'framer-motion';
import { StrokeGuide } from '@/components/StrokeGuide';
import { useState } from 'react';

export default function WritingSystemPage() {
  const [selectedCategory, setSelectedCategory] = useState<'radicals' | 'structure' | 'rules'>('radicals');

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">✍️ Sistem Penulisan Karakter China</h1>
          <p className="text-lg opacity-90">Panduan lengkap cara menulis dan memahami struktur karakter</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg p-8 shadow-lg mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">📖 Pengantar</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Sistem penulisan karakter China (汉字) adalah salah satu sistem penulisan tertua yang masih digunakan. 
            Memahami struktur dan stroke order adalah kunci untuk menguasai penulisan karakter dengan benar.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📊', title: 'Total Karakter', desc: '50,000+' },
              { icon: '📚', title: 'Karakter Umum', desc: '2,000-3,000' },
              { icon: '✍️', title: 'Stroke Range', desc: '1-30 per karakter' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center bg-green-50 p-4 rounded-lg">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="font-bold text-gray-900">{stat.title}</div>
                <div className="text-2xl text-green-600 font-bold">{stat.desc}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {[
            { id: 'radicals', label: '🔤 Radicals (部首)' },
            { id: 'structure', label: '🏗️ Struktur Karakter' },
            { id: 'rules', label: '✏️ Aturan Menulis' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedCategory === tab.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Tabs */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Radicals Section */}
          {selectedCategory === 'radicals' && (
            <section className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">🔤 Radicals (部首)</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Radicals adalah komponen dasar dari karakter China. Ada 214 radicals dalam sistem klasik, 
                  masing-masing memiliki makna dasar yang membantu kita memahami arti karakter.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Radicals Utama (30 paling penting)</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                  {[
                    { radical: '人', meaning: 'Person', stroke: 2 },
                    { radical: '木', meaning: 'Wood/Tree', stroke: 4 },
                    { radical: '水', meaning: 'Water', stroke: 4 },
                    { radical: '火', meaning: 'Fire', stroke: 4 },
                    { radical: '金', meaning: 'Metal/Gold', stroke: 8 },
                    { radical: '土', meaning: 'Earth/Soil', stroke: 3 },
                    { radical: '心', meaning: 'Heart', stroke: 4 },
                    { radical: '手', meaning: 'Hand', stroke: 4 },
                    { radical: '口', meaning: 'Mouth', stroke: 3 },
                    { radical: '目', meaning: 'Eye', stroke: 5 },
                    { radical: '女', meaning: 'Female', stroke: 3 },
                    { radical: '山', meaning: 'Mountain', stroke: 3 },
                    { radical: '刀', meaning: 'Knife', stroke: 2 },
                    { radical: '田', meaning: 'Field', stroke: 5 },
                    { radical: '米', meaning: 'Rice', stroke: 6 },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200 text-center"
                    >
                      <div className="text-4xl font-bold text-green-700 mb-2">{item.radical}</div>
                      <div className="text-sm font-semibold text-gray-900 mb-1">{item.meaning}</div>
                      <div className="text-xs text-gray-600">{item.stroke} strokes</div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                  <h4 className="font-bold text-blue-900 mb-2">💡 Menggunakan Radicals</h4>
                  <p className="text-blue-800 mb-3">
                    Radicals membantu dalam 3 cara:
                  </p>
                  <ul className="space-y-2 text-blue-800">
                    <li>✓ <strong>Kamus:</strong> Karakter disusun dalam kamus berdasarkan radicalnya</li>
                    <li>✓ <strong>Makna:</strong> Radical sering memberikan clue tentang makna karakter</li>
                    <li>✓ <strong>Mnemonik:</strong> Membantu mengingat karakter dengan cara visual</li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Structure Section */}
          {selectedCategory === 'structure' && (
            <section className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">🏗️ Struktur Karakter</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Karakter China dapat dianalisis berdasarkan bagian-bagian penyusunnya. Ada 3 tipe utama:
                </p>

                <div className="space-y-8">
                  {[
                    {
                      type: 'Pictographic (象形)',
                      desc: 'Karakter yang berasal dari gambar benda nyata',
                      examples: [
                        { char: '木', meaning: 'Wood (bentuk seperti pohon)' },
                        { char: '水', meaning: 'Water (garis untuk arus air)' },
                        { char: '火', meaning: 'Fire (bentuk seperti api)' },
                      ],
                    },
                    {
                      type: 'Ideographic (指事)',
                      desc: 'Karakter yang menunjukkan konsep atau ide',
                      examples: [
                        { char: '上', meaning: 'Top/Above' },
                        { char: '下', meaning: 'Bottom/Below' },
                        { char: '一', meaning: 'One (satu garis)' },
                      ],
                    },
                    {
                      type: 'Compound (会意)',
                      desc: 'Kombinasi 2 atau lebih karakter/komponen',
                      examples: [
                        { char: '好', meaning: 'Good (Woman 女 + Son 子)' },
                        { char: '林', meaning: 'Forest (Wood 木 x2)' },
                        { char: '明', meaning: 'Bright (Sun 日 + Moon 月)' },
                      ],
                    },
                  ].map((category, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{category.type}</h3>
                      <p className="text-gray-700 mb-4">{category.desc}</p>
                      <div className="grid md:grid-cols-3 gap-4">
                        {category.examples.map((ex, exIdx) => (
                          <div key={exIdx} className="bg-white p-4 rounded-lg text-center">
                            <div className="text-4xl font-bold text-green-700 mb-2">{ex.char}</div>
                            <div className="text-sm text-gray-600">{ex.meaning}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Rules Section */}
          {selectedCategory === 'rules' && (
            <section className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">✏️ Aturan Menulis Karakter</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Ada aturan ketat dalam menulis karakter China yang harus diikuti untuk penulisan yang benar.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      rule: '1. Top to Bottom (Atas ke Bawah)',
                      desc: 'Mulai menulis dari bagian atas karakter lalu ke bawah',
                      example: '水: tulis stroke horizontal di atas dulu',
                    },
                    {
                      rule: '2. Left to Right (Kiri ke Kanan)',
                      desc: 'Stroke horizontal ditulis dari kiri ke kanan',
                      example: '一: stroke tunggal ditulis dari kiri ke kanan',
                    },
                    {
                      rule: '3. Vertical before Horizontal',
                      desc: 'Stroke vertikal ditulis sebelum stroke horizontal jika bertemu di tengah',
                      example: '十: stroke vertikal di tengah ditulis dulu',
                    },
                    {
                      rule: '4. Diagonals Bottom-Left First',
                      desc: 'Stroke diagonal yang turun ke kiri ditulis sebelum yang turun ke kanan',
                      example: 'X: stroke ke bawah kiri ditulis dulu',
                    },
                    {
                      rule: '5. Inside before Outside',
                      desc: 'Komponen dalam ditulis sebelum komponen yang membungkus (jika ada)',
                      example: '回: stroke dalam ditulis terlebih dahulu',
                    },
                    {
                      rule: '6. Center Before Sides',
                      desc: 'Stroke di tengah ditulis sebelum stroke di samping',
                      example: '小: stroke tengah vertikal ditulis di awal',
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-600"
                    >
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{item.rule}</h4>
                      <p className="text-gray-700 mb-2">{item.desc}</p>
                      <div className="bg-white px-3 py-2 rounded text-sm text-gray-600">
                        <strong>Contoh:</strong> {item.example}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
                  <h4 className="font-bold text-purple-900 mb-3">🎯 Tips Praktik</h4>
                  <ul className="space-y-2 text-purple-800">
                    <li>✓ Gunakan grid paper untuk mempelajari proporsi karakter</li>
                    <li>✓ Tulis setiap karakter minimal 5-10 kali untuk hafal urutan stroke</li>
                    <li>✓ Ikuti video stroke order untuk melihat gerakan dinamis</li>
                    <li>✓ Praktik penulisan dengan brush untuk merasakan keindahan kaligrafi</li>
                    <li>✓ Buat flashcard dengan urutan stroke untuk review</li>
                  </ul>
                </div>
              </div>
            </section>
          )}
        </motion.div>

        {/* Stroke Guide Component Demo */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📝 Panduan Penulisan Interaktif</h2>
          <StrokeGuide
            character="好"
            strokes={['stroke1', 'stroke2', 'stroke3', 'stroke4', 'stroke5', 'stroke6']}
            pinyin="hǎo"
            meaning="Good"
          />
        </motion.section>
      </div>
    </main>
  );
}
