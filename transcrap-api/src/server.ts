import { app } from "./shared/app";

const PORT = process.env.PORT || 4000
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})