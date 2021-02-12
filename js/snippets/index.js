const navbar = () => (
  // TODO: Define Navbar here
  `
    <div class="text-center">
      Hello Navbar
    </div>
  `
)

const injectNavbar = (navbarId) => document.getElementById(navbarId).innerHTML = navbar()