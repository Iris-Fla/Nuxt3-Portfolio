<template>
  <Navbar class="kawaiiNav" expand="sm" margin="b-4">
    <Container type="fluid" class="kiwi">
      <NavbarBrand href="/" style="color:#33272a;">メルの図書館<BIcon margin="s-1" icon="bi:book"/></NavbarBrand>
      <NavbarToggler />
      <NavbarCollapse>
        <NavbarNavList>
          <NavItem class="NavItem">
            <NavLink href="/about">About</NavLink>
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
}
</style>
