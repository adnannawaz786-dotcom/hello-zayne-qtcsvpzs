import React from 'react';
import { Card, CardContent } from './components/ui/card';
import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-center mb-4">Welcome to your space</h1>
            <p className="text-center text-gray-600 mb-6">Hello Zayne!</p>
            <div className="text-sm text-gray-700 bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold mb-2">Monotheism Definition:</p>
              <p>Monotheism is the belief in the existence of only one god or deity. It is a religious concept that asserts there is only one supreme divine being who is the source and ruler of the universe.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}