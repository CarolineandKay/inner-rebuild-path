
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { motion } from "framer-motion";

const journeyAreas = [
  { title: "Self-Worth & Reset", color: "bg-pink-200" },
  { title: "Boundaries & Safety", color: "bg-purple-200" },
  { title: "Purpose & Alignment", color: "bg-yellow-100" },
];

const levelMilestones = [
  "Choose a path",
  "Download your toolkit",
  "Book your guide",
  "Level Up!"
];

export default function HerosJourneySite() {
  const [selectedArea, setSelectedArea] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleNextStep = () => {
    if (progress < levelMilestones.length - 1) {
      setProgress(progress + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">The Inner Rebuild Path</h1>
        <p className="text-lg text-gray-600">
          Choose your path and start transforming your life—one level at a time.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {journeyAreas.map((area) => (
          <motion.div
            key={area.title}
            whileHover={{ scale: 1.05 }}
            className={`${area.color} p-6 rounded-2xl shadow-xl cursor-pointer transition`}
            onClick={() => {
              setSelectedArea(area);
              setProgress(0);
            }}
          >
            <h2 className="text-2xl font-semibold">{area.title}</h2>
            <p className="mt-2 text-sm text-gray-700">
              Begin your journey with curated content, XP rewards & personal guidance.
            </p>
          </motion.div>
        ))}
      </div>

      {selectedArea && (
        <motion.div
          className="mt-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="rounded-2xl shadow-2xl p-6">
            <CardContent>
              <h3 className="text-xl font-bold mb-4">
                {selectedArea.title} Path - Level {progress + 1}
              </h3>
              <p className="text-gray-700 mb-2">
                Milestone: <strong>{levelMilestones[progress]}</strong>
              </p>
              <ul className="list-disc ml-5 mb-4 text-gray-700">
                <li>XP Points: {progress * 25}/100</li>
                <li>Unlock bonuses as you level up</li>
              </ul>
              <div className="flex flex-wrap gap-4">
                {progress === 0 && <Button onClick={handleNextStep}>Download Toolkit</Button>}
                {progress === 1 && <Button onClick={handleNextStep}>Book Coaching</Button>}
                {progress === 2 && <Button onClick={handleNextStep}>Claim Reward</Button>}
                {progress === 3 && (
                  <Button variant="outline" onClick={() => setSelectedArea(null)}>
                    Start Another Path
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
