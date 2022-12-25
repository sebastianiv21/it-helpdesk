const NavMenuData = [
  {
    title: "Tickets",
    //icon: 'child-reaching',
    iName: "tickets",
    submenu: [
      ["Crear ticket", "/crear-ticket"],
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
    ],
  },
];

export default NavMenuData;
