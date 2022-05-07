/**
 * Server calls of application client.
 */
import UU5 from "uu5g04";
import Plus4U5 from "uu_plus4u5g01";

let Calls = {
  /** URL containing app base, e.g. "https://uuapp.plus4u.net/vendor-app-subapp/awid/". */
  APP_BASE_URI: location.protocol + "//" + location.host + UU5.Environment.getAppBasePath(),

  async call(method, url, dtoIn, clientOptions) {
    let response = await Plus4U5.Common.Calls.call(method, url, dtoIn, clientOptions);
    return response.data;
  },
  createUser(dtoIn) {
    let commandUri = Calls.getCommandUri("user/create");
    return Calls.call("post", commandUri, dtoIn);
  },
  listUsers(dtoIn) {
    let commandUri = Calls.getCommandUri("user/list");
    return Calls.call("get", commandUri, dtoIn);
  },
  deleteUser(dtoIn) {
    let commandUri = Calls.getCommandUri("user/delete");
    return Calls.call("post", commandUri, dtoIn);
  },
  listAdmins(dtoIn) {
    let commandUri = Calls.getCommandUri("admin/list");
    return Calls.call("get", commandUri, dtoIn);
  },
  createAdmin(dtoIn) {
    let commandUri = Calls.getCommandUri("admin/create");
    return Calls.call("post", commandUri, dtoIn);
  },
  deleteAdmin(dtoIn) {
    let commandUri = Calls.getCommandUri("admin/delete");
    return Calls.call("post", commandUri, dtoIn);
  },
  createEditor(dtoIn) {
    let commandUri = Calls.getCommandUri("editor/create");
    return Calls.call("post", commandUri, dtoIn);
  },
  listEditors(dtoIn) {
    let commandUri = Calls.getCommandUri("editor/list");
    return Calls.call("get", commandUri, dtoIn);
  },
  deleteEditor(dtoIn) {
    let commandUri = Calls.getCommandUri("editor/delete");
    return Calls.call("post", commandUri, dtoIn);
  },
  createSeller(dtoIn) {
    let commandUri = Calls.getCommandUri("seller/create");
    return Calls.call("post", commandUri, dtoIn);
  },
  listSellers(dtoIn) {
    let commandUri = Calls.getCommandUri("seller/list");
    return Calls.call("get", commandUri, dtoIn);
  },
  deleteSeller(dtoIn) {
    let commandUri = Calls.getCommandUri("seller/delete");
    return Calls.call("post", commandUri, dtoIn);
  },
  listArticles(dtoIn) {
    let commandUri = Calls.getCommandUri("article/list");
    return Calls.call("get", commandUri, dtoIn);
  },
  createArticle(dtoIn) {
    let commandUri = Calls.getCommandUri("article/create");
    return Calls.call("post", commandUri, dtoIn);
  },
  deleteArticle(dtoIn) {
    let commandUri = Calls.getCommandUri("article/delete");
    return Calls.call("post", commandUri, dtoIn);
  },
  updateArticle(dtoIn) {
    let commandUri = Calls.getCommandUri("article/update");
    return Calls.call("post", commandUri, dtoIn);
  },
  createReport(dtoIn) {
    let commandUri = Calls.getCommandUri("report/create");
    return Calls.call("post", commandUri, dtoIn);
  },
  listReports(dtoIn) {
    let commandUri = Calls.getCommandUri("report/list");
    return Calls.call("get", commandUri, dtoIn);
  },
  deleteReport(dtoIn) {
    let commandUri = Calls.getCommandUri("report/delete");
    return Calls.call("post", commandUri, dtoIn);
  },
  updateReport(dtoIn) {
    let commandUri = Calls.getCommandUri("report/update");
    return Calls.call("post", commandUri, dtoIn);
  },
  createSchoolMagazine(dtoIn) {
    let commandUri = Calls.getCommandUri("schoolMagazine/create");
    return Calls.call("post", commandUri, dtoIn);
  },
  listSchoolMagazines(dtoIn) {
    let commandUri = Calls.getCommandUri("schoolMagazine/list");
    return Calls.call("get", commandUri, dtoIn);
  },
  deleteSchoolMagazine(dtoIn) {
    let commandUri = Calls.getCommandUri("schoolMagazine/delete");
    return Calls.call("post", commandUri, dtoIn);
  },
  updateSchoolMagazine(dtoIn) {
    let commandUri = Calls.getCommandUri("schoolMagazine/update");
    return Calls.call("post", commandUri, dtoIn);
  },
  createItem(dtoIn) {
    let commandUri = Calls.getCommandUri("item/create");
    return Calls.call("post", commandUri, dtoIn);
  },
  listItems(dtoIn) {
    let commandUri = Calls.getCommandUri("item/list");
    return Calls.call("get", commandUri, dtoIn);
  },
  deleteItem(dtoIn) {
    let commandUri = Calls.getCommandUri("item/delete");
    return Calls.call("post", commandUri, dtoIn);
  },
  updateItem(dtoIn) {
    let commandUri = Calls.getCommandUri("item/update");
    return Calls.call("post", commandUri, dtoIn);
  },
  createReservation(dtoIn) {
    let commandUri = Calls.getCommandUri("reservation/create");
    return Calls.call("post", commandUri, dtoIn);
  },
  listReservationsInitial(dtoIn) {
    let commandUri = Calls.getCommandUri("reservation/listInitial");
    return Calls.call("get", commandUri, dtoIn);
  },
  getReservationsInitial(dtoIn) {
    let commandUri = Calls.getCommandUri("reservation/getInitial");
    return Calls.call("get", commandUri, dtoIn);
  },
  updateReservationUpdateShopCardOpen(dtoIn) {
    let commandUri = Calls.getCommandUri("reservation/updateShopCardOpen");
    return Calls.call("post", commandUri, dtoIn);
  },
  updateReservationUpdateShopCardClosed(dtoIn) {
    let commandUri = Calls.getCommandUri("reservation/updateShopCardClosed");
    return Calls.call("post", commandUri, dtoIn);
  },
  updateReservationUpdateShopCardCanceled(dtoIn) {
    let commandUri = Calls.getCommandUri("reservation/updateShopCardCanceled");
    return Calls.call("post", commandUri, dtoIn);
  },
  listReservationsOpen(dtoIn) {
    let commandUri = Calls.getCommandUri("reservation/listOpen");
    return Calls.call("get", commandUri, dtoIn);
  },
  listReservationsCanceled(dtoIn) {
    let commandUri = Calls.getCommandUri("reservation/listCanceled");
    return Calls.call("get", commandUri, dtoIn);
  },
  listReservationsClosed(dtoIn) {
    let commandUri = Calls.getCommandUri("reservation/listClosed");
    return Calls.call("get", commandUri, dtoIn);
  },

  loadDemoContent(dtoIn) {
    let commandUri = Calls.getCommandUri("loadDemoContent");
    return Calls.call("get", commandUri, dtoIn);
  },

  loadIdentityProfiles() {
    let commandUri = Calls.getCommandUri("sys/uuAppWorkspace/initUve");
    return Calls.call("get", commandUri, {});
  },

  initWorkspace(dtoInData) {
    let commandUri = Calls.getCommandUri("sys/uuAppWorkspace/init");
    return Calls.call("post", commandUri, dtoInData);
  },

  getWorkspace() {
    let commandUri = Calls.getCommandUri("sys/uuAppWorkspace/get");
    return Calls.call("get", commandUri, {});
  },

  async initAndGetWorkspace(dtoInData) {
    await Calls.initWorkspace(dtoInData);
    return await Calls.getWorkspace();
  },

  /*
  For calling command on specific server, in case of developing client site with already deployed
  server in uuCloud etc. You can specify url of this application (or part of url) in development
  configuration in *-client/env/development.json, for example:
   {
     ...
     "uu5Environment": {
       "gatewayUri": "https://uuapp.plus4u.net",
       "awid": "b9164294f78e4cd51590010882445ae5",
       "vendor": "uu",
       "app": "demoappg01",
       "subApp": "main"
     }
   }
   */
  getCommandUri(aUseCase) {
    // useCase <=> e.g. "getSomething" or "sys/getSomething"
    // add useCase to the application base URI
    let targetUriStr = Calls.APP_BASE_URI + aUseCase.replace(/^\/+/, "");

    // override tid / awid if it's present in environment (use also its gateway in such case)
    if (process.env.NODE_ENV !== "production") {
      let env = UU5.Environment;
      if (env.tid || env.awid || env.vendor || env.app) {
        let url = Plus4U5.Common.Url.parse(targetUriStr);
        if (env.tid || env.awid) {
          if (env.gatewayUri) {
            let match = env.gatewayUri.match(/^([^:]*):\/\/([^/]+?)(?::(\d+))?(\/|$)/);
            if (match) {
              url.protocol = match[1];
              url.hostName = match[2];
              url.port = match[3];
            }
          }
          if (env.tid) url.tid = env.tid;
          if (env.awid) url.awid = env.awid;
        }
        if (env.vendor || env.app) {
          if (env.vendor) url.vendor = env.vendor;
          if (env.app) url.app = env.app;
          if (env.subApp) url.subApp = env.subApp;
        }
        targetUriStr = url.toString();
      }
    }

    return targetUriStr;
  },
};

export default Calls;
