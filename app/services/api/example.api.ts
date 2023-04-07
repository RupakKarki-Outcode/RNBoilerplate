import api from "./api"

class ExampleApi {
  async getTodos(id: number) {
    const todos = await api.get("/todos", { params: { id } })

    return todos.data
  }
}

const ExampleService = new ExampleApi()

export default ExampleService
