import {create} from 'zustand';

interface User {
    username: string;
}

interface UserStore {
    user: User | null;
    setUser: (user: User) => User;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user) => {
        set({user});
        return user;
    },
}));