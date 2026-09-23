import {create} from 'zustand';

export type SkillLevel =
    | 'Pemula'
    | 'Pra-Menengah'
    | 'Menengah'
    | 'Menengah Atas'
    | 'Mahir';

export const SKILL_LEVELS: SkillLevel[] = [
    'Pemula',
    'Pra-Menengah',
    'Menengah',
    'Menengah Atas',
    'Mahir',
];

export interface Community {
    id: string;
    name: string;
}

export interface Player {
    community_id?: number | null;
    id: string;
    name: string;
    level: number;
    is_active?: boolean | true;
    matchPlayed: number;
}

export interface Session {
    uuid: string;
    name: string;
    players: Player[];
}

interface SessionState {
    currentSession: Session | null;
    history: Player[][][];
    players: Player[];
    createSession: (data: { name: string }) => Session;
    addPlayer: (player: Player) => void;
    removePlayer: (playerId: string) => void;
    clearSession: () => void;
}

const DEFAULT_SESSION_VALUES = {
    uuid: crypto.randomUUID(),
    name: "PBBS"
};


export const useSessionStore = create<SessionState>((set) => ({
    currentSession: null,
    players: [
        { id: "1", community_id: 1, name: "Budi", level: 1, matchPlayed: 2, is_active: true },
        { id: "2", community_id: 1, name: "Andi", level: 2, matchPlayed: 5, is_active: true },
        { id: "3", community_id: 1, name: "Citra", level: 3, matchPlayed: 3, is_active: true },
        { id: "4", community_id: 1, name: "Dewi", level: 4, matchPlayed: 4, is_active: true },
        { id: "5", community_id: 1, name: "Eko", level: 5, matchPlayed: 1, is_active: true },
        { id: "6", community_id: 1, name: "Fajar", level: 2, matchPlayed: 6, is_active: true },
        { id: "7", community_id: 1, name: "Gita", level: 3, matchPlayed: 2, is_active: true },
        { id: "8", community_id: 1, name: "Hadi", level: 1, matchPlayed: 7, is_active: true },
        { id: "9", community_id: 1, name: "Indah", level: 4, matchPlayed: 3, is_active: true },
        { id: "10", community_id: 1, name: "Joko", level: 5, matchPlayed: 5, is_active: true },
        { id: "11", community_id: 1, name: "Kiki", level: 3, matchPlayed: 4, is_active: true },
        { id: "12", community_id: 1, name: "Lina", level: 2, matchPlayed: 2, is_active: true },
        { id: "13", community_id: 1, name: "Mira", level: 1, matchPlayed: 6, is_active: true },
        { id: "14", community_id: 1, name: "Nina", level: 4, matchPlayed: 1, is_active: true },
        { id: "15", community_id: 1, name: "Oki", level: 5, matchPlayed: 3, is_active: true },
        { id: "16", community_id: 1, name: "Putu", level: 2, matchPlayed: 4, is_active: true },
        { id: "17", community_id: 1, name: "Rina", level: 3, matchPlayed: 5, is_active: true },
        { id: "18", community_id: 1, name: "Sari", level: 1, matchPlayed: 2, is_active: true },
        { id: "19", community_id: 1, name: "Tono", level: 4, matchPlayed: 6, is_active: true },
        { id: "20", community_id: 1, name: "Uli", level: 5, matchPlayed: 1, is_active: true },
        { id: "21", community_id: 1, name: "Vina", level: 2, matchPlayed: 3, is_active: true },
        { id: "22", community_id: 1, name: "Wawan", level: 3, matchPlayed: 4, is_active: true },
        { id: "23", community_id: 1, name: "Yani", level: 1, matchPlayed: 5, is_active: true },
        { id: "24", community_id: 1, name: "Zaki", level: 4, matchPlayed: 2, is_active: true }
    ],
    history : [
        [
            [{ id: "1", community_id: 1, name: "Budi", level: 1, matchPlayed: 2, is_active: true }, { id: "2", community_id: 1, name: "Andi", level: 2, matchPlayed: 5, is_active: true }],
            [{ id: "3", community_id: 1, name: "Citra", level: 3, matchPlayed: 3, is_active: true }, { id: "4", community_id: 1, name: "Dewi", level: 4, matchPlayed: 4, is_active: true }]
        ],
        [
            [{ id: "5", community_id: 1, name: "Eko", level: 2, matchPlayed: 6, is_active: true }, { id: "6", community_id: 1, name: "Fajar", level: 3, matchPlayed: 1, is_active: true }],
            [{ id: "7", community_id: 1, name: "Gita", level: 1, matchPlayed: 4, is_active: true }, { id: "8", community_id: 1, name: "Hadi", level: 5, matchPlayed: 7, is_active: true }]
        ],
        [
            [{ id: "9", community_id: 1, name: "Indra", level: 4, matchPlayed: 8, is_active: true }, { id: "10", community_id: 1, name: "Joko", level: 2, matchPlayed: 3, is_active: true }],
            [{ id: "11", community_id: 1, name: "Kiki", level: 3, matchPlayed: 5, is_active: true }, { id: "12", community_id: 1, name: "Luna", level: 1, matchPlayed: 2, is_active: true }]
        ],
        [
            [{ id: "13", community_id: 1, name: "Maya", level: 3, matchPlayed: 9, is_active: true }, { id: "14", community_id: 1, name: "Nanda", level: 2, matchPlayed: 4, is_active: true }],
            [{ id: "15", community_id: 1, name: "Oki", level: 5, matchPlayed: 1, is_active: true }, { id: "16", community_id: 1, name: "Putri", level: 4, matchPlayed: 6, is_active: true }]
        ],
        [
            [{ id: "17", community_id: 1, name: "Qori", level: 1, matchPlayed: 3, is_active: true }, { id: "18", community_id: 1, name: "Roni", level: 2, matchPlayed: 7, is_active: true }],
            [{ id: "19", community_id: 1, name: "Siti", level: 3, matchPlayed: 2, is_active: true }, { id: "20", community_id: 1, name: "Tomi", level: 4, matchPlayed: 5, is_active: true }]
        ],
        [
            [{ id: "21", community_id: 1, name: "Udin", level: 2, matchPlayed: 4, is_active: true }, { id: "22", community_id: 1, name: "Vina", level: 3, matchPlayed: 8, is_active: true }],
            [{ id: "23", community_id: 1, name: "Wawan", level: 1, matchPlayed: 6, is_active: true }, { id: "24", community_id: 1, name: "Yudi", level: 5, matchPlayed: 3, is_active: true }]
        ],
        [
            [{ id: "25", community_id: 1, name: "Zain", level: 4, matchPlayed: 10, is_active: true }, { id: "26", community_id: 1, name: "Arif", level: 3, matchPlayed: 2, is_active: true }],
            [{ id: "27", community_id: 1, name: "Bella", level: 2, matchPlayed: 5, is_active: true }, { id: "28", community_id: 1, name: "Candra", level: 1, matchPlayed: 4, is_active: true }]
        ],
        [
            [{ id: "29", community_id: 1, name: "Dina", level: 5, matchPlayed: 11, is_active: true }, { id: "30", community_id: 1, name: "Evan", level: 2, matchPlayed: 3, is_active: true }],
            [{ id: "31", community_id: 1, name: "Fitri", level: 3, matchPlayed: 7, is_active: true }, { id: "32", community_id: 1, name: "Gilang", level: 4, matchPlayed: 9, is_active: true }]
        ],
        [
            [{ id: "33", community_id: 1, name: "Hendra", level: 1, matchPlayed: 1, is_active: true }, { id: "34", community_id: 1, name: "Intan", level: 3, matchPlayed: 6, is_active: true }],
            [{ id: "35", community_id: 1, name: "Jefri", level: 4, matchPlayed: 4, is_active: true }, { id: "36", community_id: 1, name: "Karni", level: 2, matchPlayed: 8, is_active: true }]
        ],
        [
            [{ id: "37", community_id: 1, name: "Lestari", level: 2, matchPlayed: 5, is_active: true }, { id: "38", community_id: 1, name: "Mukti", level: 5, matchPlayed: 12, is_active: true }],
            [{ id: "39", community_id: 1, name: "Nina", level: 3, matchPlayed: 3, is_active: true }, { id: "40", community_id: 1, name: "Omar", level: 1, matchPlayed: 2, is_active: true }]
        ],
        [
            [{ id: "41", community_id: 1, name: "Prabu", level: 3, matchPlayed: 4, is_active: true }, { id: "42", community_id: 1, name: "Qila", level: 2, matchPlayed: 6, is_active: true }],
            [{ id: "43", community_id: 1, name: "Rian", level: 1, matchPlayed: 3, is_active: true }, { id: "44", community_id: 1, name: "Siska", level: 4, matchPlayed: 7, is_active: true }]
        ],
        [
            [{ id: "45", community_id: 1, name: "Tono", level: 2, matchPlayed: 5, is_active: true }, { id: "46", community_id: 1, name: "Utami", level: 5, matchPlayed: 9, is_active: true }],
            [{ id: "47", community_id: 1, name: "Vino", level: 3, matchPlayed: 2, is_active: true }, { id: "48", community_id: 1, name: "Wati", level: 1, matchPlayed: 4, is_active: true }]
        ],
        [
            [{ id: "49", community_id: 1, name: "Yoga", level: 4, matchPlayed: 8, is_active: true }, { id: "50", community_id: 1, name: "Zaskia", level: 3, matchPlayed: 1, is_active: true }],
            [{ id: "51", community_id: 1, name: "Adit", level: 2, matchPlayed: 6, is_active: true }, { id: "52", community_id: 1, name: "Bayu", level: 1, matchPlayed: 3, is_active: true }]
        ],
        [
            [{ id: "53", community_id: 1, name: "Cahyo", level: 5, matchPlayed: 10, is_active: true }, { id: "54", community_id: 1, name: "Diah", level: 2, matchPlayed: 4, is_active: true }],
            [{ id: "55", community_id: 1, name: "Fandi", level: 3, matchPlayed: 7, is_active: true }, { id: "56", community_id: 1, name: "Giska", level: 4, matchPlayed: 5, is_active: true }]
        ],
        [
            [{ id: "57", community_id: 1, name: "Herman", level: 1, matchPlayed: 2, is_active: true }, { id: "58", community_id: 1, name: "Iis", level: 3, matchPlayed: 6, is_active: true }],
            [{ id: "59", community_id: 1, name: "Jati", level: 2, matchPlayed: 3, is_active: true }, { id: "60", community_id: 1, name: "Kirana", level: 4, matchPlayed: 8, is_active: true }]
        ],
        [
            [{ id: "61", community_id: 1, name: "Lukman", level: 3, matchPlayed: 5, is_active: true }, { id: "62", community_id: 1, name: "Melati", level: 2, matchPlayed: 1, is_active: true }],
            [{ id: "63", community_id: 1, name: "Nugroho", level: 5, matchPlayed: 11, is_active: true }, { id: "64", community_id: 1, name: "Okta", level: 1, matchPlayed: 4, is_active: true }]
        ],
        [
            [{ id: "65", community_id: 1, name: "Pram", level: 4, matchPlayed: 7, is_active: true }, { id: "66", community_id: 1, name: "Ratna", level: 3, matchPlayed: 3, is_active: true }],
            [{ id: "67", community_id: 1, name: "Surya", level: 2, matchPlayed: 6, is_active: true }, { id: "68", community_id: 1, name: "Tari", level: 1, matchPlayed: 2, is_active: true }]
        ],
        [
            [{ id: "69", community_id: 1, name: "Usman", level: 5, matchPlayed: 9, is_active: true }, { id: "70", community_id: 1, name: "Viona", level: 2, matchPlayed: 4, is_active: true }],
            [{ id: "71", community_id: 1, name: "Wahyu", level: 3, matchPlayed: 8, is_active: true }, { id: "72", community_id: 1, name: "Yanti", level: 4, matchPlayed: 5, is_active: true }]
        ],
        [
            [{ id: "73", community_id: 1, name: "Zaki", level: 1, matchPlayed: 3, is_active: true }, { id: "74", community_id: 1, name: "Agus", level: 3, matchPlayed: 7, is_active: true }],
            [{ id: "75", community_id: 1, name: "Bunga", level: 2, matchPlayed: 2, is_active: true }, { id: "76", community_id: 1, name: "Chandra", level: 4, matchPlayed: 6, is_active: true }]
        ],
        [
            [{ id: "77", community_id: 1, name: "Dimas", level: 5, matchPlayed: 12, is_active: true }, { id: "78", community_id: 1, name: "Elok", level: 1, matchPlayed: 1, is_active: true }],
            [{ id: "79", community_id: 1, name: "Farhan", level: 3, matchPlayed: 5, is_active: true }, { id: "80", community_id: 1, name: "Gita", level: 2, matchPlayed: 4, is_active: true }]
        ],
        [
            [{ id: "81", community_id: 1, name: "Haryo", level: 2, matchPlayed: 6, is_active: true }, { id: "82", community_id: 1, name: "Indri", level: 4, matchPlayed: 8, is_active: true }],
            [{ id: "83", community_id: 1, name: "Joko", level: 3, matchPlayed: 3, is_active: true }, { id: "84", community_id: 1, name: "Kartika", level: 1, matchPlayed: 2, is_active: true }]
        ],
        [
            [{ id: "85", community_id: 1, name: "Lana", level: 4, matchPlayed: 9, is_active: true }, { id: "86", community_id: 1, name: "Miko", level: 5, matchPlayed: 10, is_active: true }],
            [{ id: "87", community_id: 1, name: "Nadia", level: 2, matchPlayed: 5, is_active: true }, { id: "88", community_id: 1, name: "Pandu", level: 3, matchPlayed: 7, is_active: true }]
        ],
        [
            [{ id: "89", community_id: 1, name: "Qory", level: 1, matchPlayed: 4, is_active: true }, { id: "90", community_id: 1, name: "Rahmat", level: 3, matchPlayed: 2, is_active: true }],
            [{ id: "91", community_id: 1, name: "Salma", level: 2, matchPlayed: 6, is_active: true }, { id: "92", community_id: 1, name: "Tegar", level: 4, matchPlayed: 8, is_active: true }]
        ],
        [
            [{ id: "93", community_id: 1, name: "Uli", level: 5, matchPlayed: 11, is_active: true }, { id: "94", community_id: 1, name: "Viky", level: 1, matchPlayed: 3, is_active: true }],
            [{ id: "95", community_id: 1, name: "Winda", level: 3, matchPlayed: 5, is_active: true }, { id: "96", community_id: 1, name: "Yoga", level: 2, matchPlayed: 4, is_active: true }]
        ],
        [
            [{ id: "97", community_id: 1, name: "Zidan", level: 4, matchPlayed: 7, is_active: true }, { id: "98", community_id: 1, name: "Amel", level: 2, matchPlayed: 1, is_active: true }],
            [{ id: "99", community_id: 1, name: "Bagus", level: 3, matchPlayed: 9, is_active: true }, { id: "100", community_id: 1, name: "Cintya", level: 1, matchPlayed: 2, is_active: true }]
        ],
        [
            [{ id: "101", community_id: 1, name: "Dika", level: 3, matchPlayed: 4, is_active: true }, { id: "102", community_id: 1, name: "Ema", level: 5, matchPlayed: 10, is_active: true }],
            [{ id: "103", community_id: 1, name: "Feri", level: 2, matchPlayed: 6, is_active: true }, { id: "104", community_id: 1, name: "Gani", level: 4, matchPlayed: 8, is_active: true }]
        ],
        [
            [{ id: "105", community_id: 1, name: "Hani", level: 1, matchPlayed: 3, is_active: true }, { id: "106", community_id: 1, name: "Irfan", level: 3, matchPlayed: 5, is_active: true }],
            [{ id: "107", community_id: 1, name: "Jihan", level: 2, matchPlayed: 7, is_active: true }, { id: "108", community_id: 1, name: "Kevin", level: 4, matchPlayed: 2, is_active: true }]
        ],
        [
            [{ id: "109", community_id: 1, name: "Lilis", level: 5, matchPlayed: 12, is_active: true }, { id: "110", community_id: 1, name: "Maul", level: 1, matchPlayed: 1, is_active: true }],
            [{ id: "111", community_id: 1, name: "Novi", level: 3, matchPlayed: 4, is_active: true }, { id: "112", community_id: 1, name: "Oscar", level: 2, matchPlayed: 6, is_active: true }]
        ],
        [
            [{ id: "113", community_id: 1, name: "Putra", level: 4, matchPlayed: 9, is_active: true }, { id: "114", community_id: 1, name: "Ratu", level: 2, matchPlayed: 3, is_active: true }],
            [{ id: "115", community_id: 1, name: "Saiful", level: 3, matchPlayed: 5, is_active: true }, { id: "116", community_id: 1, name: "Tania", level: 1, matchPlayed: 2, is_active: true }]
        ],
        [
            [{ id: "117", community_id: 1, name: "Umar", level: 5, matchPlayed: 11, is_active: true }, { id: "118", community_id: 1, name: "Vera", level: 3, matchPlayed: 7, is_active: true }],
            [{ id: "119", community_id: 1, name: "Widi", level: 2, matchPlayed: 4, is_active: true }, { id: "120", community_id: 1, name: "Yosef", level: 4, matchPlayed: 8, is_active: true }]
        ]
    ],
    createSession: (data) => {
        const newSession: Session = {
            ...data,
            uuid: crypto.randomUUID(),
            players: [],
        };
        
        set({ currentSession: newSession });
        
        return newSession;
    },
    
    addPlayer: (playerData) =>
        set((state) => {
            if (!state.currentSession) return state;
            
            const newPlayer: Player = {
                ...playerData,
                id: crypto.randomUUID(),
            };
            
            return {
                currentSession: {
                    ...state.currentSession,
                    players: [...state.currentSession.players, newPlayer],
                },
            };
        }),
    
    removePlayer: (playerId) =>
        set((state) => {
            if (!state.currentSession) return state;
            
            return {
                currentSession: {
                    ...state.currentSession,
                    players: state.currentSession.players.filter((p) => p.id !== playerId),
                },
            };
        }),
    
    clearSession: () => set({ currentSession: null }),
}));