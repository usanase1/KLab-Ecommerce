export interface RegistrationFormData {
  fullname: string;
  email: string;
  password: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface User {
  id: string;
  fullname: string;
  email: string;
  userRole?: string;
  // Add other user properties as needed
}
