// when using mongodb, we would be creating a schema here instead
class Worker {
  id: string
  name: string
  email: string
  phoneNumber?: string
  // we could also possibly store the jobs the worker has applied for here
  // along with the job the worker has been hired for

  constructor(id: string, name: string, email: string, phoneNumber?: string) {
    this.id = id
    this.name = name
    this.email = email
    this.phoneNumber = phoneNumber
  }
}

export default Worker
