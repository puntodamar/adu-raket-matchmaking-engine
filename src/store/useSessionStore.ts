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
    is_active: boolean;
    matchPlayed: number;
}

export interface Session {
    uuid: string;
    name: string;
    players: Player[];
}

interface SessionState {
    currentSession: Session | null;
    players: Player[];
    createSession: (data: { name: string }) => Session;
    addPlayer: (player: Omit<Player, 'id'>) => void;
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