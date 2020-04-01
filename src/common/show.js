const Show = ({ show, children }) => {
  if (!show) {
    return null
  }

  return children
}

export default Show

