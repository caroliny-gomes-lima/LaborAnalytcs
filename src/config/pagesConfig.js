import Texts from "./texts";
import {
  AccountCash,
  AccountGroup,
  ArrowLeftRightBold,
  BriefCase,
  ChartArea,
  ChartBubble,
  DatabaseSearch,
  FileDocument,
  HammerWrench,
  MapIcon,
  AccessHandKey,
  KeyAccess,
} from "./icons";
import {
  Home,
  AccountBox,
  AssignmentInd,
  SwapHoriz,
  PeopleSharp,
} from "@material-ui/icons";
import { paths } from "../navigation/navigate";

const texts = Texts["pt-BR"].pagesConfig;

const pagesConfig = {
  notLogged: [
    {
      path: paths.homePreLogin,
      name: "HomePreLogin",
    },
    {
      path: paths.login,
      name: "Login",
    },
    {
      path: paths.forgotPassword,
      name: "ForgotPassword",
    },
  ],
  //---------------------------------------AQUI-----------------------------
  logged: [
    {
      pages: [
        {
          navigationId: 0,
          path: paths.home,
          name: "Home",
        },
        {
          navigationId: 0,
          icon: AccessHandKey,
          path: paths.changePassword,
          title: texts.ChangePassword.title,
          name: "ChangePassword",
          showOnHeader: true,
        },
        {
          navigationId: 0,
          path: paths.userRegister,
          name: "UserRegister",
        },
        {
          navigationId: 0,
          path: paths.userList,
          name: "UserList",
        },
      ],
    },
    {
      groupTitle: texts.home.title,
      icon: Home,
      navigationId: 0,
      path: paths.home,
      title: texts.home.title,
      name: "Home",
      working: true,
    },
    {
      groupTitle: texts.dashboard.title,
      textTitles: "Produtividade",
      icon: ChartArea,
      pages: [
        {
          navigationId: 0,
          path: paths.productivity,
          icon: ChartArea,
          title: texts.dashboard.pages.productivity,
          titleButton: texts.dashboard.pages.productivityButton, //AQUI
          name: "Productivity",
          withFilter: true,
          working: true,
          showOnHeader: true,
        },
        {
          navigationId: 0,
          path: paths.capacity,
          icon: ArrowLeftRightBold,
          title: texts.dashboard.pages.capacity,
          titleButton: texts.dashboard.pages.capacityButton, //AQUI
          name: "Capacity",
          withFilter: true,
          working: true,
          showOnHeader: true,
        },
        {
          navigationId: 0,
          path: paths.costs,
          icon: AccountCash,
          title: texts.dashboard.pages.cost,
          name: "Costs",
          withFilter: true,
          showOnHeader: false,
          working: false,
          dontShow: true,
        },
        {
          navigationId: 0,
          path: paths.opportunity,
          icon: BriefCase,
          title: texts.dashboard.pages.opportunity,
          name: "Opportunity",
          withFilter: false,
          working: false,
          showOnHeader: false,
          dontShow: true,
        },
      ],
    },
    {
      groupTitle: texts.reports.title,
      textTitles: "Produtividade",
      icon: FileDocument,
      pages: [
        {
          icon: FileDocument,
          navigationId: 0,
          path: paths.report,
          title: texts.reports.report,
          titleButton: texts.reports.ReportsButton, //AQUI
          name: "Report",
          working: true,
          showOnHeader: true,
        },
      ],
    },

    {
      groupTitle: texts.teamMaintenance.title,
      textTitles: "Horas Extras" + "/" + "Operadores" + "/" + "Turnos",
      icon: PeopleSharp,
      dontShow: false,
      pages: [
        {
          navigationId: 0,
          path: paths.extraHours,
          title: texts.teamMaintenance.pages.extraHours,
          titleButton: texts.teamMaintenance.pages.extraHoursButton, //AQUI
          icon: ArrowLeftRightBold,
          name: "ExtraHours",
          dontShow: false,
          working: true,
          showOnHeader: true,
        },
        {
          navigationId: 0,
          path: paths.operators,
          title: texts.teamMaintenance.pages.operators,
          titleButton: texts.teamMaintenance.pages.operatorsButton, //AQUI
          icon: ArrowLeftRightBold,
          name: "Operators",
          dontShow: false,
          working: true,
          showOnHeader: true,
        },

        {
          navigationId: 0,
          path: paths.turns,
          title: texts.teamMaintenance.pages.turns,
          titleButton: texts.teamMaintenance.pages.turnsButton, //AQUI
          icon: SwapHoriz,
          name: "Turns",
          dontShow: false,
          working: true,
          showOnHeader: true,
        },
      ],
    },

    {
      groupTitle: texts.setup.title,
      textTitles: "Equação Planejada" + "/" + "Equação Realizada",
      icon: ArrowLeftRightBold,
      dontShow: false,
      pages: [
        {
          navigationId: 0,
          path: "TODO",
          title: texts.setup.pages.upload,
          name: "",
          dontShow: true,
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.setup.pages.dimensions,
          name: "",
          dontShow: true,
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.setup.pages.process,
          name: "",
          dontShow: true,
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.setup.pages.drivers,
          name: "",
          dontShow: true,
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.setup.pages.segment,
          name: "",
          dontShow: true,
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.setup.pages.skus,
          name: "",
          dontShow: true,
          working: false,
        },

        {
          navigationId: 0,
          path: "TODO",
          title: texts.setup.pages.schedules,
          name: "",
          dontShow: true,
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.setup.pages.layout,
          name: "",
          dontShow: true,
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.setup.pages.alocations,
          name: "",
          dontShow: true,
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.setup.pages.costs,
          name: "",
          dontShow: true,
          working: false,
        },
        {
          navigationId: 0,
          path: paths.setupEquation,
          icon: ArrowLeftRightBold,
          title: texts.setup.pages.equations,
          titleButton: texts.setup.pages.equationsButton, //AQUI
          name: "SetupEquation",
          withFilter: false,
          working: true,
          showOnHeader: true,
        },
        {
          navigationId: 0,
          path: paths.performedEquation,
          icon: ArrowLeftRightBold,
          title: texts.setup.pages.performedEquation,
          titleButton: texts.setup.pages.performedEquationButton, //AQUI
          name: "PerformedEquation",
          working: true,
          showOnHeader: true,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.setup.pages.integration,
          name: "",
          dontShow: true,
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.setup.pages.scenario,
          name: "",
          dontShow: true,
          working: false,
        },
      ],
    },
    {
      groupTitle: texts.cdMap.title,
      textTitles: "Visualizar mapa",
      icon: MapIcon,
      pages: [
        {
          navigationId: 0,
          path: paths.cdMap,
          icon: MapIcon,
          title: texts.cdMap.pagesTitle,
          titleButton: texts.cdMap.mapViewButton, //AQUI
          name: "CDMap",
          dontShow: false,
          working: true,
          showOnHeader: true,
        },
      ],
    },
    {
      groupTitle: texts.Users.title,
      textTitles: "Cadastrar Usuários" + "/" + "Relação de Usuários",
      icon: AccessHandKey,
      pages: [
        {
          navigationId: 0,
          path: paths.userRegister,
          icon: AssignmentInd,
          title: texts.Users.pages.userRegister,
          titleButton: texts.Users.pages.userRegister, //AQUI
          name: "UserRegister",
          dontShow: false,
          working: true,
          showOnHeader: true,
        },
        {
          navigationId: 0,
          path: paths.userList,
          icon: AccountBox,
          title: texts.Users.pages.UserList,
          titleButton: texts.Users.pages.UserList, //AQUI
          name: "UserList",
          working: true,
          showOnHeader: true,
        },
      ],
    },
    {
      groupTitle: texts.ChangePassword.title,
      textTitles: "Alterar Senha",
      icon: KeyAccess,
      pages: [
        {
          navigationId: 0,
          path: paths.changePassword,
          icon: KeyAccess,
          title: texts.ChangePassword.pages,
          titleButton: texts.ChangePassword.ChangePasswordButton, //AQUI
          name: "ChangePassword",
          working: true,
        },
      ],
    },
    //---------------------------ATÉ AQUI
    {
      groupTitle: texts.model.title,
      icon: HammerWrench,
      dontShow: true,
      pages: [
        {
          navigationId: 0,
          path: "TODO",
          title: texts.model.pages.upload,
          name: "",
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.model.pages.builder,
          name: "",
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.model.pages.process,
          name: "",
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.model.pages.subProcess,
          name: "",
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.model.pages.actives,
          name: "",
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.model.pages.standardTimes,
          name: "",
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.model.pages.processBlock,
          name: "",
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.model.pages.conditional,
          name: "",
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.model.pages.allocations,
          name: "",
          working: false,
        },
      ],
    },
    {
      groupTitle: texts.data.title,
      icon: ChartBubble,
      dontShow: true,
      pages: [
        {
          navigationId: 0,
          path: "TODO",
          title: texts.data.pages.upload,
          name: "",
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.data.pages.extract,
          name: "",
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.data.pages.transform,
          name: "",
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.data.pages.load,
          name: "",
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.data.pages.allocations,
          name: "",
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.data.pages.functions,
          name: "",
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.data.pages.conditional,
          name: "",
          working: false,
        },
        {
          navigationId: 0,
          path: "TODO",
          title: texts.data.pages.links,
          name: "",
          working: false,
        },
      ],
    },
    {
      groupTitle: texts.process.title,
      navigationId: 0,
      dontShow: true,
      icon: DatabaseSearch,
      path: "TODO",
      title: texts.process.title,
      name: "",
      working: false,
    },

    {
      dontShow: true,
      groupTitle: texts.coaching.title,
      icon: AccountGroup,
      navigationId: 0,
      path: "TODO",
      title: texts.coaching.title,
      name: "",
      working: false,
    },
  ],
};
export default pagesConfig;
