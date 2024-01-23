import swaggerJSDoc from "swagger-jsdoc"

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "MY API",
      version: "1.0.0",
      description: "API for managing workers and jobs",
    },
  },
  apis: ["./**/*.ts"], // Correct path to your route file
}

const specs: any = swaggerJSDoc(options)

export default specs
