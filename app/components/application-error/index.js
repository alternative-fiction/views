import "./application-error.styl"

import React, {Component} from "react"
import title from "lib/title"

export default class ApplicationError extends Component {
  componentDidMount() {
    document.title = title(`${this.getStatusCode()} - Error`)
  }

  getMessage() {
    if (this.props.message) return this.props.message

    const message = {
      401: () => "The path you've requested is unauthorized.",
      404: () => `The path "${this.props.params.splat}" cannot be found.`,
      500: () => "An error occured while completing your request."
    }[this.getStatusCode()]

    return message()
  }

  getStatusCode() {
    return this.props.statusCode || this.props.route.props && this.props.route.props.statusCode || 500
  }

  render() {
    return <div data-code={this.props.code} data-column data-component="application-error">
      <h1>
        {this.getStatusCode()}
      </h1>

      <p>
        {this.getMessage()}
      </p>
    </div>
  }
}
