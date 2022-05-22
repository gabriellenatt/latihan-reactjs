import Logo from "./logo"
import Button from "../Button"
import NavBar from "../NavBar"
import './main.css'

export default function Header() {
  const clickRegister = () => window.alert('This is Register');
  const clickLogin = () => window.alert('This is login');

  return (
    <header className="header">
      {/* Logo */}
        <Logo />

      {/* NavBar */}
      <NavBar />

      {/* Button */}
      <Button test="Register" btnClick={clickRegister} />
      <Button test="Login" btnClick={clickLogin} />
    </header>
  )
}


