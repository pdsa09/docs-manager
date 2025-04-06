export const sidebarList = [
  {
    title: "Primeiros passos",
    subItem: [
      {
        text: "Abstractions",
        path: "homepage.md",
      },
      {
        text: "Início Rápido",
        path: "starting.md",
      },
    ],
  },
  {
    title: "Providers",
    subItem: [
      {
        text: "Sobre providers",
        path: "providers.md",
      },
      {
        text: "Providers Native",
        path: "providers-native.md",
      },
      {
        text: "Providers pelo Abstractions",
        path: "providers-native",
      },
    ],
  },
  {
    title: "Notificações",
    subItem: [
      {
        text: "Notificações",
        path: "notificacoes.md",
      },
      {
        text: "Exchange Websocket Channel Adapter",
        path: "notificacoes/exchangewebsocketchanneladapter.md",
      },
      {
        text: "Notification Health",
        path: "notificacoes/notificationhealth.md",
      },
    ],
  },
  {
    title: "API Adapters",
    subItem: [
      {
        text: "Adapters",
        path: "adapters.md",
      },
      {
        text: "Adapters Native",
        path: "adapters-native.md",
      },
    ],
  },
];

export const formatFileName = (filePath: string): string => {
  const baseName =
    filePath
      .split("/")
      .pop()
      ?.replace(/\.[^/.]+$/, "") || "";

  return baseName
    .replace(/[-_]/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .trim()
    .split(" ")
    .filter((word) => word.length > 0)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const HeaderItems = [
  {
    name: "Início",
    href: "/",
  },
  {
    name: "Modificações",
    href: "/admin",
    isLogged: true,
  },
];
