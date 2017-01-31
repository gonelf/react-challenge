import { connect } from 'react-refetch'

export default connect.defaults({
  buildRequest: function (mapping) {
    const options = {
      method: mapping.method,
      cache: 'force-cache',
      headers: {},
      credentials: mapping.credentials,
      redirect: mapping.redirect,
      body: mapping.body
    }

    return new Request(mapping.url, options)
  }
})
