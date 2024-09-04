<template>
  <Navbar class="kawaiiNav" expand="sm">
    <Container type="fluid" class="shippori-antique-b1-regular">
      <NavbarBrand href="/" style="color:#33272a;">メルの図書館<BIcon margin="s-1" icon="bi:book"/></NavbarBrand>
      <NavbarToggler />
      <NavbarCollapse>
        <NavbarNavList>
          <NavItem class="NavItem">
            <NavLink href="/about">Profile</NavLink>
          </NavItem>
        </NavbarNavList>
      </NavbarCollapse>
    </Container>
  </Navbar>
</template>
<style>
.kawaiiNav {
  background-color: #ff000000;
}
</style>
