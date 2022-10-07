import PropTypes from "prop-types"
import Button from "./Button"

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" />
    </header>
  )
}

Header.defaultProps = {
  title: "Task Track With React",
}

Header.propTypes = {
  title: PropTypes.string,
}
//You can style stuff inline with variables
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// }

export default Header
