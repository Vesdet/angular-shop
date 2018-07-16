export class ConfigOptionsService {
  constructor(
    public userRole: string
  ) {}

  getRole() {
    return this.userRole;
  }
}
