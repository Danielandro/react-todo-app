export default function () {
  return Promise.resolve({
    json: () => {
      Promise.resolve({
        data: [
          {
            id: 1,
            title: 'first todo',
            completed: false
          },
          {
            id: 2,
            title: 'second todo',
            completed: false
          }
        ]
      })
    }
  })
}
