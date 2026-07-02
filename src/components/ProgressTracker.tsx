'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ProgressTrackerProps {
  completedLessons: number;
  totalLessons: number;
  masteredCharacters: number;
  totalCharacters: number;
  currentStreak: number;
  totalPoints: number;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  completedLessons,
  totalLessons,
  masteredCharacters,
  totalCharacters,
  currentStreak,
  totalPoints,
}) => {
  const lessonProgress = (completedLessons / totalLessons) * 100;
  const characterProgress = (masteredCharacters / totalCharacters) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">📊 Progres Belajar Anda</h2>
        <p className="text-gray-600">Pantau perkembangan pembelajaran Anda</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { icon: '📚', label: 'Poin', value: totalPoints },
          { icon: '🔥', label: 'Streak Hari', value: currentStreak },
          { icon: '✅', label: 'Pelajaran', value: completedLessons },
          { icon: '🎯', label: 'Karakter', value: masteredCharacters },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-red-200"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Progress Bars */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* Lessons Progress */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg p-6 shadow-lg"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">📖 Progres Pelajaran</h3>
          <div className="space-y-3">
            <div className="text-sm">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Pelajaran Selesai</span>
                <span className="font-bold text-gray-900">
                  {completedLessons} / {totalLessons}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full"
                  animate={{ width: `${lessonProgress}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-2">
              {Math.round(lessonProgress)}% Selesai
            </div>
          </div>
        </motion.div>

        {/* Characters Progress */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg p-6 shadow-lg"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">🎯 Karakter Dikuasai</h3>
          <div className="space-y-3">
            <div className="text-sm">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Karakter Dikuasai</span>
                <span className="font-bold text-gray-900">
                  {masteredCharacters} / {totalCharacters}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full"
                  animate={{ width: `${characterProgress}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-2">
              {Math.round(characterProgress)}% Dikuasai
            </div>
          </div>
        </motion.div>
      </div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">🏆 Pencapaian</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '🔥', label: 'Streak', value: currentStreak > 0 ? '✓' : '○' },
            { icon: '⭐', label: 'Star Learner', value: totalPoints > 1000 ? '✓' : '○' },
            { icon: '🎓', label: 'HSK Master', value: lessonProgress === 100 ? '✓' : '○' },
            { icon: '🚀', label: 'Beginner', value: '✓' },
          ].map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <div className="text-xs text-gray-600">{achievement.label}</div>
              <div className="text-lg font-bold text-gray-900">{achievement.value}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProgressTracker;
