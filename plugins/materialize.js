// plugins/materialize.js
export default ({ app }) => {
    if (process.client) {
      document.addEventListener('DOMContentLoaded', function() {
        // Initialize Materialize components
        const sidenavElems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenavElems);
        
        const dropdownElems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(dropdownElems);
        
        const tabsElems = document.querySelectorAll('.tabs');
        M.Tabs.init(tabsElems);
        
        const carouselElems = document.querySelectorAll('.carousel');
        M.Carousel.init(carouselElems);
        
        const collapsibleElems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(collapsibleElems);
        
        const modalElems = document.querySelectorAll('.modal');
        M.Modal.init(modalElems);
        
        const scrollspyElems = document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(scrollspyElems);
      });
    }
  }