export const selectUser = (user) => {
  console.log("you click on user: ", user.first)
  return {
    type: "USER_SELECTED",
    payload: user
  }
}