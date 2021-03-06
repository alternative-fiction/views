import "./index.styl"
import favicon from "images/foundation/glyph-logo-small.png"

import "babel-polyfill"
import "lib/fullscreen-polyfill/register"

import React from "react"
import {render} from "react-dom"
import routes from "./routes"
import {browserHistory, Router} from "react-router"
import {persistTree} from "resources/tree"

document.head.appendChild(Object.assign(document.createElement("link"), {
  rel: "shortcut icon",
  sizes: "16x16",
  type: "image/x-icon",
  href: favicon
}))

window.addEventListener("beforeunload", persistTree)

document.addEventListener("DOMContentLoaded", () => {
  render(<Router history={browserHistory}>{routes}</Router>,
  document.querySelector("main"))
})
