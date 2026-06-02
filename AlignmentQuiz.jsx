import React, { useState } from 'react';

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is your primary systemic optimization target area right now?",
    options: [
      { text: "Reducing deep systemic inflammation safely", points: { paste: 3, capsule: 1 } },
      { text: "Accelerating post-activity muscular & joint recovery", points: { paste: 2, capsule: 2 } },
      { text: "Establishing a daily baseline cellular defense matrix", points: { paste: 1, capsule: 3 } }
    ]
  },
  {
    id: 2,
    question: "What does your typical daily mobility profiling look like?",
    options: [
      { text: "Static / Desk-Based (High environmental & mental stress)", points: { paste: 2, capsule: 2 } },
      { text: "Highly Active / Athletic (High physical friction & output)", points: { paste: 3, capsule: 1 } },
      { text: "Frequent Travel / On-The-Go schedule (Requires rapid portability)", points: { paste: 0, capsule: 4 } }
    ]
  },
  {
    id: 3,
    question: "Which texture and routine integration fits your lifestyle baseline?",
    options: [
      { text: "Whole-food root pastes blended into hot tea, coffee, or daily recipes", points: { paste: 4, capsule: 0 } },
      { text: "Rapid-dissolve, completely taste-free integration built for speed", points: { paste: 0, capsule: 4 } }
    ]
  },
  {
    id: 4,
    question: "How would you characterize your current digestive baseline status?",
    options: [
      { text: "Sensitive / Prone to digestive lag and slow absorption cycles", points: { paste: 4, capsule: 1 } },
      { text: "Efficient / Standard structural metabolic breakdown", points: { paste: 2, capsule: 3 } }
    ]
  },
  {
    id: 5,
    question: "What is your desired molecular delivery velocity parameters?",
    options: [
      { text: "Instant sublingual absorption via active viscous matrix layers", points: { paste: 4, capsule: 0 } },
      { text: "Sustained, continuous systemic release via protective capsule vectors", points: { paste: 0, capsule: 4 } }
    ]
  }
];

const AlignmentQuiz = ({ onRecommendationIdentified }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState({ paste: 0, capsule: 0 });
  const [quizComplete, setQuizComplete] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  const handleOptionSelect = (points) => {
    // Accumulate evaluation matrix values
    const nextScores = {
      paste: scores.paste + (points.paste || 0),
      capsule: scores.capsule + (points.capsule || 0)
    };
    setScores(nextScores);

    const nextStep = currentStep + 1;
    if (nextStep < QUIZ_QUESTIONS.length) {
      setCurrentStep(nextStep);
    } else {
      // Evaluate final matrix weights
      const finalRecommendation = nextScores.paste >= nextScores.capsule 
        ? {
            type: 'paste',
            name: 'Premium Turmeric+ Plus Paste',
            description: 'Your system requires instant cellular distribution. The pre-activated Bio-Lipid Matrix paste bypasses traditional digestive lag using active coconut lipids and raw date sugar vectors for multi-pathway anti-inflammatory relief.',
            sizes: ['8 oz — $27.99', '16 oz — $42.99']
          }
        : {
            type: 'capsule',
            name: 'Targeted Bio-Delivery Capsules',
            description: 'Your mobile routine requires floating distribution parameters optimized for speed. Identical molecular synergy markers encapsulated inside rapid-dissolve veggie jackets for continuous systemic protection anywhere.',
            sizes: ['60 Count — $42.99', '120 Count — $75.00']
          };
      
      setRecommendation(finalRecommendation);
      setQuizComplete(true);
      if (onRecommendationIdentified) {
        onRecommendationIdentified(finalRecommendation);
      }
    }
  };

  const resetQuizEngine = () => {
    setCurrentStep(0);
    setScores({ paste: 0, capsule: 0 });
    setQuizComplete(false);
    setRecommendation(null);
  };

  if (quizComplete && recommendation) {
    return (
      <div className="w-full max-w-xl mx-auto bg-neutral-900 border border-amber-900/40 p-8 rounded-2xl shadow-2xl text-white">
        <span className="text-xs font-bold tracking-widest text-amber-500 uppercase block mb-2">
          System Mapping Complete
        </span>
        <h3 className="text-2xl font-bold mb-4">Your Recommended Baseline: {recommendation.name}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
          {recommendation.description}
        </p>
        
        <div className="border-t border-neutral-800 pt-4 mb-6">
          <span className="text-xs font-medium text-neutral-500 block mb-2">Available System Formats:</span>
          <div className="flex gap-2">
            {recommendation.sizes.map((size) => (
              <span key={size} className="bg-neutral-800 border border-neutral-700 px-3 py-1.5 rounded-lg text-xs font-semibold">
                {size}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-xl transition duration-200 text-sm tracking-wide uppercase shadow-lg"
            onClick={() => alert(`Redirecting to ${recommendation.name} smooth checkout module...`)}
          >
            Deploy Recommendation to Cart
          </button>
          <button 
            className="px-4 py-3 border border-neutral-700 hover:bg-neutral-800 text-neutral-400 hover:text-white rounded-xl transition duration-200 text-xs tracking-wide uppercase"
            onClick={resetQuizEngine}
          >
            Recalibrate Matrix
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  return (
    <div className="w-full max-w-xl mx-auto bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-xl text-white">
      <div className="flex justify-between items-center mb-6">
        <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">
          Personalized Precision Profiling
        </span>
        <span className="text-xs font-mono text-neutral-500">
          Step {currentQuestion.id} of {QUIZ_QUESTIONS.length}
        </span>
      </div>

      {/* Structural Progress Bar */}
      <div className="w-full h-1 bg-neutral-800 rounded-full mb-8 overflow-hidden">
        <div 
          className="h-full bg-amber-500 transition-all duration-300" 
          style={{ width: `${((currentStep) / QUIZ_QUESTIONS.length) * 100}%` }}
        />
      </div>
