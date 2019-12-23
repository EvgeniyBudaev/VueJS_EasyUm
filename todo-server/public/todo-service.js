class TodoService {
  async getResource(url){
    const resp = await fetch(`http://localhost:3333${url}`);

    if(!resp.ok){
      throw new Error('Could not fetch data');
    }
    return await resp.json();
  }

  async getAllTodos(){
    return await this.getResource('/todos/all')
  }

  async getAllCategories(){

  }

}
