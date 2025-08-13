import { Cpu, Globe, HeartPulse, Home, Leaf, Sun, Train } from "lucide-react";

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
    },
    {
        "id": "transport",
        "title": "Transportation Policy",
        "description": "Decide how people and goods move around efficiently.",
        "icon": Train,
        "questions": [
            {
                "id": 1,
                "text": "Invest in high-speed rail between major cities?",
                "choices": [
                    {
                        "text": "Yes, build it",
                        "effects": { "money": -20, "pollution": -15, "population": 3 },
                        "impactDescription": "Cuts travel times, reduces pollution."
                    },
                    {
                        "text": "No, stick to roads",
                        "effects": { "money": 5, "pollution": 10, "population": 0 },
                        "impactDescription": "Cheaper now, but traffic worsens."
                    }
                ]
            },
            {
                "id": 2,
                "text": "Should public transport be free?",
                "choices": [
                    {
                        "text": "Yes, fully funded",
                        "effects": { "money": -10, "pollution": -5, "population": 2 },
                        "impactDescription": "Encourages use but costs the government."
                    },
                    {
                        "text": "No, charge fares",
                        "effects": { "money": 5, "pollution": 0, "population": 0 },
                        "impactDescription": "Revenue from fares but fewer people use it."
                    }
                ]
            }
        ]
    },
    {
        "id": "tech",
        "title": "Technology & Innovation",
        "description": "Encourage growth while addressing automation and ethics.",
        "icon": Cpu,
        "questions": [
            {
                "id": 1,
                "text": "Should AI be regulated to protect jobs?",
                "choices": [
                    {
                        "text": "Yes, limit AI adoption",
                        "effects": { "money": -5, "pollution": 0, "population": 3 },
                        "impactDescription": "Jobs are protected but innovation slows."
                    },
                    {
                        "text": "No, let AI grow freely",
                        "effects": { "money": 15, "pollution": 0, "population": -2 },
                        "impactDescription": "Economic growth speeds up but jobs are lost."
                    }
                ]
            },
            {
                "id": 2,
                "text": "Invest in a national quantum computing program?",
                "choices": [
                    {
                        "text": "Yes, invest heavily",
                        "effects": { "money": -20, "pollution": 0, "population": 2 },
                        "impactDescription": "Potential long-term breakthroughs but high upfront cost."
                    },
                    {
                        "text": "No, wait for private sector",
                        "effects": { "money": 0, "pollution": 0, "population": 0 },
                        "impactDescription": "No risk, but potential to lag behind competitors."
                    }
                ]
            }
        ]
    },
    {
        "id": "housing",
        "title": "Housing & Urban Planning",
        "description": "Balance affordability, development, and sustainability.",
        "icon": Home,
        "questions": [
            {
                "id": 1,
                "text": "Should rent control be introduced in major cities?",
                "choices": [
                    {
                        "text": "Yes, cap rent increases",
                        "effects": { "money": -5, "pollution": 0, "population": 4 },
                        "impactDescription": "Makes housing affordable but discourages new development."
                    },
                    {
                        "text": "No, let market decide",
                        "effects": { "money": 5, "pollution": 0, "population": -2 },
                        "impactDescription": "Encourages building but rents may rise sharply."
                    }
                ]
            },
            {
                "id": 2,
                "text": "Redevelop old industrial areas into housing?",
                "choices": [
                    {
                        "text": "Yes, convert them",
                        "effects": { "money": -10, "pollution": -5, "population": 3 },
                        "impactDescription": "Revitalizes neighborhoods and creates homes."
                    },
                    {
                        "text": "No, keep them industrial",
                        "effects": { "money": 5, "pollution": 2, "population": 0 },
                        "impactDescription": "Preserves jobs but misses housing opportunities."
                    }
                ]
            }
        ]
    }
];
