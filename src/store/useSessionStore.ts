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
    level: SkillLevel;
    is_active: boolean;
}

export interface Session {
    uuid: string;
    name: string;
    players: Player[];
}

interface SessionState {
    currentSession: Session | null;
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