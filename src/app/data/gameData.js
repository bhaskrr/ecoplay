import { Globe, HeartPulse, Leaf, Sun } from "lucide-react";

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
    },
    {
        "id": "healthcare",
        "title": "Healthcare Policy",
        "description": "Make choices that balance public health and economic growth.",
        "icon": HeartPulse,
        "questions": [
            {
                "id": 1,
                "text": "A new pandemic emerges. What is your first move?",
                "choices": [
                    {
                        "text": "Implement strict lockdown",
                        "effects": { "money": -20, "pollution": -5, "population": 10 },
                        "impactDescription": "Lives are saved, but economy slows significantly."
                    },
                    {
                        "text": "Minimal restrictions",
                        "effects": { "money": 5, "pollution": 0, "population": -8 },
                        "impactDescription": "Economy stays open but public health suffers."
                    }
                ]
            },
            {
                "id": 2,
                "text": "Healthcare budget allocation is being decided.",
                "choices": [
                    {
                        "text": "Increase funding for hospitals",
                        "effects": { "money": -10, "pollution": 0, "population": 8 },
                        "impactDescription": "Better care available, but higher taxes."
                    },
                    {
                        "text": "Cut healthcare spending",
                        "effects": { "money": 15, "pollution": 0, "population": -5 },
                        "impactDescription": "Short-term savings, long-term health issues."
                    }
                ]
            }
        ]
    },
    {
        "id": "environment",
        "title": "Environmental Policy",
        "description": "Protect the planet while managing economic needs.",
        "icon": Leaf,
        "questions": [
            {
                "id": 1,
                "text": "Massive deforestation is planned to make space for agriculture.",
                "choices": [
                    {
                        "text": "Allow deforestation for economic growth",
                        "effects": { "money": 20, "pollution": 25, "population": 0 },
                        "impactDescription": "Economy booms, but biodiversity suffers."
                    },
                    {
                        "text": "Ban deforestation",
                        "effects": { "money": -10, "pollution": -30, "population": 2 },
                        "impactDescription": "Forests are preserved, slowing economic gain."
                    }
                ]
            },
            {
                "id": 2,
                "text": "Implement a carbon tax on large industries.",
                "choices": [
                    {
                        "text": "Yes, tax them heavily",
                        "effects": { "money": 5, "pollution": -20, "population": 1 },
                        "impactDescription": "Pollution drops but some companies relocate."
                    },
                    {
                        "text": "No, keep industries untaxed",
                        "effects": { "money": 15, "pollution": 20, "population": 0 },
                        "impactDescription": "Economy grows faster but environment worsens."
                    }
                ]
            }
        ]
    }
];
