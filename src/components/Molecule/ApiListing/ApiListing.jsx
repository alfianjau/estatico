import React from 'react'
import { Link } from 'gatsby'

class ApiListing extends React.Component {
  getApiList() {
    const apiList = []
    this.props.postEdges.forEach((postEdge) => {
      apiList.push({
        id: postEdge.node.id,
        userId: postEdge.node.userId,
        body: postEdge.node.body,
        title: postEdge.node.title,
      })
    })
    return apiList
  }

  render() {
    const apiList = this.getApiList()
    return (
      <div>
        {/* Your post list here. */
        apiList.map((post) => (
          <Link to={post.title} key={post.id}>
            <h1>{post.title}</h1>
          </Link>
        ))}
      </div>
    )
  }
}

export default ApiListing
