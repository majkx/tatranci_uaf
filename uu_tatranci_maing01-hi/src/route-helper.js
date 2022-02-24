import { Uri } from "uu_appg01_core";


let RouteHelper = {
   setRoute(route, params, baseURI, newTab = null){

     //UU5.Environment.setRoute(this.props.route);
     /*let baseUri = window.location.href;
     let targetUri = UU5.Common.Url.parse(baseUri);
     console.log(baseUri)
     console.log(targetUri)*/
     UU5.Environment.setRoute(route, params);
   },
};
export default RouteHelper;
