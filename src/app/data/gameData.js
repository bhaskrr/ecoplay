import { Globe, Sun } from "lucide-react";

export const topics = [
    {
        id: "trade",
        title: "International Trade",
        description: "Learn about tariffs, imports, and exports through real-world scenarios.",
        icon: Globe, // lucide-react icon name
        questions: [
            {
                id: 1,
                text: "Your country is considering increasing tariffs on imported goods. What do you do?",
                choices: [
                    {
                        text: "Increase tariffs to protect local industry",
                        effects: { money: +10, pollution: +5, population: 0 },
                        impactDescription: "Local industry gains strength but imported goods become more expensive."
                    },
                    {
                        text: "Keep tariffs low to encourage trade",
                        effects: { money: -5, pollution: -2, population: +3 },
                        impactDescription: "Trade flows freely but some local industries struggle."
                    }
                ]
            },
            {
                id: 2,
                text: "A neighboring country offers a free trade agreement.",
                choices: [
                    {
                        text: "Accept",
                        effects: { money: +15, pollution: +3, population: +2 },
                        impactDescription: "Economy grows but with slight environmental cost."
                    },
                    {
                        text: "Decline",
                        effects: { money: -5, pollution: -1, population: -1 },
                        impactDescription: "Local industries stay safe but growth slows."
                    }
                ]
            }
        ]
    },
    {
        id: "energy",
        title: "Energy Policy",
        description: "Decide between renewable energy and fossil fuels.",
        icon: Sun, // lucide-react icon name
        questions: [
            {
                id: 1,
                text: "Should you invest heavily in solar farms?",
                choices: [
                    {
                        text: "Yes, go green!",
                        effects: { money: -15, pollution: -20, population: +4 },
                        impactDescription: "Clean energy reduces pollution and creates jobs."
                    },
                    {
                        text: "Stick with coal",
                        effects: { money: +10, pollution: +15, population: 0 },
                        impactDescription: "Cheap in short term, but pollution increases."
                    }
                ]
            }
        ]
    }
];
