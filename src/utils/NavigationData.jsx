import {
  LifebuoyIcon,
  MagnifyingGlassCircleIcon,
  ReceiptPercentIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export const NavigationDataWeb = [
  {
    label: "Search",
    icon: <MagnifyingGlassCircleIcon />,
    href: "/foodsearch",
    isNew: false,
  },
  {
    label: "Offers",
    icon: <ReceiptPercentIcon />,
    href: "/offers",
    isNew: true,
  },
  {
    label: "Help",
    icon: <LifebuoyIcon />,
    href: "/help",
    isNew: false,
  },
  {
    label: "Sign In",
    icon: <UserIcon />,
    href: "/signin",
    isNew: false,
  },
  {
    label: "Cart",
    icon: <ShoppingBagIcon />,
    href: "/cart",
    isNew: false,
  },
];

export const NavigationDataMobile = [
  {
    label: "Swiggy",
    icon: "",
    href: "/",
    isNew: false,
  },
  {
    label: "Food",
    icon: "",
    href: "/foodsearch",
    isNew: true,
  },
  {
    label: "Instamart",
    icon: "",
    href: "/instamart",
    isNew: false,
  },
  {
    label: "Search",
    icon: "",
    href: "/foodsearch",
    isNew: false,
  },
  {
    label: "Account",
    icon: "",
    href: "/account",
    isNew: false,
  },
];
