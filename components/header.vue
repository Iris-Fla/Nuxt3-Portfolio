<template>
  <Navbar class="kawaiiNav" expand="lg" margin="b-4">
    <Container type="fluid" class="kiwi">
      <NavbarBrand style="color:#92c4db;">すいれんの図書館<BIcon margin="s-1" icon="bi:book"/></NavbarBrand>
      <NavbarToggler />
      <NavbarCollapse>
        <NavbarNavList>
          <NavItem class="NavItem">
            <NavLink active aria-current="page"> About </NavLink>
          </NavItem>
          <NavItem class="NavItem">
            <NavLink>Blog</NavLink>
          </NavItem>
          <NavItem class="NavItem">
            <NavLink disabled aria-current="page"> 魔法 </NavLink>
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
.kiwi {
    font-family: "Kiwi Maru", sans-serif;
}
.NavItem {
  box-shadow: 0 0 10px #92c4db;
  border-radius: 20px;
  margin: 10px;
  padding: 5px;
  text-align: center;
}
</style>
