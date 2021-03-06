// Fullscreen toggle button.

import React from "react"
import fullscreenHelper from "lib/fullscreen"

export default React.createClass({
  componentDidMount() {
    // Avoid tracking fullscreen state inside component.
    // The user may decline or exit fullscreen and be unsynchronized with our state.
    document.addEventListener("fullscreenchange", this.fullscreenChangeListener)
  },

  componentWillUnmount() {
    document.removeEventListener("fullscreenchange", this.fullscreenChangeListener)
  },

  fullscreenChangeListener() {
    this.forceUpdate()
  },

  render() {
    let icon = "fullscreen"
    let label = "Fullscreen"

    if (fullscreenHelper.fullscreen) {
      icon = "remove"
      label = "Close"
    }

    return <span className="view-control" data-component="toggle-fullscreen" onClick={this.toggleFullscreen}>
      <span className={`glyphicon glyphicon-${icon} toggle-icon`} title={label} />
    </span>
  },

  toggleFullscreen() {
    fullscreenHelper.fullscreen = !fullscreenHelper.fullscreen
  }
})
