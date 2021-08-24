import { http } from './httpService';

export function validateUser(login: string, password: string): Promise<string> {
    return http.post<{ token: string }>('/api/authorize/validate', { login, password })
    .then(response => response.data.token)
    .catch(_ => '');
}
