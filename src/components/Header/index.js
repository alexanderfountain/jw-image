import React from "react"

import { Container, Logo } from "../Search/styles.js"
import Search from "../Search"

const searchIndices = [
  { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

const Header = ({ site, transparent }) => (

    <Search id="header" collapse indices={searchIndices} />

)

export default Header
