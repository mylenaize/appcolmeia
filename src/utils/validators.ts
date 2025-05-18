export function isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  export function isValidPassword(password: string): boolean {
    // Senha com pelo menos 6 caracteres
    return password.length >= 6;
  }
  