export default new class DataService {
  DEFAULT_TOKEN_EXAMPLE = "QWERaIOYUOAdfasdfG1asdfasdfasdf85asdfasdfasdf6AD1FG6ASD5F1G6asd156fgadfsgvadfsgasdf="
  async checkToken(token: string) {
    return await this.requestExample(this.response(true, { token: this.DEFAULT_TOKEN_EXAMPLE }));
  }

  async checkDocument(document: string) {
    var success = document === "94246101060";
    return await this.requestExample(this.response(success, null));
  }

  async signIn(document: string, password: string) {
    if (document === "94246101060" && password === "123") {
      const data = {
        user: { name: 'Usuário de teste' },
        token: this.DEFAULT_TOKEN_EXAMPLE
      };

      return await this.requestExample(this.response(true, data));
    }

    const data: any = { code: "001", message: "Usuário não encontrado, verifique CPF e senha." };
    return await this.requestExample(this.response(false, data));
  }

  async requestExample(data: object): Promise<any> {
    return await new Promise(resolve => {
      const interval = setInterval(() => {
        resolve(data);
        clearInterval(interval);
      }, 1000);
    });
  }

  response(success: boolean, data: object) {
    var response: any = { success: success };
    if (success) {
      response.data = data;
      return response;
    }

    response.errors = [data];
    return response;
  }
}