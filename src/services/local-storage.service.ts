class LocalStorageService {
  private readonly AUTH_TOKE_KEY = 'auth_token';

  set authToken(v: string) {
    localStorage.setItem(this.AUTH_TOKE_KEY, v);
  }

  get authToken(): string {
    return localStorage.getItem(this.AUTH_TOKE_KEY);
  }
}

export const localStorageService = new LocalStorageService();
