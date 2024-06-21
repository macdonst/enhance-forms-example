export async function get (req) {
  const { session = {} } = req
  const { one = '', two = '', three = '' } = session
  return {
    json: { one, two, three }
  }
}

export async function post(req) {
  const { body = {} } = req
  const { one = '', two = '', three = '' } = body

  console.log('got a form post')

  return {
    session: {
      one, two, three
    },
    location: '/'
  }
}
