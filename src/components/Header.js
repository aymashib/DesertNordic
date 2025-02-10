import { Navbar, NavItem, Button } from 'shadcn';

function Header() {
  return (
    <Navbar>
      <NavItem>
        <h1>My App</h1>
      </NavItem>
      <Button>Login</Button>
    </Navbar>
  );
}

export default Header;