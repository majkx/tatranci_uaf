import { Uri } from "uu_appg01_core";


let RouteHelper = {
   setRoute(route, params, baseURI, newTab = null){
     let targetUri = UU5.Common.Url.parse(baseURI);
    UU5.Environment.setRoute(baseURI, params);
     console.log(targetUri)
   },
};
export default RouteHelper;
