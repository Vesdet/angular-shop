interface ConfigOptionsInterface {
  id: number;
  login: string;
  email: string;
}

export class ConfigOptionsService {
  private configOptions: ConfigOptionsInterface = {
    id: null,
    login: null,
    email: null
  };

  constructor(
    public userRole: string
  ) {}

  get role() {
    return this.userRole;
  }

  getAdminData() {
    if (this.role === 'admin') {
      return 'You are ADMIN!';
    } else {
      return 'Permission denied!';
    }
  }

  set id(id) {
    this.configOptions.id = id;
  }
  get id() {
    return this.configOptions.id;
  }

  set login(login) {
    this.configOptions.login = login;
  }
  get login() {
    return this.configOptions.login;
  }

  set email(email) {
    this.configOptions.email = email;
  }
  get email() {
    return this.configOptions.email;
  }
}
