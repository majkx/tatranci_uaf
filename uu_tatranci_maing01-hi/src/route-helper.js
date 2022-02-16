import { Uri } from "uu_appg01_core";


let RouteHelper = {
  returnRoute(route, params, baseURI) {
    console.log(baseURI)
    let targetUri = UU5.Common.Url.parse(window.location.href);
    let parsedUri = UU5.Common.Url.parse(window.location.href);
    console.log(window.location.href)

    let useCase = parsedUri.useCase;




    targetUri.setUseCase(route);
    targetUri.setParameters(params);
    return { targetUri, route };
  },

  setRoute(route, params, baseURI, newTab = null) {
    let returnRoute = this.returnRoute(route, params, baseURI);
    route = returnRoute.route;
    let targetUri = returnRoute.targetUri;

    if (newTab) {
      window.open(targetUri.toString(), "_blank");
    } else {
      if (context && context.isInHomeApp && !context.addedByLib) {
        //UU5.Environment.App.menuRef.update(route);
        UU5.Environment.setRoute(route, params);
      } else {
        window.open(targetUri.toString());
      }
    }
  },
};
export default RouteHelper;
