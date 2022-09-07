const NavMenuData = [
  {
    title: "Tickets",
    //icon: 'child-reaching',
    iName: "tickets",
    submenu: [
      ["Crear ticket", "/crear-ticket"],
      ["Crear ticket rápido", "/crear-ticket-rapido"],
      ["Listado de tickets", "/listado-tickets"],
    ],
  },
  {
    title: "Clientes",
    //icon: 'child-reaching',
    iName: "clientes",
    submenu: [
      ["Registrar cliente", "/registrar-cliente"],
      ["Listado de clientes", "/listado-clientes"],
    ],
  },
  {
    title: "Informes",
    // icon: 'child-reaching',
    iName: "informes",
    submenu: [
      ["Generar informe", "/generar-informe"],
      ["Listado de informes", "/listado-informes"],
    ],
  },
];

export default NavMenuData;
