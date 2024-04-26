<template>
  <Navbar class="kawaiiNav" expand="lg" margin="b-4">
    <Container type="fluid" class="kiwi">
      <NavbarBrand to="/" style="color:#92c4db;">すいれんの図書館<BIcon margin="s-1" icon="bi:book"/></NavbarBrand>
      <NavbarToggler />
      <NavbarCollapse>
        <NavbarNavList>
          <NavItem class="NavItem">
            <NavLink to="/about"> About </NavLink>
          </NavItem>
          <NavItem class="NavItem">
            <NavLink>Blog</NavLink>
          </NavItem>
        </NavbarNavList>
      </NavbarCollapse>
    </Container>
  </Navbar>
</template>
<style>
.kawaiiNav {
  background-color: #ffffff00;
  box-shadow: 0 0 10px #7ec0d1;
}
.NavItem {
  box-shadow: 0 0 10px #92c4db;
  border-radius: 20px;
  margin: 10px;
  padding: 5px;
  text-align: center;
}
</style>
