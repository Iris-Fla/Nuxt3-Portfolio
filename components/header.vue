<template>
  <Navbar class="kawaiiNav" expand="lg" margin="b-4">
    <Container type="fluid" class="kiwi">
      <NavbarBrand to="/" style="color:#33272a;">すいれんの図書館<BIcon margin="s-1" icon="bi:book"/></NavbarBrand>
      <NavbarToggler />
      <NavbarCollapse>
        <NavbarNavList>
          <NavItem class="NavItem">
            <NavLink to="/about">About</NavLink>
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
  background-color: #ffc6c7;
  box-shadow: 0 0 20px #a27777;
}
</style>
