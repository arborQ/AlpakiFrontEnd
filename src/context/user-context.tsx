import { PropsWithChildren, useState } from 'react';
import { createContext, useContext } from 'react';

interface User {
    userId: number | null;
    userName: string | null;
}

export interface UserContext {
    userId: number | null;
    userName: string | null;
    setAuthorizeToken: (token: string) => void;
}

const userContext = createContext<UserContext>({ userId: null, userName: null, setAuthorizeToken: () => { } });

export const Provider = userContext.Provider;
export const Consumer = userContext.Consumer;

export function useUserContext() {
    const context = useContext(userContext);

    return context;
}

export function UserContextProvider({ children }: PropsWithChildren<{}>) {
    const storageToken = localStorage.getItem(resolveStorageKey());
    const userData = resoleToken(storageToken);
    const [user, updateUser] = useState<User>(userData);

    return (
        <Provider value={{
            ...user, setAuthorizeToken: token => {
                localStorage.setItem(resolveStorageKey(), token);
                const newUserData = resoleToken(token);
                updateUser(newUserData);
            }
        }}>
            {children}
        </Provider>
    );
}

function resolveStorageKey() {
    return 'AUTH_TOKEN';
}

function resoleToken(token: string | null): User {
    if (token === null) {
        return { userId: null, userName: null };
    }
    return ({
        userId: 1,
        userName: 'test'
    })
}