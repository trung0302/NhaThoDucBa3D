import React, { useEffect, useState } from "react";
import { loadModules } from "esri-loader";
import style from "./Model3D.module.css";
import HandleApiModel3D from "../../Apis/HandleApiModel3D";
import { Axios } from "axios";

function Model3D() {
  const [columnPaths, setColumnPaths] = useState([])
  const [wallPaths, setWallPaths] = useState([])
  const [roofPaths, setRoofPaths] = useState([])
  const [roofDecorPaths, setRoofDecorPaths] = useState([])
  const [wallDecorPaths, setWallDecorPaths] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false);
  const [columnGeojson, setColumnGeojson] = useState()


  useEffect(() => {
    // Load data from the API
    Promise.all([
      HandleApiModel3D.getListPrismPaths('/column/'),
      HandleApiModel3D.getListBodyCompPaths('/wall/'),
      HandleApiModel3D.getListPrismPaths('/roof/'),
      HandleApiModel3D.getListPrismPaths('/roofDecor/'),
      // HandleApiModel3D.getListPrismPaths('/wallDecor/'),
    ])
      .then(([column, wall, roof, roofDecor]) => {
        setColumnPaths(column);
        setWallPaths(wall);
        setRoofPaths(roof);
        setRoofDecorPaths(roofDecor);
        // setWallDecorPaths(wallDecor);
          setDataLoaded(true)
        
      })
      .catch((error) => console.log(error));
  }, []); // Run once on component mount
  
  // useEffect(()=>{
  //     HandleApiModel3D.getPrismGeojson("nhatho/data/behindBuilding/firstFloor/column/column1.geojson")
  //     .then( (response) => { 
  //         console.log(response)
  //         setColumnGeojson(response)
  //         setDataLoaded(true)
  //     })
  //     .catch(error => console.log(error));
  // },[columnPaths])

  // useEffect(()=>{
  //     HandleApiModel3D.getListPrismPaths('/column/')
  //     .then( (response) => { 
  //         console.log(response)
  //         setColumnPaths(response)
      
  //     })
  //     .catch(error => console.log(error));

  //     HandleApiModel3D.getListBodyCompPaths('/wall/')
  //     .then((response)=>{
  //       setWallPaths(response)
  //     })
  //     .catch(error => console.log(error));
      
  //     HandleApiModel3D.getListPrismPaths('/roof/')
  //     .then((response)=>{
  //       setRoofPaths(response)
  //     })
  //     .catch(error => console.log(error));

  //     HandleApiModel3D.getListPrismPaths('/roofDecor/')
  //     .then((response)=>{
  //       setRoofDecorPaths(response)
  //     })
  //     .catch(error => console.log(error));

      // HandleApiModel3D.getListPrismPaths('/wallDecor/')
      // .then((response)=>{
      //   setWallDecorPaths(response)
      // })
      // .catch(error => console.log(error));
  // },[])

    useEffect(() => {
      // Load the required ArcGIS modules
      if(dataLoaded) {
      loadModules(
        [
          "esri/Map",
          "esri/views/SceneView",
          "esri/geometry/Point",
          "esri/Graphic",
          "esri/layers/GeoJSONLayer",
          "esri/layers/GraphicsLayer"
        ],
        { css: true }
      )
        .then(
          ([
            Map,
            SceneView,
            Point,
            Graphic,
            GeoJSONLayer,
            GraphicsLayer
          ]) => {
            // Create a new WebScene
            const map = new Map({
              basemap: "topo-vector",
              ground: "world-elevation",
            });
  
            // Set up the SceneView
            const view = new SceneView({
              container: "viewDiv",
              map: map,
              camera: {
                position: [106.69943043631153, 10.779482780075542, 200],
                heading: -45,
                titl: 0,
              },
            });
  
            columnPaths.forEach(path => {
                  let column = new GeoJSONLayer({
                      url: `https://localhost:7094/api/Prism/path?path=${path}`
                  });
  
                  column.renderer= {
                          type: "simple",
                          symbol: {
                              type: "polygon-3d",
                              symbolLayers: [
                                  {
                                      type: "extrude",
                                      material: {
                                          color: [250, 250, 210, 1]
                                      }
                                  }
                              ]
                          },
                          visualVariables: [
                              {
                                  type: "size",
                                  field: "height",
                              }
                          ]
                      }
                  
          
                  map.layers.add(column);
            });
  
            // roofPaths.forEach(path => {
            //     let roof = new GeoJSONLayer({
            //         url: `https://localhost:7094/api/Prism/path?path=${path}`
            //     });
  
            //     roof.renderer = {
            //         type: "simple",
            //         symbol: {
            //             type: "polygon-3d",
            //             symbolLayers: [
            //                 {
            //                     type: "extrude",
            //                     material: {
            //                         color: [205, 102, 29, 1]
            //                     }
            //                 }
            //             ]
            //           },
            //         visualVariables: [
            //             {
            //                 type: "size",
            //                 field: "height",
            //             }
            //         ]
            //     };
      
            //     map.layers.add(roof);
            // });
  
            // roofDecorPaths.forEach(path => {
            //     let roofDecor = new GeoJSONLayer({
            //         url: `https://localhost:7094/api/Prism/path?path=${path}`
            //     });
  
            //     roofDecor.renderer = {
            //         type: "simple",
            //         symbol: {
            //             type: "polygon-3d",
            //             symbolLayers: [
            //                 {
            //                     type: "extrude",
            //                     material: {
            //                         color: [230, 230, 250, 0.9]
            //                     }
            //                 }
            //             ]
            //           },
            //         visualVariables: [
            //             {
            //                 type: "size",
            //                 field: "height",
            //             }
            //         ]
            //     };
    
            //     map.layers.add(roofDecor);
            // });
  
            // wallDecorPaths.forEach(path => {
            //     let wallDecor = new GeoJSONLayer({
            //         url: `https://localhost:7094/api/Prism/path?path=${path}`
            //     });
  
            //     wallDecor.renderer = {
            //         type: "simple",
            //         symbol: {
            //             type: "polygon-3d",
            //             symbolLayers: [
            //                 {
            //                     type: "extrude",
            //                     material: {
            //                         color: [230, 230, 250, 1]
            //                     }
            //                 }
            //             ]
            //           },
            //         visualVariables: [
            //             {
            //                 type: "size",
            //                 field: "height",
            //             }
            //         ]
            //     };
  
            //     map.layers.add(wallDecor);
            // });
  
            // wallPaths.forEach(path => {
            //     let wall = new GeoJSONLayer({
            //         url: `https://localhost:7094/api/bodyComp/path?path=${path}`
            //     });
  
            //     wall.renderer = {
            //         type: "simple",
            //         symbol: {
            //             type: "simple-fill",  
            //             outline: {
            //                 color: [0, 0, 0, 0.8],   
            //                 width: 0,   
            //             },
            //             color: [255, 127, 0, 0.9]
            //         },
            //     };
  
            //     map.layers.add(wall);
            // });
  
            view.popup.defaultPopupTemplateEnabled = true;
          }
        )
        .catch((err) => {
          console.error("Error loading ArcGIS modules:", err);
        });
  }

    }, [dataLoaded]); // Run once on component mount

  return (
    <div  className={style.container}>
        <div id="viewDiv" style={{height: '100vh'}}>
              
        </div>
    </div>
  );
}

export default Model3D;
