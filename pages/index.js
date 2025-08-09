import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-white mb-8 drop-shadow-2xl"
          >
            hello zayne
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 bg-white/30 rounded-full mx-auto max-w-md"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-xl md:text-2xl text-white/80 mt-6 font-light"
          >
            Welcome to your space
          </motion.p>
        </motion.div>
        
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-20 h-20 border-2 border-white/20 rounded-full"
        />
        
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 left-10 w-16 h-16 border-2 border-white/20 rounded-full"
        />
      </div>
    </Layout>
  );
}