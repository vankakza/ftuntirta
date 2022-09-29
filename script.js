(function(){
    var script = {
 "paddingTop": 0,
 "children": [
  "this.MainViewer"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "start": "this.init()",
 "height": "100%",
 "borderRadius": 0,
 "class": "Player",
 "horizontalAlign": "left",
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "definitions": [{
 "thumbnailUrl": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_t.jpg",
 "partial": false,
 "label": "20220916_215627_337",
 "id": "panorama_88277E22_8472_493E_41D2_EBE9939F983D",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8859E612_8472_D915_41D7_64DEFC78D019"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88601130_847E_3B15_417C_A450C133B27A",
   "backwardYaw": 76.71,
   "yaw": -91.22,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_A0A3474C_873F_7AFA_41DC_200858BAFBA3",
  "this.overlay_AE5AE105_873F_B66A_41A9_15154984587D"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_88246630_8476_D915_41DE_9DEAF045FE25_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_t.jpg",
 "partial": false,
 "label": "20220916_215541_717",
 "id": "panorama_885492F2_847D_D914_41CE_107B8AA1E942",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_886F6428_847E_5935_41D9_51E4544FE9E3",
   "backwardYaw": -132.99,
   "yaw": 22.46,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8869E06A_847D_F935_41BF_4A47A84840BB"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_9362B730_8708_BAAA_41D1_027A7FE61A87",
  "this.overlay_9332077E_870B_DA96_41D6_871816038D74"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_883D3A8C_8472_490D_41DD_CB4005C30366_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_t.jpg",
 "partial": false,
 "label": "20220914_155125_156",
 "id": "panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F",
   "backwardYaw": -85.28,
   "yaw": 71.03,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B",
   "backwardYaw": 174.47,
   "yaw": -100.09,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_960FF044_84B6_597D_41D3_D148E948CFEE",
  "this.overlay_960056AE_84B6_590D_41DE_BEF3BB18B487"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 132.64,
  "pitch": 0
 },
 "id": "camera_AA4A8105_871B_D66A_41B9_7951CD0A8B07",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_t.jpg",
 "partial": false,
 "label": "20220916_215938_537",
 "id": "panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_883D3A8C_8472_490D_41DD_CB4005C30366",
   "backwardYaw": 11.97,
   "yaw": -32.46,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8848E099_8472_F917_41C0_379F999A0FC6",
   "backwardYaw": -171.6,
   "yaw": 85.59,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_B6C13226_8476_393D_41D5_BA17F757A7C6",
  "this.overlay_AB0596CC_8472_590D_41DA_F2EAAB488A19"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -5.41,
  "pitch": 0
 },
 "id": "camera_AB4B9DA1_871B_C9AA_41DD_5277F7AE4D7E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8826A109_8472_38F7_41CB_B15027D3A22E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_t.jpg",
 "partial": false,
 "label": "20220916_220104_257",
 "id": "panorama_8848C141_8476_3B74_41D0_5893DB53C92E",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_883A6FCD_8476_470C_41C3_0510E10140C8",
   "backwardYaw": -16,
   "yaw": -147.24,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E",
   "backwardYaw": 0.68,
   "yaw": -47.36,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_9EA02535_870F_7EAA_41D8_03AA7423655C",
  "this.overlay_9EA7B68D_870F_DA7A_41D2_CC0F291AE23B"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 88.97,
  "pitch": 0
 },
 "id": "camera_A97B039C_871B_D99A_41D0_9D76F33C3A51",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 156.72,
  "pitch": 0
 },
 "id": "camera_A92B6489_871B_DE7A_41D2_6F70DF7D5E06",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_t.jpg",
 "partial": false,
 "label": "20220916_220237_102",
 "id": "panorama_883F4E16_8476_C91C_41C9_0628B527B1CC",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8832ED81_8476_4BF7_41D6_20E66B506D55"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88246630_8476_D915_41DE_9DEAF045FE25",
   "backwardYaw": 81.27,
   "yaw": -93.9,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_AC56D7F6_844E_471D_41DB_47CD417C4FE7",
  "this.overlay_AC59A9F7_844D_CB1C_41C9_5658D9EF32B5",
  "this.overlay_AC914ACF_8452_490B_41DA_CBDF1BFD85D6"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.54,
  "pitch": 0
 },
 "id": "camera_A9DA1580_871B_DE6A_41D9_9856B1F9507C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.89,
  "pitch": 0
 },
 "id": "camera_AA9E0336_871B_DA96_41CD_8784626CF632",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 116.63,
  "pitch": 0
 },
 "id": "camera_AB5D6D5D_871B_CE9A_41C7_9DFDAF98ACD9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -67.08,
  "pitch": 0
 },
 "id": "camera_A96C93BE_871B_D996_41CA_D4FD9B00FB70",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 90.12,
  "pitch": 0
 },
 "id": "camera_ACCA9C00_871B_CE6A_41C9_44C64266A7C8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_t.jpg",
 "partial": false,
 "label": "20220916_220621_002",
 "id": "panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20",
   "backwardYaw": 98.73,
   "yaw": -178.9,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88787FCE_8476_470D_41C0_8954C395F8B1",
   "backwardYaw": -90.76,
   "yaw": -1.46,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_9F443A4A_84D2_4975_41D7_354650EA88A7",
  "this.overlay_9F05526A_84DE_3935_41D5_DFC1A3124849"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 47.01,
  "pitch": 0
 },
 "id": "camera_AA3CB128_871B_D6BB_41CB_6B212558CE27",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -161.59,
  "pitch": 0
 },
 "id": "camera_AB08BE89_871B_CA7A_41C9_D94937C9AB72",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.74,
  "pitch": 0
 },
 "id": "camera_A9F5F4F0_871B_DFAA_41CC_947A63E7EC19",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.69,
  "pitch": 0
 },
 "id": "camera_ACEAFB99_871B_C99A_41DA_4A7686DD6193",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -30.27,
  "pitch": 0
 },
 "id": "camera_A9331446_871B_DEF6_41CA_848EA103D2B1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -70.32,
  "pitch": 0
 },
 "id": "camera_AB686D3A_871B_CE9E_41BA_FD45426DEB57",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 89.24,
  "pitch": 0
 },
 "id": "camera_AA6B209D_871B_D79A_41AF_2C8C0B89C3DB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_t.jpg",
 "partial": false,
 "label": "20220916_220041_067",
 "id": "panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_883E4720_8476_C735_41BC_51E952F97596",
   "backwardYaw": 14.78,
   "yaw": 103.15,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_AFBBB5C3_8453_DB7B_41BB_3B3839737FCA"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -88.25,
  "pitch": 0
 },
 "id": "camera_AB2B0E18_871B_CA9A_41C7_E49911495E9D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -81.27,
  "pitch": 0
 },
 "id": "camera_AA66B07C_871B_D69A_41DE_D29E8DA6696A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -76.91,
  "pitch": 0
 },
 "id": "camera_AB26ADEE_871B_C9B6_41C9_A8B211F282A8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -82.42,
  "pitch": 0
 },
 "id": "camera_AAA3D2F1_871B_DBAD_41CF_9B2B7E609056",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_t.jpg",
 "partial": false,
 "label": "20220916_215835_257",
 "id": "panorama_88447E27_8472_493C_41BE_0FC6BE043DF9",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F9C6C49_847E_C974_41DE_023912D4E768",
   "backwardYaw": 69.45,
   "yaw": 159.89,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_98803EE2_871B_4BAE_41A1_70278B74408F",
  "this.overlay_98A16B36_8719_4A96_41CF_B688726B27F4"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_884D6F37_847E_471B_41C7_81203FC86931_t.jpg",
 "partial": false,
 "hfovMax": 130,
 "label": "20220914_160336_800",
 "id": "panorama_884D6F37_847E_471B_41C7_81203FC86931",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_884D6F37_847E_471B_41C7_81203FC86931_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884D6F37_847E_471B_41C7_81203FC86931_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884D6F37_847E_471B_41C7_81203FC86931_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884D6F37_847E_471B_41C7_81203FC86931_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884D6F37_847E_471B_41C7_81203FC86931_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884D6F37_847E_471B_41C7_81203FC86931_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884D6F37_847E_471B_41C7_81203FC86931_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884D6F37_847E_471B_41C7_81203FC86931_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884D6F37_847E_471B_41C7_81203FC86931_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884D6F37_847E_471B_41C7_81203FC86931_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884D6F37_847E_471B_41C7_81203FC86931_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884D6F37_847E_471B_41C7_81203FC86931_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884D6F37_847E_471B_41C7_81203FC86931_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884D6F37_847E_471B_41C7_81203FC86931_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884D6F37_847E_471B_41C7_81203FC86931_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884D6F37_847E_471B_41C7_81203FC86931_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884D6F37_847E_471B_41C7_81203FC86931_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884D6F37_847E_471B_41C7_81203FC86931_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884D6F37_847E_471B_41C7_81203FC86931_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_t.jpg",
 "partial": false,
 "label": "20220916_220202_487",
 "id": "panorama_883A6FCD_8476_470C_41C3_0510E10140C8",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_883E4720_8476_C735_41BC_51E952F97596",
   "backwardYaw": 1.62,
   "yaw": 97.58,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8848C141_8476_3B74_41D0_5893DB53C92E",
   "backwardYaw": -147.24,
   "yaw": -16,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_AFB77CED_8456_490C_41D5_6DDB6D935CC5",
  "this.overlay_9E3ACD59_8709_4E9A_41D8_D702D3F99EA3"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_t.jpg",
 "partial": false,
 "label": "20220916_215552_029",
 "id": "panorama_88625FE3_847D_C734_41D9_1B617B660EDC",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8869E06A_847D_F935_41BF_4A47A84840BB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_885492F2_847D_D914_41CE_107B8AA1E942"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_911366F7_8707_FB96_41D6_342330FF5FC2",
  "this.overlay_901D567E_8718_FA96_41D5_A27386E8CE48",
  "this.overlay_90EBA537_871B_BE96_41C3_633A7066860C"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_885492F2_847D_D914_41CE_107B8AA1E942_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_t.jpg",
 "partial": false,
 "label": "20220916_220326_265",
 "id": "panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F",
   "backwardYaw": 109.68,
   "yaw": -14.15,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_884DC575_8476_7B1F_41DF_317D5659BBF5"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_8BC5CD0E_8456_CB0D_41BF_63E3B4119F10",
  "this.overlay_942EBC46_8456_497C_41B2_A9DAE2A6394B"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_886FA4D1_8472_3917_41C3_03F71321A641_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -76.85,
  "pitch": 0
 },
 "id": "camera_AA95C314_871B_DA6A_41B0_EE1504109A0C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_t.jpg",
 "partial": false,
 "label": "20220916_215744_753",
 "id": "panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88601130_847E_3B15_417C_A450C133B27A",
   "backwardYaw": 174.59,
   "yaw": 156.03,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8805D692_8472_3915_41BD_27A80AB99C46",
   "backwardYaw": 146.01,
   "yaw": 112.92,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_A2B01393_8707_5A6E_41DE_985114EBDE68",
  "this.overlay_A2C95528_8707_FEBA_41D3_8ED78E0AE056"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_t.jpg",
 "partial": false,
 "label": "20220916_220436_050",
 "id": "panorama_882E40C1_8476_5974_41C4_8364D29FE78A",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88EC96ED_8476_390F_41B9_0761AE1EE571",
   "backwardYaw": 88.91,
   "yaw": 2.19,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_91E5842F_84B6_D90C_41C5_95BE4766BD98",
  "this.overlay_915893B9_84B5_DF14_41CC_C2D64A216389"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -103.29,
  "pitch": 0
 },
 "id": "camera_A977D379_871B_DA9A_41BC_72600F3F6367",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.84,
  "pitch": 0
 },
 "id": "camera_A9499423_871B_DEAD_41DA_8AFB38FC9606",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_88505F59_8476_C717_41DA_96163F819358_t.jpg",
 "partial": false,
 "label": "20220916_220504_797",
 "id": "panorama_88505F59_8476_C717_41DA_96163F819358",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_88505F59_8476_C717_41DA_96163F819358_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88ECB67A_8476_D914_41C8_A37E095FDE06",
   "backwardYaw": 149.73,
   "yaw": 81.99,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88EC96ED_8476_390F_41B9_0761AE1EE571"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_9CA94A57_84B2_C91C_41DD_7DC5144132FC",
  "this.overlay_9C3BC333_84CE_5F14_41D0_BCB1EBAC9B06",
  "this.overlay_922CE867_84CE_493B_41B6_D7FB8C9FC5B9"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -98.73,
  "pitch": 0
 },
 "id": "camera_AA0191B3_871B_D9AE_41DD_76B709171409",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_886F6428_847E_5935_41D9_51E4544FE9E3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_t.jpg",
 "partial": false,
 "label": "20220916_220012_146",
 "id": "panorama_8844A3F0_8472_5F15_41D1_47E97F18622B",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F",
   "backwardYaw": 3.11,
   "yaw": 75.48,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_883D3A8C_8472_490D_41DD_CB4005C30366",
   "backwardYaw": 101.15,
   "yaw": -63.37,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_AAB8FAEF_8472_490C_41C4_C5C7392DB157",
  "this.overlay_B5EE76C2_8472_5975_41B4_C9357A4113E1"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_t.jpg",
 "partial": false,
 "label": "20220916_220451_912",
 "id": "panorama_88EC96ED_8476_390F_41B9_0761AE1EE571",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2",
   "backwardYaw": -89.88,
   "yaw": -125.47,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_882E40C1_8476_5974_41C4_8364D29FE78A",
   "backwardYaw": 2.19,
   "yaw": 88.91,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_91AE0D84_84B3_CBFD_41DE_CE30B84ADC16",
  "this.overlay_91A0CCEC_84B2_C90C_41D0_B960F9011973",
  "this.overlay_907D6878_84B6_C915_41DC_F53CED270231"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_t.jpg",
 "partial": false,
 "label": "20220916_215802_993",
 "id": "panorama_8803333F_8473_DF0B_41DC_94AFD6B10325",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443",
   "backwardYaw": -91.03,
   "yaw": 91.75,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_A375F53C_8708_BE9A_41C3_C481409276F8"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.17,
  "pitch": 0
 },
 "id": "camera_AA21114B_871B_D6FE_41D3_9CDD4C93EE0B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_883E4720_8476_C735_41BC_51E952F97596_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_8874476D_8476_470F_41CC_058745507A31_t.jpg",
 "partial": false,
 "label": "20220916_220540_476",
 "id": "panorama_8874476D_8476_470F_41CC_058745507A31",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8874476D_8476_470F_41CC_058745507A31_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8874476D_8476_470F_41CC_058745507A31_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8874476D_8476_470F_41CC_058745507A31_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8874476D_8476_470F_41CC_058745507A31_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8874476D_8476_470F_41CC_058745507A31_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8874476D_8476_470F_41CC_058745507A31_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8874476D_8476_470F_41CC_058745507A31_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8874476D_8476_470F_41CC_058745507A31_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8874476D_8476_470F_41CC_058745507A31_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8874476D_8476_470F_41CC_058745507A31_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8874476D_8476_470F_41CC_058745507A31_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8874476D_8476_470F_41CC_058745507A31_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8874476D_8476_470F_41CC_058745507A31_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8874476D_8476_470F_41CC_058745507A31_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8874476D_8476_470F_41CC_058745507A31_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8874476D_8476_470F_41CC_058745507A31_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8874476D_8476_470F_41CC_058745507A31_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8874476D_8476_470F_41CC_058745507A31_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8874476D_8476_470F_41CC_058745507A31_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3",
   "backwardYaw": 9.33,
   "yaw": -82.97,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88787FCE_8476_470D_41C0_8954C395F8B1",
   "backwardYaw": 85.56,
   "yaw": 7.03,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_9CD5F593_84D5_DB1B_41D0_46541D5F552C",
  "this.overlay_9C14175B_84D6_470B_41D6_1DC6F7586430"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.13,
  "pitch": 0
 },
 "id": "camera_A85256DE_871B_DB96_41D6_0BD0D634A269",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -65.67,
  "pitch": 0
 },
 "id": "camera_AB1D8E42_871B_CAEE_41D8_C76402C73CE3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_t.jpg",
 "partial": false,
 "label": "20220916_220248_243",
 "id": "panorama_88246630_8476_D915_41DE_9DEAF045FE25",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8832ED81_8476_4BF7_41D6_20E66B506D55",
   "backwardYaw": -99.14,
   "yaw": -177.26,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_883F4E16_8476_C91C_41C9_0628B527B1CC",
   "backwardYaw": -93.9,
   "yaw": 81.27,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_AE793ACD_844E_490F_41C1_0D405FDED7EC",
  "this.overlay_ACC06153_844F_FB1B_41C7_ED0B8270CDD6"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_t.jpg",
 "partial": false,
 "label": "20220914_160329_798",
 "id": "panorama_8863F014_847E_791D_41D6_055757B74CAB",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_884D6F37_847E_471B_41C7_81203FC86931"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_948EC139_8708_D69A_4188_5CC50AAD7B72",
  "this.overlay_9491832A_8709_5ABE_41DF_00E6AC1B770A"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8848C141_8476_3B74_41D0_5893DB53C92E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_t.jpg",
 "partial": false,
 "label": "20220916_220423_173",
 "id": "panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88EC96ED_8476_390F_41B9_0761AE1EE571",
   "backwardYaw": -125.47,
   "yaw": -89.88,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_908B749C_84BE_390D_41CD_4AFBEF468F2E",
  "this.overlay_91B4DDF4_84BF_CB1D_41DB_D24301EB3E0E"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -170.67,
  "pitch": 0
 },
 "id": "camera_AB887036_871B_D696_41D0_EDB5874C4058",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.81,
  "pitch": 0
 },
 "id": "camera_AA2B216D_871B_D6BA_41D2_3C29FFAC01D6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_88505F59_8476_C717_41DA_96163F819358_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_t.jpg",
 "partial": false,
 "label": "20220916_215733_072",
 "id": "panorama_8805D692_8472_3915_41BD_27A80AB99C46",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF",
   "backwardYaw": 112.92,
   "yaw": 146.01,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443",
   "backwardYaw": 5.33,
   "yaw": 114.33,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_A3684BEE_870B_49B6_41DF_85E26D3D682A",
  "this.overlay_AFAC088A_8708_D67E_41CB_558BE00D125F"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF_t.jpg",
 "partial": false,
 "hfovMax": 130,
 "label": "20220916_215459_930",
 "id": "panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.4,
  "pitch": 0
 },
 "id": "camera_AA4660E2_871B_D7AE_41D0_275574EB2A2E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_t.jpg",
 "partial": false,
 "label": "20220916_220409_851",
 "id": "panorama_8870E405_8476_38FF_41CC_5C20F782D70C",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B",
   "backwardYaw": 116.83,
   "yaw": 174.42,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88787FCE_8476_470D_41C0_8954C395F8B1",
   "backwardYaw": 18.41,
   "yaw": -5.44,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_A2B82F39_84B2_4717_41D3_A5F6C7D09CC4",
  "this.overlay_ACEB2C4F_84B5_C90B_41C8_29B89518C4FE"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_88625FE3_847D_C734_41D9_1B617B660EDC_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -157.54,
  "pitch": 0
 },
 "id": "camera_AB7D6CF2_871B_CFAF_41D9_79AADA4D24FD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 165.85,
  "pitch": 0
 },
 "id": "camera_ABDD5F15_871B_CA6A_41D1_F38FD979EA0A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.32,
  "pitch": 0
 },
 "id": "camera_ABE7CED0_871B_CBEA_41C4_A5F3DDBBD922",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -169.92,
  "pitch": 0
 },
 "id": "camera_A9F89513_871B_DE6E_41DF_149553F550D6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.77,
  "pitch": 0
 },
 "id": "camera_AAC0E280_871B_DA6A_4195_BA791A1F737C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.72,
  "pitch": 0
 },
 "id": "camera_AAD5823C_871B_DA9A_41BA_94083FFBCF71",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8F9C6C49_847E_C974_41DE_023912D4E768_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_t.jpg",
 "partial": false,
 "label": "20220916_220749_639",
 "id": "panorama_887181AA_8472_DB35_41D4_494293D3522F",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_886B5CD3_8472_4914_41D3_4C361FDF4483",
   "backwardYaw": 92.56,
   "yaw": 85.1,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_883C892C_8472_CB0D_41DC_699F9FEC589D",
   "backwardYaw": 70.64,
   "yaw": -152.11,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_A69D3C92_84CE_4915_41D7_625BDD4723DD",
  "this.overlay_A45E3FC7_84F2_477B_41B6_E066BEC7B642",
  "this.overlay_A40DA04E_84F3_D906_41CD_3675556000EE"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_t.jpg",
 "partial": false,
 "label": "20220916_220813_411",
 "id": "panorama_88422490_8472_7915_41C6_A2751458AF5A",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88505F59_8476_C717_41DA_96163F819358"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8804DBE3_8472_4F3B_41D6_2686CA381920",
   "backwardYaw": 10.08,
   "yaw": 5.1,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8826A109_8472_38F7_41CB_B15027D3A22E"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_A0D5C7D9_84CE_4714_41CC_D21406B6C9EC",
  "this.overlay_A2138F3C_84CE_C70D_41D9_C2B106BB70B6",
  "this.overlay_A7F96542_84CD_DB75_41B2_4D7489D21673"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_t.jpg",
 "partial": false,
 "label": "20220916_220304_377",
 "id": "panorama_8832ED81_8476_4BF7_41D6_20E66B506D55",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88246630_8476_D915_41DE_9DEAF045FE25",
   "backwardYaw": -177.26,
   "yaw": -99.14,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_898DF6FD_8452_790F_41D2_BF2075881A76",
  "this.overlay_8AB79452_845E_7915_41A6_D69AEF9A654D"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_8842CABD_8472_490F_41DC_127DE86BCA9B_t.jpg",
 "partial": false,
 "hfovMax": 130,
 "label": "20220916_215709_813",
 "id": "panorama_8842CABD_8472_490F_41DC_127DE86BCA9B",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8842CABD_8472_490F_41DC_127DE86BCA9B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8842CABD_8472_490F_41DC_127DE86BCA9B_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8842CABD_8472_490F_41DC_127DE86BCA9B_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8842CABD_8472_490F_41DC_127DE86BCA9B_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8842CABD_8472_490F_41DC_127DE86BCA9B_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8842CABD_8472_490F_41DC_127DE86BCA9B_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8842CABD_8472_490F_41DC_127DE86BCA9B_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8842CABD_8472_490F_41DC_127DE86BCA9B_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8842CABD_8472_490F_41DC_127DE86BCA9B_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8842CABD_8472_490F_41DC_127DE86BCA9B_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8842CABD_8472_490F_41DC_127DE86BCA9B_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8842CABD_8472_490F_41DC_127DE86BCA9B_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8842CABD_8472_490F_41DC_127DE86BCA9B_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8842CABD_8472_490F_41DC_127DE86BCA9B_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8842CABD_8472_490F_41DC_127DE86BCA9B_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8842CABD_8472_490F_41DC_127DE86BCA9B_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8842CABD_8472_490F_41DC_127DE86BCA9B_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8842CABD_8472_490F_41DC_127DE86BCA9B_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8842CABD_8472_490F_41DC_127DE86BCA9B_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8848E099_8472_F917_41C0_379F999A0FC6_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -78.85,
  "pitch": 0
 },
 "id": "camera_AA838358_871B_DA9A_41BE_3C315FEA0537",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 32.76,
  "pitch": 0
 },
 "id": "camera_AC9D2C8C_871B_CE7A_41D7_72AE9C79FAAE",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8842CABD_8472_490F_41DC_127DE86BCA9B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_886FA4D1_8472_3917_41C3_03F71321A641_t.jpg",
 "partial": false,
 "label": "20220916_215659_471",
 "id": "panorama_886FA4D1_8472_3917_41C3_03F71321A641",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_886FA4D1_8472_3917_41C3_03F71321A641_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886FA4D1_8472_3917_41C3_03F71321A641_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886FA4D1_8472_3917_41C3_03F71321A641_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886FA4D1_8472_3917_41C3_03F71321A641_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886FA4D1_8472_3917_41C3_03F71321A641_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886FA4D1_8472_3917_41C3_03F71321A641_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886FA4D1_8472_3917_41C3_03F71321A641_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886FA4D1_8472_3917_41C3_03F71321A641_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886FA4D1_8472_3917_41C3_03F71321A641_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886FA4D1_8472_3917_41C3_03F71321A641_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886FA4D1_8472_3917_41C3_03F71321A641_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886FA4D1_8472_3917_41C3_03F71321A641_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886FA4D1_8472_3917_41C3_03F71321A641_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886FA4D1_8472_3917_41C3_03F71321A641_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886FA4D1_8472_3917_41C3_03F71321A641_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886FA4D1_8472_3917_41C3_03F71321A641_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886FA4D1_8472_3917_41C3_03F71321A641_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886FA4D1_8472_3917_41C3_03F71321A641_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886FA4D1_8472_3917_41C3_03F71321A641_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8859E612_8472_D915_41D7_64DEFC78D019",
   "backwardYaw": -22.34,
   "yaw": 43.08,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_AD05810C_8707_B67A_4197_F4F99E7170A1"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_t.jpg",
 "partial": false,
 "label": "20220914_160320_713",
 "id": "panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8863F014_847E_791D_41D6_055757B74CAB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80",
   "backwardYaw": 1.26,
   "yaw": 90.19,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_958871C6_8719_D9F6_41AD_F31F77676348",
  "this.overlay_958E22FA_8719_5B9F_41BC_AEABDFF7716D"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -136.92,
  "pitch": 0
 },
 "id": "camera_AAE1221C_871B_DA9A_41D1_D4FBFFFDD210",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 96.97,
  "pitch": 0
 },
 "id": "camera_ABBDBF7B_871B_CA9E_41AD_F4486A5499B5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.38,
  "pitch": 0
 },
 "id": "camera_ACAA9C6A_871B_CEBE_413B_472AB2ADAE28",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "thumbnailUrl": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_t.jpg",
 "partial": false,
 "label": "20220916_220557_453",
 "id": "panorama_88787FCE_8476_470D_41C0_8954C395F8B1",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC",
   "backwardYaw": -1.46,
   "yaw": -90.76,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8874476D_8476_470F_41CC_058745507A31",
   "backwardYaw": 7.03,
   "yaw": 85.56,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8870E405_8476_38FF_41CC_5C20F782D70C",
   "backwardYaw": -5.44,
   "yaw": 18.41,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_9F527760_84D6_C734_41D9_EFE35AD34D58",
  "this.overlay_98B85CC0_84D6_4975_41A0_CA3BC43E8293",
  "this.overlay_9DE225B1_84D5_DB17_41DD_0F8D39F048A4",
  "this.overlay_A12F88D1_84B2_C917_417E_CBCAD4BBACEC"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_t.jpg",
 "partial": false,
 "label": "20220916_215516_608",
 "id": "panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_886F6428_847E_5935_41D9_51E4544FE9E3",
   "backwardYaw": 2.83,
   "yaw": 119.1,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1",
   "backwardYaw": 90.19,
   "yaw": 1.26,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_97E12A4C_8719_4AFA_418F_39EE4A023066",
  "this.overlay_932D9821_871B_56AA_41BC_1C5DB42013E4"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_88787FCE_8476_470D_41C0_8954C395F8B1_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_884D6F37_847E_471B_41C7_81203FC86931_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_t.jpg",
 "partial": false,
 "label": "20220916_220516_595",
 "id": "panorama_88ECB67A_8476_D914_41C8_A37E095FDE06",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88505F59_8476_C717_41DA_96163F819358",
   "backwardYaw": 81.99,
   "yaw": 149.73,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_9C8F1E87_84CD_C9FB_41E0_0AF4D8C651D5"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_t.jpg",
 "partial": false,
 "label": "20220916_215918_772",
 "id": "panorama_8848E099_8472_F917_41C0_379F999A0FC6",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3",
   "backwardYaw": -78.3,
   "yaw": 4.87,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5",
   "backwardYaw": 85.59,
   "yaw": -171.6,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_B025B1AB_8472_5B0B_41C7_12FA7F5C12FD",
  "this.overlay_B462278C_8473_C70D_41D7_D5C772B2E50C"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_t.jpg",
 "partial": false,
 "label": "20220914_160350_912",
 "id": "panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F9C6C49_847E_C974_41DE_023912D4E768",
   "backwardYaw": 103.09,
   "yaw": -23.28,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8803333F_8473_DF0B_41DC_94AFD6B10325",
   "backwardYaw": 91.75,
   "yaw": -91.03,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8805D692_8472_3915_41BD_27A80AB99C46",
   "backwardYaw": 114.33,
   "yaw": 5.33,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_A78292FF_8718_DB95_41E0_0BA09D93DC27",
  "this.overlay_A7003A78_871F_4A9A_41E0_5209CC32F745",
  "this.overlay_A726E9F8_871F_499A_41D1_5CB1983E9D4D"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_t.jpg",
 "partial": false,
 "label": "20220916_220718_569",
 "id": "panorama_886B5CD3_8472_4914_41D3_4C361FDF4483",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_885A0141_8472_7B77_41C1_AB3E37F3800E",
   "backwardYaw": 1.23,
   "yaw": -83.03,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_887181AA_8472_DB35_41D4_494293D3522F",
   "backwardYaw": 85.1,
   "yaw": 92.56,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88787FCE_8476_470D_41C0_8954C395F8B1"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_A60F24AD_84CD_D90F_41DE_29943941B42E",
  "this.overlay_9B85671E_84CE_C70D_414E_A530BE6E96F4",
  "this.overlay_9BC73EF6_84CE_491D_417E_4B1981682043"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_t.jpg",
 "partial": false,
 "label": "20220916_220705_576",
 "id": "panorama_885A0141_8472_7B77_41C1_AB3E37F3800E",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_886B5CD3_8472_4914_41D3_4C361FDF4483",
   "backwardYaw": -83.03,
   "yaw": 1.23,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88285657_8472_391B_41DB_CE6761F37A0B",
   "backwardYaw": 90.57,
   "yaw": 178.31,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_9A83079C_84D2_470C_41D2_1060DBCB3D66",
  "this.overlay_9AB49596_84D2_3B1D_4192_13BF254D68B8"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -91.09,
  "pitch": 0
 },
 "id": "camera_ACA63C44_871B_CEEA_41CB_4557AB4FDF55",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.81,
  "pitch": 0
 },
 "id": "camera_ACBD5C22_871B_CEAE_41D8_D2816E75DDA1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 174.91,
  "pitch": 0
 },
 "id": "camera_AC866CAE_871B_CFB6_41A7_3C844FF76813",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_t.jpg",
 "partial": false,
 "label": "20220914_160343_520",
 "id": "panorama_8F9C6C49_847E_C974_41DE_023912D4E768",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7",
   "backwardYaw": 172.64,
   "yaw": 4.1,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8869E06A_847D_F935_41BF_4A47A84840BB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443",
   "backwardYaw": -23.28,
   "yaw": 103.09,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88447E27_8472_493C_41BE_0FC6BE043DF9",
   "backwardYaw": 159.89,
   "yaw": 69.45,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_9BDACED7_8708_CB96_41DE_A1D1EEE8AF1A",
  "this.overlay_9BB23334_870B_5AAA_41D2_A815D08B36C5",
  "this.overlay_9A22FFAA_8709_C9BF_41CE_AE35FB711623",
  "this.overlay_9A5BE196_8709_5997_41E0_C7D857B5E611"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -23.97,
  "pitch": 0
 },
 "id": "camera_A9E2F53A_871B_DE9E_4171_0EDEC050CA19",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -21.82,
  "pitch": 0
 },
 "id": "camera_ABC71F37_871B_CA96_41D6_C5D7E866D506",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8805D692_8472_3915_41BD_27A80AB99C46_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 27.89,
  "pitch": 0
 },
 "id": "camera_A8438700_871B_DA6A_41DE_5FEFCAD73680",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_t.jpg",
 "partial": false,
 "label": "20220916_220354_189",
 "id": "panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED",
   "backwardYaw": -100.09,
   "yaw": 174.47,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED",
   "backwardYaw": -100.09,
   "yaw": 174.47,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8870E405_8476_38FF_41CC_5C20F782D70C",
   "backwardYaw": 174.42,
   "yaw": 116.83,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_94496ADC_844F_C90D_41D5_C67422F03575",
  "this.overlay_9760ECF5_844E_C91F_41CC_6C8B3032267C",
  "this.overlay_A1913D5A_84BE_4B0E_41A6_CF90FA4AADDC",
  "this.overlay_A1F65C90_84BE_C915_41C7_31B149A85AAD"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 54.53,
  "pitch": 0
 },
 "id": "camera_AA1C7190_871B_D66A_41D9_CAD2918C032A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_t.jpg",
 "partial": false,
 "label": "20220914_155135_156",
 "id": "panorama_8869E06A_847D_F935_41BF_4A47A84840BB",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_90F82219_8707_5A9A_4153_F30E5FB68A04",
  "this.overlay_9F13739D_8778_D99A_41B5_73E24D9161DD",
  "this.overlay_9FB313A5_8779_F9AA_41DB_DB20CB16A68F"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_8826A109_8472_38F7_41CB_B15027D3A22E_t.jpg",
 "partial": false,
 "hfovMax": 130,
 "label": "20220916_220836_266",
 "id": "panorama_8826A109_8472_38F7_41CB_B15027D3A22E",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8826A109_8472_38F7_41CB_B15027D3A22E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8826A109_8472_38F7_41CB_B15027D3A22E_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8826A109_8472_38F7_41CB_B15027D3A22E_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8826A109_8472_38F7_41CB_B15027D3A22E_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8826A109_8472_38F7_41CB_B15027D3A22E_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8826A109_8472_38F7_41CB_B15027D3A22E_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8826A109_8472_38F7_41CB_B15027D3A22E_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8826A109_8472_38F7_41CB_B15027D3A22E_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8826A109_8472_38F7_41CB_B15027D3A22E_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8826A109_8472_38F7_41CB_B15027D3A22E_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8826A109_8472_38F7_41CB_B15027D3A22E_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8826A109_8472_38F7_41CB_B15027D3A22E_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8826A109_8472_38F7_41CB_B15027D3A22E_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8826A109_8472_38F7_41CB_B15027D3A22E_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8826A109_8472_38F7_41CB_B15027D3A22E_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8826A109_8472_38F7_41CB_B15027D3A22E_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8826A109_8472_38F7_41CB_B15027D3A22E_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8826A109_8472_38F7_41CB_B15027D3A22E_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8826A109_8472_38F7_41CB_B15027D3A22E_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.9,
  "pitch": 0
 },
 "id": "camera_AABE92CD_871B_DBFA_41C9_5CBDB565BE3C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_t.jpg",
 "partial": false,
 "label": "20220916_220802_203",
 "id": "panorama_8804DBE3_8472_4F3B_41D6_2686CA381920",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88422490_8472_7915_41C6_A2751458AF5A",
   "backwardYaw": 5.1,
   "yaw": 10.08,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_887181AA_8472_DB35_41D4_494293D3522F"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_A5369243_84F5_F97B_41D5_414D22F8B4CF",
  "this.overlay_A45D4E10_84F6_4915_419B_DDF261227FE6"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8832ED81_8476_4BF7_41D6_20E66B506D55",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_884DC575_8476_7B1F_41DF_317D5659BBF5",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8870E405_8476_38FF_41CC_5C20F782D70C",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_8870E405_8476_38FF_41CC_5C20F782D70C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_88EC96ED_8476_390F_41B9_0761AE1EE571",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_882E40C1_8476_5974_41C4_8364D29FE78A",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_882E40C1_8476_5974_41C4_8364D29FE78A_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_88505F59_8476_C717_41DA_96163F819358",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "camera": "this.panorama_88505F59_8476_C717_41DA_96163F819358_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_88ECB67A_8476_D914_41C8_A37E095FDE06",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "camera": "this.panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "camera": "this.panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8874476D_8476_470F_41CC_058745507A31",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "camera": "this.panorama_8874476D_8476_470F_41CC_058745507A31_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_88787FCE_8476_470D_41C0_8954C395F8B1",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "camera": "this.panorama_88787FCE_8476_470D_41C0_8954C395F8B1_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "camera": "this.panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "camera": "this.panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_88285657_8472_391B_41DB_CE6761F37A0B",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "camera": "this.panorama_88285657_8472_391B_41DB_CE6761F37A0B_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_885A0141_8472_7B77_41C1_AB3E37F3800E",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "camera": "this.panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_886B5CD3_8472_4914_41D3_4C361FDF4483",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "camera": "this.panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_883C892C_8472_CB0D_41DC_699F9FEC589D",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "camera": "this.panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_887181AA_8472_DB35_41D4_494293D3522F",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "camera": "this.panorama_887181AA_8472_DB35_41D4_494293D3522F_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8804DBE3_8472_4F3B_41D6_2686CA381920",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "camera": "this.panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_88422490_8472_7915_41C6_A2751458AF5A",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "camera": "this.panorama_88422490_8472_7915_41C6_A2751458AF5A_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "camera": "this.panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8826A109_8472_38F7_41CB_B15027D3A22E",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "camera": "this.panorama_8826A109_8472_38F7_41CB_B15027D3A22E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_88246630_8476_D915_41DE_9DEAF045FE25",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "camera": "this.panorama_88246630_8476_D915_41DE_9DEAF045FE25_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_883F4E16_8476_C91C_41C9_0628B527B1CC",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "camera": "this.panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_883E4720_8476_C735_41BC_51E952F97596",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "camera": "this.panorama_883E4720_8476_C735_41BC_51E952F97596_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_883A6FCD_8476_470C_41C3_0510E10140C8",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "camera": "this.panorama_883A6FCD_8476_470C_41C3_0510E10140C8_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "camera": "this.panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8844A3F0_8472_5F15_41D1_47E97F18622B",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "camera": "this.panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_883D3A8C_8472_490D_41DD_CB4005C30366",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "camera": "this.panorama_883D3A8C_8472_490D_41DD_CB4005C30366_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "camera": "this.panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8848E099_8472_F917_41C0_379F999A0FC6",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "camera": "this.panorama_8848E099_8472_F917_41C0_379F999A0FC6_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "camera": "this.panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_886F6428_847E_5935_41D9_51E4544FE9E3",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "camera": "this.panorama_886F6428_847E_5935_41D9_51E4544FE9E3_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "camera": "this.panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "camera": "this.panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8863F014_847E_791D_41D6_055757B74CAB",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "camera": "this.panorama_8863F014_847E_791D_41D6_055757B74CAB_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_884D6F37_847E_471B_41C7_81203FC86931",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "camera": "this.panorama_884D6F37_847E_471B_41C7_81203FC86931_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "camera": "this.panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_885492F2_847D_D914_41CE_107B8AA1E942",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "camera": "this.panorama_885492F2_847D_D914_41CE_107B8AA1E942_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_88625FE3_847D_C734_41D9_1B617B660EDC",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "camera": "this.panorama_88625FE3_847D_C734_41D9_1B617B660EDC_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8869E06A_847D_F935_41BF_4A47A84840BB",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "camera": "this.panorama_8869E06A_847D_F935_41BF_4A47A84840BB_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8848C141_8476_3B74_41D0_5893DB53C92E",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "camera": "this.panorama_8848C141_8476_3B74_41D0_5893DB53C92E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "camera": "this.panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8F9C6C49_847E_C974_41DE_023912D4E768",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "camera": "this.panorama_8F9C6C49_847E_C974_41DE_023912D4E768_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "camera": "this.panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_88447E27_8472_493C_41BE_0FC6BE043DF9",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50)",
   "camera": "this.panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)",
   "camera": "this.panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8803333F_8473_DF0B_41DC_94AFD6B10325",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 51, 52)",
   "camera": "this.panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8805D692_8472_3915_41BD_27A80AB99C46",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 52, 53)",
   "camera": "this.panorama_8805D692_8472_3915_41BD_27A80AB99C46_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 53, 54)",
   "camera": "this.panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_88601130_847E_3B15_417C_A450C133B27A",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 54, 55)",
   "camera": "this.panorama_88601130_847E_3B15_417C_A450C133B27A_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_88277E22_8472_493E_41D2_EBE9939F983D",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 55, 56)",
   "camera": "this.panorama_88277E22_8472_493E_41D2_EBE9939F983D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8859E612_8472_D915_41D7_64DEFC78D019",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 56, 57)",
   "camera": "this.panorama_8859E612_8472_D915_41D7_64DEFC78D019_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_886FA4D1_8472_3917_41C3_03F71321A641",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 57, 58)",
   "camera": "this.panorama_886FA4D1_8472_3917_41C3_03F71321A641_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8842CABD_8472_490F_41DC_127DE86BCA9B",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 58, 0)",
   "camera": "this.panorama_8842CABD_8472_490F_41DC_127DE86BCA9B_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "thumbnailUrl": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_t.jpg",
 "partial": false,
 "label": "20220916_215528_073",
 "id": "panorama_886F6428_847E_5935_41D9_51E4544FE9E3",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F8005D7_847E_FB1B_419D_9508D6915EFF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F",
   "backwardYaw": -5.09,
   "yaw": 158.18,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80",
   "backwardYaw": 119.1,
   "yaw": 2.83,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_885492F2_847D_D914_41CE_107B8AA1E942",
   "backwardYaw": 22.46,
   "yaw": -132.99,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_8A94BE5E_8708_CA96_41A5_2DF3DBF96203",
  "this.overlay_8AB4FC79_8707_4E9A_41C6_C4C2A9CE6455",
  "this.overlay_882983FA_8707_F99E_41DF_C1FB2527DE64",
  "this.overlay_9604AC31_871F_4EAA_41DF_112ECBDF6510"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.9,
  "pitch": 0
 },
 "id": "camera_A90054CF_871B_DFF6_41C3_8F3D2B81DB23",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_t.jpg",
 "partial": false,
 "label": "20220916_220730_638",
 "id": "panorama_883C892C_8472_CB0D_41DC_699F9FEC589D",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_887181AA_8472_DB35_41D4_494293D3522F",
   "backwardYaw": -152.11,
   "yaw": 70.64,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_A6CEC1BA_84D2_5B15_41DE_7BBDB590E420"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.44,
  "pitch": 0
 },
 "id": "camera_AA7CD059_871B_D69A_41DB_C9AC848D5B16",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_t.jpg",
 "partial": false,
 "label": "20220916_220314_564",
 "id": "panorama_884DC575_8476_7B1F_41DF_317D5659BBF5",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8832ED81_8476_4BF7_41D6_20E66B506D55"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_9479FFFF_8455_C70B_41D1_52D2CD570B12",
  "this.overlay_8AABFBAD_8456_CF0F_41D6_C38FEB0708AC"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -63.17,
  "pitch": 0
 },
 "id": "camera_AB06EE65_871B_CAB5_41A2_A503631A4CF7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_883A6FCD_8476_470C_41C3_0510E10140C8_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_88601130_847E_3B15_417C_A450C133B27A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 174.56,
  "pitch": 0
 },
 "id": "camera_A9B305C4_871B_D9EA_41A4_4A6400C4903C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_t.jpg",
 "partial": false,
 "label": "20220916_220146_574",
 "id": "panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8848C141_8476_3B74_41D0_5893DB53C92E",
   "backwardYaw": -47.36,
   "yaw": 0.68,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_9CF5C96E_8709_B6B6_41DB_4E89CC34BBFD"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -108.97,
  "pitch": 0
 },
 "id": "camera_ABCBBF58_871B_CA9B_41D4_6627F81DDBC1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8870E405_8476_38FF_41CC_5C20F782D70C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 80.86,
  "pitch": 0
 },
 "id": "camera_A878D699_871B_DB9A_41D1_3FF1EF7823AB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -172.97,
  "pitch": 0
 },
 "id": "camera_A9CFC5A2_871B_D9AE_41C7_6EC31BB1F180",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -168.03,
  "pitch": 0
 },
 "id": "camera_AA5D10BF_871B_D795_41CB_39ED3F3344A1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_t.jpg",
 "partial": false,
 "label": "20220916_220651_296",
 "id": "panorama_88285657_8472_391B_41DB_CE6761F37A0B",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20",
   "backwardYaw": 19.6,
   "yaw": -7.16,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_885A0141_8472_7B77_41C1_AB3E37F3800E",
   "backwardYaw": 178.31,
   "yaw": 90.57,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_A4AFF2D4_84D6_591D_41D0_1311A5C1C41D",
  "this.overlay_9941E950_84D5_CB15_41D3_3A79EE527F7B"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 101.7,
  "pitch": 0
 },
 "id": "camera_AA0AC1D7_871B_D996_41B6_96A145043EEC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_8859E612_8472_D915_41D7_64DEFC78D019_t.jpg",
 "partial": false,
 "label": "20220916_215638_603",
 "id": "panorama_8859E612_8472_D915_41D7_64DEFC78D019",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8859E612_8472_D915_41D7_64DEFC78D019_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8859E612_8472_D915_41D7_64DEFC78D019_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8859E612_8472_D915_41D7_64DEFC78D019_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8859E612_8472_D915_41D7_64DEFC78D019_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8859E612_8472_D915_41D7_64DEFC78D019_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8859E612_8472_D915_41D7_64DEFC78D019_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8859E612_8472_D915_41D7_64DEFC78D019_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8859E612_8472_D915_41D7_64DEFC78D019_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8859E612_8472_D915_41D7_64DEFC78D019_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8859E612_8472_D915_41D7_64DEFC78D019_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8859E612_8472_D915_41D7_64DEFC78D019_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8859E612_8472_D915_41D7_64DEFC78D019_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8859E612_8472_D915_41D7_64DEFC78D019_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8859E612_8472_D915_41D7_64DEFC78D019_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8859E612_8472_D915_41D7_64DEFC78D019_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8859E612_8472_D915_41D7_64DEFC78D019_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8859E612_8472_D915_41D7_64DEFC78D019_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8859E612_8472_D915_41D7_64DEFC78D019_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8859E612_8472_D915_41D7_64DEFC78D019_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_886FA4D1_8472_3917_41C3_03F71321A641",
   "backwardYaw": 43.08,
   "yaw": -22.34,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_AFA8AC93_8738_CE6E_41D0_3A181E1CC14E"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_t.jpg",
 "partial": false,
 "label": "20220916_215953_561",
 "id": "panorama_883D3A8C_8472_490D_41DD_CB4005C30366",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8844A3F0_8472_5F15_41D1_47E97F18622B",
   "backwardYaw": -63.37,
   "yaw": 101.15,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5",
   "backwardYaw": -32.46,
   "yaw": 11.97,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_B726266B_8476_D934_41E0_21D606AEF8AF",
  "this.overlay_A94C0396_8477_DF1D_41D2_83205F2B8C34"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -20.11,
  "pitch": 0
 },
 "id": "camera_A91C14AC_871B_DFBA_41D2_9B8AD756B5AC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 97.03,
  "pitch": 0
 },
 "id": "camera_ACC67BDF_871B_C996_41DD_F2B5F5EA83D9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_88285657_8472_391B_41DB_CE6761F37A0B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 79.91,
  "pitch": 0
 },
 "id": "camera_A981F653_871B_DAED_41CD_AC0111EC3FE4",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_t.jpg",
 "partial": false,
 "label": "20220914_160408_344",
 "id": "panorama_88601130_847E_3B15_417C_A450C133B27A",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF",
   "backwardYaw": 156.03,
   "yaw": 174.59,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88277E22_8472_493E_41D2_EBE9939F983D",
   "backwardYaw": -91.22,
   "yaw": 76.71,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_A08BC21C_8738_BA9A_41D7_FCA9F2ADF772",
  "this.overlay_A0191F51_8739_CAEA_41B0_AE3219190D0F"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.43,
  "pitch": 0
 },
 "id": "camera_ABA6DFA4_871B_C9AA_41CF_ABD6AEE81C34",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -104.52,
  "pitch": 0
 },
 "id": "camera_ABE81EF2_871B_CBAF_41DF_B63668E8DC21",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 79.91,
  "pitch": 0
 },
 "id": "camera_A99DE632_871B_DAAE_41D0_A550CA2B1A9D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.67,
  "pitch": 0
 },
 "id": "camera_A95003E0_871B_D9AA_41D9_345409813D78",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_887181AA_8472_DB35_41D4_494293D3522F_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_88277E22_8472_493E_41D2_EBE9939F983D_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.36,
  "pitch": 0
 },
 "id": "camera_A9273467_871B_DEB6_41D8_9F1E2036B47C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_t.jpg",
 "partial": false,
 "label": "20220916_220342_581",
 "id": "panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8844A3F0_8472_5F15_41D1_47E97F18622B",
   "backwardYaw": 75.48,
   "yaw": 3.11,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5",
   "backwardYaw": -14.15,
   "yaw": 109.68,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_886F6428_847E_5935_41D9_51E4544FE9E3",
   "backwardYaw": 158.18,
   "yaw": -5.09,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED",
   "backwardYaw": 71.03,
   "yaw": -85.28,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_950067AC_8453_C70D_419A_71430526CC1A",
  "this.overlay_9017D3A5_8452_5F3F_41B5_D67395327984",
  "this.overlay_9460C89D_844E_490F_4193_5D8B8F5CB3D4",
  "this.overlay_9507D796_844E_C71D_41BC_E3C3E834D148"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -33.99,
  "pitch": 0
 },
 "id": "camera_AB327DC7_871B_C9F6_41DE_A92474B59F4D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8869E06A_847D_F935_41BF_4A47A84840BB_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -165.22,
  "pitch": 0
 },
 "id": "camera_AB864012_871B_D66E_41C3_AB121BF4B4AA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -5.53,
  "pitch": 0
 },
 "id": "camera_AADFA25F_871B_DA96_41AB_0FAC775A057F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8874476D_8476_470F_41CC_058745507A31_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -110.55,
  "pitch": 0
 },
 "id": "camera_AB671D16_871B_CE96_41B3_5E2E9245871B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_t.jpg",
 "partial": false,
 "label": "20220916_220529_123",
 "id": "panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8874476D_8476_470F_41CC_058745507A31",
   "backwardYaw": -82.97,
   "yaw": 9.33,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88505F59_8476_C717_41DA_96163F819358"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_9C3DDB8F_84D2_4F0B_41D6_C03F30407A7C",
  "this.overlay_9C40F8D7_84D3_C91B_41CD_BDBD01E86AB1"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 164,
  "pitch": 0
 },
 "id": "camera_ABFDEEAC_871B_CBBA_4176_BFBD790DAC4C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7_t.jpg",
 "partial": false,
 "hfovMax": 130,
 "label": "20220916_220823_905",
 "id": "panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8842AB45_8472_4F7F_41B2_E9B3FB1CBEF7_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8863F014_847E_791D_41D6_055757B74CAB_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -87.44,
  "pitch": 0
 },
 "id": "camera_ABA8BFCA_871B_C9FE_417E_4A32957E0809",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8859E612_8472_D915_41D7_64DEFC78D019_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.74,
  "pitch": 0
 },
 "id": "camera_A9A495E8_871B_D9BA_41C0_ED834BD7CF09",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -60.9,
  "pitch": 0
 },
 "id": "camera_AC881CCF_871B_CFF6_41C5_A7AE593AD02B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -160.4,
  "pitch": 0
 },
 "id": "camera_ACE09B75_871B_CAAA_4191_A30135232481",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 88.78,
  "pitch": 0
 },
 "id": "camera_A9D6A55D_871B_DE9A_41E0_7C7E6DC6FB7D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.41,
  "pitch": 0
 },
 "id": "camera_AAFF21FA_871B_D99E_41D8_9939CF0C039D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_t.jpg",
 "partial": false,
 "label": "20220916_220634_060",
 "id": "panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC",
   "backwardYaw": -178.9,
   "yaw": 98.73,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88285657_8472_391B_41DB_CE6761F37A0B",
   "backwardYaw": -7.16,
   "yaw": 19.6,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_98FB35F7_84DF_DB1B_41D9_8DBC0BF77DAA",
  "this.overlay_9F9E572B_84DE_C70B_41DC_4A255A0FE75C"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_t.jpg",
 "partial": false,
 "label": "20220916_220222_831",
 "id": "panorama_883E4720_8476_C735_41BC_51E952F97596",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_883F4E16_8476_C91C_41C9_0628B527B1CC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_883A6FCD_8476_470C_41C3_0510E10140C8",
   "backwardYaw": 97.58,
   "yaw": 1.62,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18",
   "backwardYaw": 103.15,
   "yaw": 14.78,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_B4281D7F_8452_CB0C_41DD_BF7A8DA8992D",
  "this.overlay_A9151F8F_8455_C70C_4187_5378E357A060",
  "this.overlay_AC3F59CB_8456_4B74_41CC_20F1657B0B34"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 86.1,
  "pitch": 0
 },
 "id": "camera_A86ED6BB_871B_DB9E_41DF_E408BC09A090",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -109.36,
  "pitch": 0
 },
 "id": "camera_AB9D2FEC_871B_C9BA_418C_31607B8DB945",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_t.jpg",
 "partial": false,
 "label": "20220916_215850_561",
 "id": "panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F9C6C49_847E_C974_41DE_023912D4E768",
   "backwardYaw": 4.1,
   "yaw": 172.64,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_9877C36A_8719_5ABE_41BE_9394CEAB73CA"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 157.66,
  "pitch": 0
 },
 "id": "camera_ACDFFBBD_871B_C99A_4167_0BE7A02C3A0E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_t.jpg",
 "partial": false,
 "label": "20220916_215905_095",
 "id": "panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8844A3F0_8472_5F15_41D1_47E97F18622B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8848E099_8472_F917_41C0_379F999A0FC6",
   "backwardYaw": 4.87,
   "yaw": -78.3,
   "distance": 1
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_B5B2ECAB_847D_C90B_41C7_3F7D92EBA82C",
  "this.overlay_B1E8ED5C_847E_CB0C_41DA_91ACAE1D7CFE"
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 1.1,
  "pitch": 0
 },
 "id": "camera_A95A6401_871B_DE6D_41E0_62E96D94401E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 147.54,
  "pitch": 0
 },
 "id": "camera_AB473D7E_871B_CE96_41D8_F37069CDDC1F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_88422490_8472_7915_41C6_A2751458AF5A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_882E40C1_8476_5974_41C4_8364D29FE78A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -98.01,
  "pitch": 0
 },
 "id": "camera_A9A8E60D_871B_DA7A_41D2_30B6ACD00F0E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -5.58,
  "pitch": 0
 },
 "id": "camera_A8751675_871B_DAAA_41CE_2837615EC70A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.9,
  "pitch": 0
 },
 "id": "camera_AAB492A6_871B_DBB7_41CF_FFB3DC10349F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "class": "ViewerArea",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "minHeight": 50,
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 100,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipFontSize": "1.11vmin",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarBackgroundOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "shadow": false,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 56)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3BB57F2_871B_B9AE_41CE_DF7A113B09A0",
   "pitch": -26.61,
   "yaw": -0.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.57,
   "distance": 100
  }
 ],
 "id": "overlay_A0A3474C_873F_7AFA_41DC_200858BAFBA3",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -26.61,
   "hfov": 13.57
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_88601130_847E_3B15_417C_A450C133B27A, this.camera_A977D379_871B_DA9A_41BC_72600F3F6367); this.mainPlayList.set('selectedIndex', 54)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3BAE7F8_871B_B99A_41C4_D0E907792E23",
   "pitch": -22.14,
   "yaw": -91.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.97,
   "distance": 100
  }
 ],
 "id": "overlay_AE5AE105_873F_B66A_41A9_15154984587D",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -91.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -22.14,
   "hfov": 18.97
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_886F6428_847E_5935_41D9_51E4544FE9E3, this.camera_AA3CB128_871B_D6BB_41CB_6B212558CE27); this.mainPlayList.set('selectedIndex', 36)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B467CD_871B_B9FA_41D9_203F43F8C9DC",
   "pitch": -14.53,
   "yaw": 22.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.19,
   "distance": 100
  }
 ],
 "id": "overlay_9362B730_8708_BAAA_41D1_027A7FE61A87",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 22.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -14.53,
   "hfov": 14.19
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 44)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B7E7CE_871B_B9F6_41C9_80151C245F37",
   "pitch": -14.82,
   "yaw": 163.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.31,
   "distance": 50
  }
 ],
 "id": "overlay_9332077E_870B_DA96_41D6_871816038D74",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 163.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -14.82,
   "hfov": 13.31
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F, this.camera_AAD5823C_871B_DA9A_41BA_94083FFBCF71); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3D2276F_871B_BAB6_41AF_F8F7A2477FBD",
   "pitch": -11,
   "yaw": 71.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.08,
   "distance": 100
  }
 ],
 "id": "overlay_960FF044_84B6_597D_41D3_D148E948CFEE",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 71.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -11,
   "hfov": 10.08
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B, this.camera_AADFA25F_871B_DA96_41AB_0FAC775A057F); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3D2676F_871B_BAB6_41C3_2040DCFAE8F9",
   "pitch": -8.19,
   "yaw": -100.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.56,
   "distance": 100
  }
 ],
 "id": "overlay_960056AE_84B6_590D_41DE_BEF3BB18B487",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -8.19,
   "hfov": 11.56
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_883D3A8C_8472_490D_41DD_CB4005C30366, this.camera_AA5D10BF_871B_D795_41CB_39ED3F3344A1); this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3CF97B4_871B_B9AA_41C1_44D8212EAFE7",
   "pitch": -44.66,
   "yaw": -32.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.55,
   "distance": 50
  }
 ],
 "id": "overlay_B6C13226_8476_393D_41D5_BA17F757A7C6",
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -32.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -44.66,
   "hfov": 14.55
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8848E099_8472_F917_41C0_379F999A0FC6, this.camera_AA4660E2_871B_D7AE_41D0_275574EB2A2E); this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3CF17B6_871B_B996_41E0_A02E9051D484",
   "pitch": -19.99,
   "yaw": 85.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.2,
   "distance": 100
  }
 ],
 "id": "overlay_AB0596CC_8472_590D_41DA_F2EAAB488A19",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -19.99,
   "hfov": 12.2
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E, this.camera_ABE7CED0_871B_CBEA_41C4_A5F3DDBBD922); this.mainPlayList.set('selectedIndex', 46)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B627D3_871B_B9EE_41C7_C11F266E0F47",
   "pitch": -22.31,
   "yaw": -47.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.28,
   "distance": 100
  }
 ],
 "id": "overlay_9EA02535_870F_7EAA_41D8_03AA7423655C",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -47.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -22.31,
   "hfov": 14.28
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_883A6FCD_8476_470C_41C3_0510E10140C8, this.camera_ABFDEEAC_871B_CBBA_4176_BFBD790DAC4C); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B1A7D3_871B_B9EE_41CD_D48E059504EF",
   "pitch": -43.52,
   "yaw": -147.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.85,
   "distance": 50
  }
 ],
 "id": "overlay_9EA7B68D_870F_DA7A_41D2_CC0F291AE23B",
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -147.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -43.52,
   "hfov": 14.85
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C397A1_871B_B9AA_41B1_9531B48FDD27",
   "pitch": -10.87,
   "yaw": -153.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.12,
   "distance": 100
  }
 ],
 "id": "overlay_AC56D7F6_844E_471D_41DB_47CD417C4FE7",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -153.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -10.87,
   "hfov": 9.12
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_88246630_8476_D915_41DE_9DEAF045FE25, this.camera_AA0191B3_871B_D9AE_41DD_76B709171409); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C3E7A2_871B_B9AE_41D0_7463FE6B2BAD",
   "pitch": -10.72,
   "yaw": -93.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.1,
   "distance": 100
  }
 ],
 "id": "overlay_AC59A9F7_844D_CB1C_41C9_5658D9EF32B5",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -93.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -10.72,
   "hfov": 7.1
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C357A2_871B_B9AE_41D3_3DFF31EEF9B0",
   "pitch": -9.75,
   "yaw": 47.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.24,
   "distance": 50
  }
 ],
 "id": "overlay_AC914ACF_8452_490B_41DA_CBDF1BFD85D6",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_1_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -9.75,
   "hfov": 6.24
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_88787FCE_8476_470D_41C0_8954C395F8B1, this.camera_AA6B209D_871B_D79A_41AF_2C8C0B89C3DB); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DA878F_871B_BA76_41D0_1A3FBEFEB988",
   "pitch": -8.71,
   "yaw": -1.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.27,
   "distance": 100
  }
 ],
 "id": "overlay_9F443A4A_84D2_4975_41D7_354650EA88A7",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -8.71,
   "hfov": 8.27
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20, this.camera_AA66B07C_871B_D69A_41DE_D29E8DA6696A); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DAD78F_871B_BA76_41C4_673169E972D8",
   "pitch": -18.62,
   "yaw": -178.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.41,
   "distance": 100
  }
 ],
 "id": "overlay_9F05526A_84DE_3935_41D5_DFC1A3124849",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -178.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -18.62,
   "hfov": 19.41
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_883E4720_8476_C735_41BC_51E952F97596, this.camera_AB864012_871B_D66E_41C3_AB121BF4B4AA); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3CC07AD_871B_B9BA_41C2_FF21F0B04024",
   "pitch": -11.06,
   "yaw": 103.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.85,
   "distance": 100
  }
 ],
 "id": "overlay_AFBBB5C3_8453_DB7B_41BB_3B3839737FCA",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 103.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -11.06,
   "hfov": 7.85
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8F9C6C49_847E_C974_41DE_023912D4E768, this.camera_AB671D16_871B_CE96_41B3_5E2E9245871B); this.mainPlayList.set('selectedIndex', 47)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B277E0_871B_B9AA_41C2_DC5C057A99E4",
   "pitch": -22,
   "yaw": 159.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.78,
   "distance": 100
  }
 ],
 "id": "overlay_98803EE2_871B_4BAE_41A1_70278B74408F",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 159.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -22,
   "hfov": 13.78
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 50)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3BD07E1_871B_B9AA_41C3_9DCE218C6429",
   "pitch": 15.54,
   "yaw": 85.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.95,
   "distance": 50
  }
 ],
 "id": "overlay_98A16B36_8719_4A96_41CF_B688726B27F4",
 "data": {
  "label": "Arrow 02 Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 15.54,
   "hfov": 13.95
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_883E4720_8476_C735_41BC_51E952F97596, this.camera_ACAA9C6A_871B_CEBE_413B_472AB2ADAE28); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3CD17AA_871B_B9BE_41BF_DD9668497F66",
   "pitch": -19.6,
   "yaw": 97.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.99,
   "distance": 100
  }
 ],
 "id": "overlay_AFB77CED_8456_490C_41D5_6DDB6D935CC5",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 97.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -19.6,
   "hfov": 10.99
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8848C141_8476_3B74_41D0_5893DB53C92E, this.camera_AC9D2C8C_871B_CE7A_41D7_72AE9C79FAAE); this.mainPlayList.set('selectedIndex', 45)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3CC87AB_871B_B9BE_41D3_A49873017C21",
   "pitch": 0.43,
   "yaw": -16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.66,
   "distance": 100
  }
 ],
 "id": "overlay_9E3ACD59_8709_4E9A_41D8_D702D3F99EA3",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.43,
   "hfov": 8.66
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 42)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B767CF_871B_B9F6_41D9_F0BC22CD9FD3",
   "pitch": -11.77,
   "yaw": 45.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.02,
   "distance": 100
  }
 ],
 "id": "overlay_911366F7_8707_FB96_41D6_342330FF5FC2",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 45.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -11.77,
   "hfov": 20.02
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B6E7D0_871B_B9EA_41D3_1939970D6DB8",
   "pitch": -10.22,
   "yaw": -161.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.03,
   "distance": 50
  }
 ],
 "id": "overlay_901D567E_8718_FA96_41D5_A27386E8CE48",
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -10.22,
   "hfov": 16.03
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 44)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B647D0_871B_B9EA_41D2_27429526E1C1",
   "pitch": -10.17,
   "yaw": -81.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.33,
   "distance": 100
  }
 ],
 "id": "overlay_90EBA537_871B_BE96_41C3_633A7066860C",
 "data": {
  "label": "Circle Point 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -81.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_1_HS_2_0_0_map.gif",
      "width": 49,
      "height": 16
     }
    ]
   },
   "pitch": -10.17,
   "hfov": 19.33
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F, this.camera_AB686D3A_871B_CE9E_41BA_FD45426DEB57); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3D0F766_871B_BAB6_41D1_EA2FE9AC581F",
   "pitch": -7.82,
   "yaw": -14.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.17,
   "distance": 100
  }
 ],
 "id": "overlay_8BC5CD0E_8456_CB0D_41BF_63E3B4119F10",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -7.82,
   "hfov": 11.17
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3D05767_871B_BAB6_41DE_E91B0482286B",
   "pitch": -8.05,
   "yaw": 171.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.87,
   "distance": 100
  }
 ],
 "id": "overlay_942EBC46_8456_497C_41B2_A9DAE2A6394B",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -8.05,
   "hfov": 7.87
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8805D692_8472_3915_41BD_27A80AB99C46, this.camera_AB327DC7_871B_C9F6_41DE_A92474B59F4D); this.mainPlayList.set('selectedIndex', 52)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B917ED_871B_B9BA_41D8_E70574DF3136",
   "pitch": -34.02,
   "yaw": 112.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.95,
   "distance": 100
  }
 ],
 "id": "overlay_A2B01393_8707_5A6E_41DE_985114EBDE68",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 112.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -34.02,
   "hfov": 16.95
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_88601130_847E_3B15_417C_A450C133B27A, this.camera_AB4B9DA1_871B_C9AA_41DD_5277F7AE4D7E); this.mainPlayList.set('selectedIndex', 54)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B897EE_871B_B9B6_41D2_AC3402E449A1",
   "pitch": -23.11,
   "yaw": 156.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.37,
   "distance": 50
  }
 ],
 "id": "overlay_A2C95528_8707_FEBA_41D3_8ED78E0AE056",
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -23.11,
   "hfov": 16.37
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_88EC96ED_8476_390F_41B9_0761AE1EE571, this.camera_ACA63C44_871B_CEEA_41CB_4557AB4FDF55); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DFC77B_871B_BA9E_4191_F52C27B1C221",
   "pitch": -19.81,
   "yaw": 2.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.2,
   "distance": 100
  }
 ],
 "id": "overlay_91E5842F_84B6_D90C_41C5_95BE4766BD98",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -19.81,
   "hfov": 14.2
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DF177C_871B_BA9A_41D9_9D1EAA0DB0E9",
   "pitch": -27.95,
   "yaw": -101.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.62,
   "distance": 100
  }
 ],
 "id": "overlay_915893B9_84B5_DF14_41CC_C2D64A216389",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -27.95,
   "hfov": 11.62
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_88ECB67A_8476_D914_41C8_A37E095FDE06, this.camera_A9331446_871B_DEF6_41CA_848EA103D2B1); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DF577D_871B_BA9A_41DF_2207F8E4472F",
   "pitch": -15.66,
   "yaw": 81.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.53,
   "distance": 100
  }
 ],
 "id": "overlay_9CA94A57_84B2_C91C_41DD_7DC5144132FC",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -15.66,
   "hfov": 12.53
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DEB77E_871B_BA96_41BD_06604B904B56",
   "pitch": -31.99,
   "yaw": -162.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.37,
   "distance": 50
  }
 ],
 "id": "overlay_9C3BC333_84CE_5F14_41D0_BCB1EBAC9B06",
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -31.99,
   "hfov": 17.37
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DE077F_871B_BA96_41D1_08BD4B5B1CB4",
   "pitch": -33.46,
   "yaw": 5.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.22,
   "distance": 100
  }
 ],
 "id": "overlay_922CE867_84CE_493B_41B6_D7FB8C9FC5B9",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_1_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -33.46,
   "hfov": 11.22
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_883D3A8C_8472_490D_41DD_CB4005C30366, this.camera_AA838358_871B_DA9A_41BE_3C315FEA0537); this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3CDE7AF_871B_B9B6_41B9_16ABC417E74A",
   "pitch": -8.03,
   "yaw": -63.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.73,
   "distance": 50
  }
 ],
 "id": "overlay_AAB8FAEF_8472_490C_41C4_C5C7392DB157",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -63.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -8.03,
   "hfov": 6.73
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F, this.camera_AA9E0336_871B_DA96_41CD_8784626CF632); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3CD57B0_871B_B9AA_41D2_EF531EA96BF7",
   "pitch": -9.29,
   "yaw": 75.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.35,
   "distance": 50
  }
 ],
 "id": "overlay_B5EE76C2_8472_5975_41B4_C9357A4113E1",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 75.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -9.29,
   "hfov": 8.35
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2, this.camera_ACCA9C00_871B_CE6A_41C9_44C64266A7C8); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DCE773_871B_BAAE_41B8_349D9F546794",
   "pitch": -28.87,
   "yaw": -125.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.91,
   "distance": 50
  }
 ],
 "id": "overlay_91AE0D84_84B3_CBFD_41DE_CE30B84ADC16",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -125.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -28.87,
   "hfov": 17.91
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_882E40C1_8476_5974_41C4_8364D29FE78A, this.camera_ACBD5C22_871B_CEAE_41D8_D2816E75DDA1); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DC1779_871B_BA9A_41D2_4DD675175945",
   "pitch": -22.87,
   "yaw": 88.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.12,
   "distance": 100
  }
 ],
 "id": "overlay_91A0CCEC_84B2_C90C_41D0_B960F9011973",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -22.87,
   "hfov": 13.12
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DC777A_871B_BA9E_41B0_32D6D57CC909",
   "pitch": 2.16,
   "yaw": 13.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.46,
   "distance": 50
  }
 ],
 "id": "overlay_907D6878_84B6_C915_41DC_F53CED270231",
 "data": {
  "label": "Arrow 02 Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.16,
   "hfov": 9.46
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443, this.camera_A97B039C_871B_D99A_41D0_9D76F33C3A51); this.mainPlayList.set('selectedIndex', 50)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3BF37EA_871B_B9BE_41D0_8BE5EE2E7DED",
   "pitch": -24.39,
   "yaw": 91.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.63,
   "distance": 100
  }
 ],
 "id": "overlay_A375F53C_8708_BE9A_41C3_C481409276F8",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -24.39,
   "hfov": 18.63
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3, this.camera_AB887036_871B_D696_41D0_EDB5874C4058); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3D97783_871B_BA6E_41C3_F78672AD76C6",
   "pitch": -4.65,
   "yaw": -82.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.68,
   "distance": 100
  }
 ],
 "id": "overlay_9CD5F593_84D5_DB1B_41D0_46541D5F552C",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8874476D_8476_470F_41CC_058745507A31_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -4.65,
   "hfov": 15.68
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_88787FCE_8476_470D_41C0_8954C395F8B1, this.camera_AA7CD059_871B_D69A_41DB_C9AC848D5B16); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3D8C784_871B_BA6A_41BC_F19C60C4A803",
   "pitch": -10.44,
   "yaw": 7.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.93,
   "distance": 100
  }
 ],
 "id": "overlay_9C14175B_84D6_470B_41D6_1DC6F7586430",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8874476D_8476_470F_41CC_058745507A31_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -10.44,
   "hfov": 10.93
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8832ED81_8476_4BF7_41D6_20E66B506D55, this.camera_A878D699_871B_DB9A_41D1_3FF1EF7823AB); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C0E7A0_871B_B9AA_41D4_47A4E0E1091E",
   "pitch": -23.24,
   "yaw": -177.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.8,
   "distance": 100
  }
 ],
 "id": "overlay_AE793ACD_844E_490F_41C1_0D405FDED7EC",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -23.24,
   "hfov": 18.8
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_883F4E16_8476_C91C_41C9_0628B527B1CC, this.camera_A86ED6BB_871B_DB9E_41DF_E408BC09A090); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C037A1_871B_B9AA_41CA_C18505C73458",
   "pitch": -8.58,
   "yaw": 81.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.36,
   "distance": 100
  }
 ],
 "id": "overlay_ACC06153_844F_FB1B_41C7_ED0B8270CDD6",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -8.58,
   "hfov": 10.36
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B487CB_871B_B9FE_41D3_2BC3F172199B",
   "pitch": -9.91,
   "yaw": -130.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.65,
   "distance": 50
  }
 ],
 "id": "overlay_948EC139_8708_D69A_4188_5CC50AAD7B72",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -130.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -9.91,
   "hfov": 12.65
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 40)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B4B7CC_871B_B9FA_41CD_24E8D470266E",
   "pitch": 3.09,
   "yaw": 27.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.39,
   "distance": 100
  }
 ],
 "id": "overlay_9491832A_8709_5ABE_41DF_00E6AC1B770A",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.09,
   "hfov": 5.39
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DD1773_871B_BAAE_41D8_19695817B8DE",
   "pitch": -12.13,
   "yaw": -2.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.41,
   "distance": 100
  }
 ],
 "id": "overlay_908B749C_84BE_390D_41CD_4AFBEF468F2E",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -12.13,
   "hfov": 10.41
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_88EC96ED_8476_390F_41B9_0761AE1EE571, this.camera_AA1C7190_871B_D66A_41D9_CAD2918C032A); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DC8773_871B_BAAE_41A9_6503A9FD5550",
   "pitch": -12.22,
   "yaw": -89.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.88,
   "distance": 100
  }
 ],
 "id": "overlay_91B4DDF4_84BF_CB1D_41DB_D24301EB3E0E",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -12.22,
   "hfov": 10.88
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF, this.camera_A96C93BE_871B_D996_41CA_D4FD9B00FB70); this.mainPlayList.set('selectedIndex', 53)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3BED7EB_871B_B9BE_41DF_8F3EAB565F44",
   "pitch": -16.29,
   "yaw": 146.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.09,
   "distance": 50
  }
 ],
 "id": "overlay_A3684BEE_870B_49B6_41DF_85E26D3D682A",
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 146.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -16.29,
   "hfov": 16.09
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443, this.camera_A95003E0_871B_D9AA_41D9_345409813D78); this.mainPlayList.set('selectedIndex', 50)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3BE67EC_871B_B9BA_41E0_7440DB36A130",
   "pitch": -31.27,
   "yaw": 114.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.73,
   "distance": 100
  }
 ],
 "id": "overlay_AFAC088A_8708_D67E_41CB_558BE00D125F",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 114.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -31.27,
   "hfov": 15.73
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B, this.camera_AB06EE65_871B_CAB5_41A2_A503631A4CF7); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DCF771_871B_BAAA_41CE_6D8470FE18D0",
   "pitch": -15.76,
   "yaw": 174.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 36.22,
   "distance": 100
  }
 ],
 "id": "overlay_A2B82F39_84B2_4717_41D3_A5F6C7D09CC4",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -15.76,
   "hfov": 36.22
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_88787FCE_8476_470D_41C0_8954C395F8B1, this.camera_AB08BE89_871B_CA7A_41C9_D94937C9AB72); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DDB772_871B_BAAE_41DB_2224CEB583DC",
   "pitch": 3.32,
   "yaw": -5.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.16,
   "distance": 50
  }
 ],
 "id": "overlay_ACEB2C4F_84B5_C90B_41C8_29B89518C4FE",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": 3.32,
   "hfov": 13.16
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_886B5CD3_8472_4914_41D3_4C361FDF4483, this.camera_ABA8BFCA_871B_C9FE_417E_4A32957E0809); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C7A796_871B_B996_4180_D5ABD7BDD5A6",
   "pitch": -13.69,
   "yaw": 85.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.84,
   "distance": 100
  }
 ],
 "id": "overlay_A69D3C92_84CE_4915_41D7_625BDD4723DD",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -13.69,
   "hfov": 15.84
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C7079C_871B_B99A_41B3_F9FD8B905013",
   "pitch": -4.23,
   "yaw": -5.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.42,
   "distance": 100
  }
 ],
 "id": "overlay_A45E3FC7_84F2_477B_41B6_E066BEC7B642",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -4.23,
   "hfov": 20.42
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_883C892C_8472_CB0D_41DC_699F9FEC589D, this.camera_AB9D2FEC_871B_C9BA_418C_31607B8DB945); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C7679C_871B_B99A_41C9_F9B4C0DBF0B9",
   "pitch": -6.5,
   "yaw": -152.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 34.52,
   "distance": 100
  }
 ],
 "id": "overlay_A40DA04E_84F3_D906_41CD_3675556000EE",
 "data": {
  "label": "Circle Door 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -152.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.5,
   "hfov": 34.52
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8804DBE3_8472_4F3B_41D6_2686CA381920, this.camera_A9F89513_871B_DE6E_41DF_149553F550D6); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C1B79E_871B_B996_41CC_D4C702EB4E6D",
   "pitch": -15.66,
   "yaw": 5.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.37,
   "distance": 100
  }
 ],
 "id": "overlay_A0D5C7D9_84CE_4714_41CC_D21406B6C9EC",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -15.66,
   "hfov": 13.37
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C1279F_871B_B996_41D5_F83BC894B7EA",
   "pitch": -18.89,
   "yaw": -92.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.43,
   "distance": 100
  }
 ],
 "id": "overlay_A2138F3C_84CE_C70D_41D9_C2B106BB70B6",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -92.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -18.89,
   "hfov": 14.43
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C167A0_871B_B9AA_41D1_B97E224133BE",
   "pitch": -39.83,
   "yaw": -165.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.73,
   "distance": 100
  }
 ],
 "id": "overlay_A7F96542_84CD_DB75_41B2_4D7489D21673",
 "data": {
  "label": "Arrow 02c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_1_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -39.83,
   "hfov": 15.73
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3D6875E_871B_BA96_41C5_BBE020B9EAAC",
   "pitch": -8.64,
   "yaw": 73.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.69,
   "distance": 100
  }
 ],
 "id": "overlay_898DF6FD_8452_790F_41D2_BF2075881A76",
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -8.64,
   "hfov": 13.69
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_88246630_8476_D915_41DE_9DEAF045FE25, this.camera_A9A495E8_871B_D9BA_41C0_ED834BD7CF09); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3D1D764_871B_BAAA_41D2_D1A86F39FBDA",
   "pitch": -15.58,
   "yaw": -99.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.36,
   "distance": 100
  }
 ],
 "id": "overlay_8AB79452_845E_7915_41A6_D69AEF9A654D",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -15.58,
   "hfov": 10.36
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8859E612_8472_D915_41D7_64DEFC78D019, this.camera_ACDFFBBD_871B_C99A_4167_0BE7A02C3A0E); this.mainPlayList.set('selectedIndex', 56)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3BAA7FA_871B_B99E_41D7_96EA05589833",
   "pitch": -5.78,
   "yaw": 43.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.72,
   "distance": 100
  }
 ],
 "id": "overlay_AD05810C_8707_B67A_4197_F4F99E7170A1",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 43.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_886FA4D1_8472_3917_41C3_03F71321A641_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.78,
   "hfov": 8.72
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 39)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3CA77C5_871B_B9EA_41D4_3D12B29003B0",
   "pitch": -9.7,
   "yaw": -93.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.81,
   "distance": 100
  }
 ],
 "id": "overlay_958871C6_8719_D9F6_41AD_F31F77676348",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -93.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -9.7,
   "hfov": 12.81
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80, this.camera_A9F5F4F0_871B_DFAA_41CC_947A63E7EC19); this.mainPlayList.set('selectedIndex', 37)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B507C5_871B_B9EA_41BF_38D49C4A478B",
   "pitch": -11.23,
   "yaw": 90.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.05,
   "distance": 100
  }
 ],
 "id": "overlay_958E22FA_8719_5B9F_41BC_AEABDFF7716D",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -11.23,
   "hfov": 14.05
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC, this.camera_A9DA1580_871B_DE6A_41D9_9856B1F9507C); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3D83785_871B_BA6A_41D7_060B9FF277E3",
   "pitch": -13.97,
   "yaw": -90.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.14,
   "distance": 100
  }
 ],
 "id": "overlay_9F527760_84D6_C734_41D9_EFE35AD34D58",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -13.97,
   "hfov": 13.14
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DB8787_871B_BA76_41DE_F7B00B167B33",
   "pitch": 0.41,
   "yaw": -12.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.8,
   "distance": 50
  }
 ],
 "id": "overlay_98B85CC0_84D6_4975_41A0_CA3BC43E8293",
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": 0.41,
   "hfov": 10.8
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8874476D_8476_470F_41CC_058745507A31, this.camera_A9CFC5A2_871B_D9AE_41C7_6EC31BB1F180); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DBC788_871B_BA7A_41D3_800AA841D261",
   "pitch": -15.49,
   "yaw": 85.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.39,
   "distance": 100
  }
 ],
 "id": "overlay_9DE225B1_84D5_DB17_41DD_0F8D39F048A4",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_1_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -15.49,
   "hfov": 11.39
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8870E405_8476_38FF_41CC_5C20F782D70C, this.camera_A9B305C4_871B_D9EA_41A4_4A6400C4903C); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DB2789_871B_BA7A_41C0_9B85A84777CC",
   "pitch": -35.59,
   "yaw": 18.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.63,
   "distance": 50
  }
 ],
 "id": "overlay_A12F88D1_84B2_C917_417E_CBCAD4BBACEC",
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_1_HS_3_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -35.59,
   "hfov": 16.63
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_886F6428_847E_5935_41D9_51E4544FE9E3, this.camera_AA21114B_871B_D6FE_41D3_9CDD4C93EE0B); this.mainPlayList.set('selectedIndex', 36)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3CA87C3_871B_B9EE_41D7_BAAEE1D77AF2",
   "pitch": -10.61,
   "yaw": 119.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.59,
   "distance": 100
  }
 ],
 "id": "overlay_97E12A4C_8719_4AFA_418F_39EE4A023066",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -10.61,
   "hfov": 13.59
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1, this.camera_AA2B216D_871B_D6BA_41D2_3C29FFAC01D6); this.mainPlayList.set('selectedIndex', 38)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3CAF7C4_871B_B9EA_41D7_7AB1094EB24F",
   "pitch": -16.11,
   "yaw": 1.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.01,
   "distance": 100
  }
 ],
 "id": "overlay_932D9821_871B_56AA_41BC_1C5DB42013E4",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -16.11,
   "hfov": 20.01
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_88505F59_8476_C717_41DA_96163F819358, this.camera_A9A8E60D_871B_DA7A_41D2_30B6ACD00F0E); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DE5780_871B_BA6A_41D6_2220A4B36403",
   "pitch": -18.75,
   "yaw": 149.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.34,
   "distance": 100
  }
 ],
 "id": "overlay_9C8F1E87_84CD_C9FB_41E0_0AF4D8C651D5",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 149.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -18.75,
   "hfov": 16.34
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3, this.camera_AA0AC1D7_871B_D996_41B6_96A145043EEC); this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3CE97B6_871B_B996_41B7_3E1BA1A6C8B2",
   "pitch": -8.25,
   "yaw": 4.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.16,
   "distance": 100
  }
 ],
 "id": "overlay_B025B1AB_8472_5B0B_41C7_12FA7F5C12FD",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -8.25,
   "hfov": 10.16
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5, this.camera_AAFF21FA_871B_D99E_41D8_9939CF0C039D); this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3CE27BD_871B_B99A_41AE_9B5E45A3A94E",
   "pitch": -25.1,
   "yaw": -171.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.47,
   "distance": 100
  }
 ],
 "id": "overlay_B462278C_8473_C70D_41D7_D5C772B2E50C",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -25.1,
   "hfov": 17.47
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8803333F_8473_DF0B_41DC_94AFD6B10325, this.camera_AB2B0E18_871B_CA9A_41C7_E49911495E9D); this.mainPlayList.set('selectedIndex', 51)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3BCA7E2_871B_B9AE_41C6_48C5D295C7EA",
   "pitch": -16.61,
   "yaw": -91.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.14,
   "distance": 100
  }
 ],
 "id": "overlay_A78292FF_8718_DB95_41E0_0BA09D93DC27",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -91.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -16.61,
   "hfov": 13.14
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8805D692_8472_3915_41BD_27A80AB99C46, this.camera_AB1D8E42_871B_CAEE_41D8_C76402C73CE3); this.mainPlayList.set('selectedIndex', 52)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3BC27E3_871B_B9AE_41D9_D017E3E8DB09",
   "pitch": 2.92,
   "yaw": 5.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.8,
   "distance": 50
  }
 ],
 "id": "overlay_A7003A78_871F_4A9A_41E0_5209CC32F745",
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": 2.92,
   "hfov": 15.8
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8F9C6C49_847E_C974_41DE_023912D4E768, this.camera_AB26ADEE_871B_C9B6_41C9_A8B211F282A8); this.mainPlayList.set('selectedIndex', 47)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3BFB7E9_871B_B9BA_41CA_6E7BA16D6F85",
   "pitch": -21.97,
   "yaw": -23.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.06,
   "distance": 50
  }
 ],
 "id": "overlay_A726E9F8_871F_499A_41D1_5CB1983E9D4D",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_1_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -21.97,
   "hfov": 12.06
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_885A0141_8472_7B77_41C1_AB3E37F3800E, this.camera_AAC0E280_871B_DA6A_4195_BA791A1F737C); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C5F793_871B_BA6E_4190_70AA7710B9AE",
   "pitch": -11.53,
   "yaw": -83.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.59,
   "distance": 100
  }
 ],
 "id": "overlay_A60F24AD_84CD_D90F_41DE_29943941B42E",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -11.53,
   "hfov": 11.59
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C56794_871B_BA6A_4173_C60C6DA85815",
   "pitch": -38.24,
   "yaw": 5.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.08,
   "distance": 100
  }
 ],
 "id": "overlay_9B85671E_84CE_C70D_414E_A530BE6E96F4",
 "data": {
  "label": "Arrow 02c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -38.24,
   "hfov": 16.08
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_887181AA_8472_DB35_41D4_494293D3522F, this.camera_AAB492A6_871B_DBB7_41CF_FFB3DC10349F); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C4D794_871B_BA6A_41D8_A42425C9AE8C",
   "pitch": -14,
   "yaw": 92.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.35,
   "distance": 100
  }
 ],
 "id": "overlay_9BC73EF6_84CE_491D_417E_4B1981682043",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_1_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -14,
   "hfov": 13.35
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_886B5CD3_8472_4914_41D3_4C361FDF4483, this.camera_ABBDBF7B_871B_CA9E_41AD_F4486A5499B5); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DA3792_871B_BA6E_41CF_0CB5CBCC763F",
   "pitch": -12.25,
   "yaw": 1.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.88,
   "distance": 100
  }
 ],
 "id": "overlay_9A83079C_84D2_470C_41D2_1060DBCB3D66",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -12.25,
   "hfov": 12.88
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_88285657_8472_391B_41DB_CE6761F37A0B, this.camera_ABA6DFA4_871B_C9AA_41CF_ABD6AEE81C34); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C5A793_871B_BA6E_41D3_6C6A4DD4C8A5",
   "pitch": -19.15,
   "yaw": 178.31,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.76,
   "distance": 100
  }
 ],
 "id": "overlay_9AB49596_84D2_3B1D_4192_13BF254D68B8",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -19.15,
   "hfov": 12.76
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7, this.camera_A9273467_871B_DEB6_41D8_9F1E2036B47C); this.mainPlayList.set('selectedIndex', 48)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B0A7DB_871B_B99E_41DF_C3F9A3AD94A7",
   "pitch": -19.32,
   "yaw": 4.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.3,
   "distance": 100
  }
 ],
 "id": "overlay_9BDACED7_8708_CB96_41DE_A1D1EEE8AF1A",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -19.32,
   "hfov": 19.3
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 44)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B027DC_871B_B99A_41D3_B61C504E4FB2",
   "pitch": -2.44,
   "yaw": -94.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.83,
   "distance": 100
  }
 ],
 "id": "overlay_9BB23334_870B_5AAA_41D2_A815D08B36C5",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.44,
   "hfov": 11.83
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_88447E27_8472_493C_41BE_0FC6BE043DF9, this.camera_A91C14AC_871B_DFBA_41D2_9B8AD756B5AC); this.mainPlayList.set('selectedIndex', 49)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B3B7DC_871B_B99A_41E0_1F2D007AB5DA",
   "pitch": -12.49,
   "yaw": 69.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.05,
   "distance": 100
  }
 ],
 "id": "overlay_9A22FFAA_8709_C9BF_41CE_AE35FB711623",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_1_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -12.49,
   "hfov": 7.05
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443, this.camera_A92B6489_871B_DE7A_41D2_6F70DF7D5E06); this.mainPlayList.set('selectedIndex', 50)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B357DD_871B_B99A_41DD_15661AA2E066",
   "pitch": -2.37,
   "yaw": 103.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.21,
   "distance": 50
  }
 ],
 "id": "overlay_9A5BE196_8709_5997_41E0_C7D857B5E611",
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 103.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_1_HS_3_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -2.37,
   "hfov": 7.21
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED, this.camera_A981F653_871B_DAED_41CD_AC0111EC3FE4); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DDD770_871B_BAAA_4188_4CBF5BA2A1E1",
   "pitch": -10.69,
   "yaw": 174.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.58,
   "distance": 100
  }
 ],
 "id": "overlay_94496ADC_844F_C90D_41D5_C67422F03575",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -10.69,
   "hfov": 14.58
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DD2770_871B_BAAA_41DA_127EF33272A3",
   "pitch": -13.56,
   "yaw": -4.83,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.92,
   "distance": 100
  }
 ],
 "id": "overlay_9760ECF5_844E_C91F_41CC_6C8B3032267C",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -13.56,
   "hfov": 14.92
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DD7771_871B_BAAA_4199_CEA3238F6F0F",
   "pitch": -12.53,
   "yaw": -75.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.62,
   "distance": 100
  }
 ],
 "id": "overlay_A1913D5A_84BE_4B0E_41A6_CF90FA4AADDC",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_1_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -12.53,
   "hfov": 8.62
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8870E405_8476_38FF_41CC_5C20F782D70C, this.camera_A8751675_871B_DAAA_41CE_2837615EC70A); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DC9771_871B_BAAA_41DC_E9F0C5853FBE",
   "pitch": -8.72,
   "yaw": 116.83,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.54,
   "distance": 50
  }
 ],
 "id": "overlay_A1F65C90_84BE_C915_41C7_31B149A85AAD",
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 116.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_1_HS_3_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -8.72,
   "hfov": 6.54
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B727D2_871B_B9EE_41A8_73FD162EBF9B",
   "pitch": 5.11,
   "yaw": -15.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.39,
   "distance": 100
  }
 ],
 "id": "overlay_90F82219_8707_5A9A_4153_F30E5FB68A04",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 5.11,
   "hfov": 6.39
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B687D2_871B_B9EE_41D2_A97774704977",
   "pitch": -13.65,
   "yaw": 71.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.2,
   "distance": 100
  }
 ],
 "id": "overlay_9F13739D_8778_D99A_41B5_73E24D9161DD",
 "data": {
  "label": "Circle Point 03b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 71.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_1_HS_1_0_0_map.gif",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -13.65,
   "hfov": 11.2
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B6D7D2_871B_B9EE_41C4_5F8B5F7948DD",
   "pitch": -9.95,
   "yaw": 159.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.37,
   "distance": 50
  }
 ],
 "id": "overlay_9FB313A5_8779_F9AA_41DB_DB20CB16A68F",
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 159.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_1_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -9.95,
   "hfov": 8.37
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_88422490_8472_7915_41C6_A2751458AF5A, this.camera_AABE92CD_871B_DBFA_41C9_5CBDB565BE3C); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C6E79D_871B_B99A_41B1_561BB4FAC79B",
   "pitch": -10.18,
   "yaw": 10.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.95,
   "distance": 100
  }
 ],
 "id": "overlay_A5369243_84F5_F97B_41D5_414D22F8B4CF",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 10.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -10.18,
   "hfov": 10.95
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C6379E_871B_B996_41C2_385F1722A67A",
   "pitch": -14.78,
   "yaw": -166.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.97,
   "distance": 100
  }
 ],
 "id": "overlay_A45D4E10_84F6_4915_419B_DDF261227FE6",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -14.78,
   "hfov": 9.97
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_885492F2_847D_D914_41CE_107B8AA1E942, this.camera_AB7D6CF2_871B_CFAF_41D9_79AADA4D24FD); this.mainPlayList.set('selectedIndex', 42)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C8A7C0_871B_B9EA_41DD_E10CAEC9081B",
   "pitch": -9.33,
   "yaw": -132.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.01,
   "distance": 100
  }
 ],
 "id": "overlay_8A94BE5E_8708_CA96_41A5_2DF3DBF96203",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -132.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -9.33,
   "hfov": 13.01
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80, this.camera_AC881CCF_871B_CFF6_41C5_A7AE593AD02B); this.mainPlayList.set('selectedIndex', 37)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C817C1_871B_B9EA_41D2_8EB88995C9E1",
   "pitch": -11.24,
   "yaw": 2.83,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.54,
   "distance": 100
  }
 ],
 "id": "overlay_8AB4FC79_8707_4E9A_41C6_C4C2A9CE6455",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -11.24,
   "hfov": 20.54
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F, this.camera_AC866CAE_871B_CFB6_41A7_3C844FF76813); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3CBA7C2_871B_B9EE_41DB_8DB286FF4556",
   "pitch": -19.76,
   "yaw": 158.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.02,
   "distance": 50
  }
 ],
 "id": "overlay_882983FA_8707_F99E_41DF_C1FB2527DE64",
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_1_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -19.76,
   "hfov": 17.02
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 41)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3CBD7C2_871B_B9EE_41D6_ED5CD02ABE20",
   "pitch": -5.39,
   "yaw": 55.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.26,
   "distance": 100
  }
 ],
 "id": "overlay_9604AC31_871F_4EAA_41DF_112ECBDF6510",
 "data": {
  "label": "Circle Point 03b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 55.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_1_HS_3_0_0_map.gif",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -5.39,
   "hfov": 11.26
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_887181AA_8472_DB35_41D4_494293D3522F, this.camera_A8438700_871B_DA6A_41DE_5FEFCAD73680); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C43795_871B_BA6A_41D0_2FFC7EE985A1",
   "pitch": -1.3,
   "yaw": 70.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.13,
   "distance": 100
  }
 ],
 "id": "overlay_A6CEC1BA_84D2_5B15_41DE_7BBDB590E420",
 "data": {
  "label": "Circle Door 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 70.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.3,
   "hfov": 6.13
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3D15765_871B_BAAA_41DE_030FC4A89189",
   "pitch": -10.14,
   "yaw": -1.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.88,
   "distance": 100
  }
 ],
 "id": "overlay_9479FFFF_8455_C70B_41D1_52D2CD570B12",
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -10.14,
   "hfov": 10.88
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3D0A766_871B_BAB6_41BC_CBAAAF8386D7",
   "pitch": -13.17,
   "yaw": -154.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.03,
   "distance": 50
  }
 ],
 "id": "overlay_8AABFBAD_8456_CF0F_41D6_C38FEB0708AC",
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -154.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -13.17,
   "hfov": 13.03
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8848C141_8476_3B74_41D0_5893DB53C92E, this.camera_AA4A8105_871B_D66A_41B9_7951CD0A8B07); this.mainPlayList.set('selectedIndex', 45)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B107DA_871B_B99E_41AC_DF317B839E36",
   "pitch": -13.61,
   "yaw": 0.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.57,
   "distance": 50
  }
 ],
 "id": "overlay_9CF5C96E_8709_B6B6_41DB_4E89CC34BBFD",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -13.61,
   "hfov": 12.57
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20, this.camera_ACE09B75_871B_CAAA_4191_A30135232481); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DA8791_871B_BA6A_41D7_57AD03574A56",
   "pitch": -39.11,
   "yaw": -7.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.35,
   "distance": 100
  }
 ],
 "id": "overlay_A4AFF2D4_84D6_591D_41D0_1311A5C1C41D",
 "data": {
  "label": "Arrow 02c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -39.11,
   "hfov": 17.35
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_885A0141_8472_7B77_41C1_AB3E37F3800E, this.camera_ACEAFB99_871B_C99A_41DA_4A7686DD6193); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DAD792_871B_BA6E_41C6_A843A285B200",
   "pitch": -9.32,
   "yaw": 90.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.39,
   "distance": 100
  }
 ],
 "id": "overlay_9941E950_84D5_CB15_41D3_3A79EE527F7B",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -9.32,
   "hfov": 14.39
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_886FA4D1_8472_3917_41C3_03F71321A641, this.camera_AAE1221C_871B_DA9A_41D1_D4FBFFFDD210); this.mainPlayList.set('selectedIndex', 57)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3BB07F8_871B_B99B_41B7_3EAF9E7ED5DA",
   "pitch": 1.97,
   "yaw": -22.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.16,
   "distance": 50
  }
 ],
 "id": "overlay_AFA8AC93_8738_CE6E_41D0_3A181E1CC14E",
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -22.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8859E612_8472_D915_41D7_64DEFC78D019_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": 1.97,
   "hfov": 17.16
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5, this.camera_AB473D7E_871B_CE96_41D8_F37069CDDC1F); this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3CCC7B1_871B_B9AA_41CE_92A278125404",
   "pitch": 3.35,
   "yaw": 11.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.25,
   "distance": 50
  }
 ],
 "id": "overlay_B726266B_8476_D934_41E0_21D606AEF8AF",
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": 3.35,
   "hfov": 17.25
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8844A3F0_8472_5F15_41D1_47E97F18622B, this.camera_AB5D6D5D_871B_CE9A_41C7_9DFDAF98ACD9); this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3CC27B3_871B_B9AE_4194_6BF4508CDCA9",
   "pitch": -23.24,
   "yaw": 101.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.54,
   "distance": 50
  }
 ],
 "id": "overlay_A94C0396_8477_DF1D_41D2_83205F2B8C34",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 101.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -23.24,
   "hfov": 13.54
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_88277E22_8472_493E_41D2_EBE9939F983D, this.camera_A9D6A55D_871B_DE9A_41E0_7C7E6DC6FB7D); this.mainPlayList.set('selectedIndex', 55)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B827F0_871B_B9AA_41D9_88CC4762A8CF",
   "pitch": -15.37,
   "yaw": 76.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.43,
   "distance": 100
  }
 ],
 "id": "overlay_A08BC21C_8738_BA9A_41D7_FCA9F2ADF772",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -15.37,
   "hfov": 14.43
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF, this.camera_A9E2F53A_871B_DE9E_4171_0EDEC050CA19); this.mainPlayList.set('selectedIndex', 53)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3BBC7F1_871B_B9AA_41DD_B4E0D86B5B75",
   "pitch": -28.94,
   "yaw": 174.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 28.56,
   "distance": 100
  }
 ],
 "id": "overlay_A0191F51_8739_CAEA_41B0_AE3219190D0F",
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -28.94,
   "hfov": 28.56
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5, this.camera_ABDD5F15_871B_CA6A_41D1_F38FD979EA0A); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3D38767_871B_BAB6_41C6_18EDF5C7E236",
   "pitch": -11.04,
   "yaw": 109.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.1,
   "distance": 100
  }
 ],
 "id": "overlay_950067AC_8453_C70D_419A_71430526CC1A",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 109.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -11.04,
   "hfov": 12.1
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3D3C76D_871B_BABA_41C7_0B15CDE44241",
   "pitch": -9.25,
   "yaw": -85.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.57,
   "distance": 50
  }
 ],
 "id": "overlay_9017D3A5_8452_5F3F_41B5_D67395327984",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -9.25,
   "hfov": 9.57
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8844A3F0_8472_5F15_41D1_47E97F18622B, this.camera_ABE81EF2_871B_CBAF_41DF_B63668E8DC21); this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3D3376D_871B_BABA_41DB_9E5EB6513995",
   "pitch": -3.62,
   "yaw": 3.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.52,
   "distance": 100
  }
 ],
 "id": "overlay_9460C89D_844E_490F_4193_5D8B8F5CB3D4",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_1_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -3.62,
   "hfov": 5.52
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_886F6428_847E_5935_41D9_51E4544FE9E3, this.camera_ABC71F37_871B_CA96_41D6_C5D7E866D506); this.mainPlayList.set('selectedIndex', 36)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3D2A76E_871B_BAB6_41DF_DB278E4912AA",
   "pitch": -3.87,
   "yaw": -5.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.97,
   "distance": 50
  }
 ],
 "id": "overlay_9507D796_844E_C71D_41BC_E3C3E834D148",
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_1_HS_3_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -3.87,
   "hfov": 6.97
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8874476D_8476_470F_41CC_058745507A31, this.camera_ACC67BDF_871B_C996_41DD_F2B5F5EA83D9); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3D9B781_871B_BA6A_41C7_85A423E95AA9",
   "pitch": -15.78,
   "yaw": 9.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.87,
   "distance": 100
  }
 ],
 "id": "overlay_9C3DDB8F_84D2_4F0B_41D6_C03F30407A7C",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -15.78,
   "hfov": 13.87
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3D92782_871B_BA6E_41B1_459DA14437A6",
   "pitch": -18.14,
   "yaw": -167.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.23,
   "distance": 100
  }
 ],
 "id": "overlay_9C40F8D7_84D3_C91B_41CD_BDBD01E86AB1",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -167.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -18.14,
   "hfov": 11.23
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC, this.camera_A95A6401_871B_DE6D_41E0_62E96D94401E); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3DA3790_871B_BA6A_41D2_7F490372FDF3",
   "pitch": -10.71,
   "yaw": 98.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.92,
   "distance": 100
  }
 ],
 "id": "overlay_98FB35F7_84DF_DB1B_41D9_8DBC0BF77DAA",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 98.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -10.71,
   "hfov": 10.92
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_88285657_8472_391B_41DB_CE6761F37A0B, this.camera_A9499423_871B_DEAD_41DA_8AFB38FC9606); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C5A790_871B_BA6A_41D4_710E5EED6CC5",
   "pitch": 1.61,
   "yaw": 19.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.2,
   "distance": 50
  }
 ],
 "id": "overlay_9F9E572B_84DE_C70B_41DC_4A255A0FE75C",
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 19.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": 1.61,
   "hfov": 13.2
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C2C7A3_871B_B9AE_419C_35696B7406B5",
   "pitch": -20.41,
   "yaw": 175.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.59,
   "distance": 50
  }
 ],
 "id": "overlay_B4281D7F_8452_CB0C_41DD_BF7A8DA8992D",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -20.41,
   "hfov": 9.59
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18, this.camera_AA95C314_871B_DA6A_41B0_EE1504109A0C); this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C217A8_871B_B9BA_41C4_ED295174FB95",
   "pitch": -9.74,
   "yaw": 14.78,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.18,
   "distance": 100
  }
 ],
 "id": "overlay_A9151F8F_8455_C70C_4187_5378E357A060",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -9.74,
   "hfov": 7.18
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_883A6FCD_8476_470C_41C3_0510E10140C8, this.camera_AAA3D2F1_871B_DBAD_41CF_9B2B7E609056); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3CD97A9_871B_B9BA_41BE_47959E939E88",
   "pitch": -17.67,
   "yaw": 1.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.39,
   "distance": 50
  }
 ],
 "id": "overlay_AC3F59CB_8456_4B74_41CC_20F1657B0B34",
 "data": {
  "label": "Arrow 02a Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_1_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -17.67,
   "hfov": 7.39
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8F9C6C49_847E_C974_41DE_023912D4E768, this.camera_A90054CF_871B_DFF6_41C3_8F3D2B81DB23); this.mainPlayList.set('selectedIndex', 47)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3B2E7DF_871B_B996_41CD_0C076F224582",
   "pitch": -29.05,
   "yaw": 172.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.88,
   "distance": 100
  }
 ],
 "id": "overlay_9877C36A_8719_5ABE_41BE_9394CEAB73CA",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -29.05,
   "hfov": 17.88
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8848E099_8472_F917_41C0_379F999A0FC6, this.camera_A85256DE_871B_DB96_41D6_0BD0D634A269); this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C9B7BE_871B_B996_41A5_BF0A24546900",
   "pitch": -16.72,
   "yaw": -78.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.61,
   "distance": 100
  }
 ],
 "id": "overlay_B5B2ECAB_847D_C90B_41C7_3F7D92EBA82C",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -78.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -16.72,
   "hfov": 13.61
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C907BF_871B_B996_41DE_585C2DB5A319",
   "pitch": -40.84,
   "yaw": 21.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.6,
   "distance": 50
  }
 ],
 "id": "overlay_B1E8ED5C_847E_CB0C_41DA_91ACAE1D7CFE",
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 21.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -40.84,
   "hfov": 8.6
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3BB57F2_871B_B9AE_41CE_DF7A113B09A0",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88277E22_8472_493E_41D2_EBE9939F983D_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3BAE7F8_871B_B99A_41C4_D0E907792E23",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B467CD_871B_B9FA_41D9_203F43F8C9DC",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_885492F2_847D_D914_41CE_107B8AA1E942_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B7E7CE_871B_B9F6_41C9_80151C245F37",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3D2276F_871B_BAB6_41AF_F8F7A2477FBD",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8868E15C_8472_3B0D_41D3_D00B30A04DED_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3D2676F_871B_BAB6_41C3_2040DCFAE8F9",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3CF97B4_871B_B9AA_41C1_44D8212EAFE7",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_886F6A7F_8472_C90B_41C5_EC10CE1482F5_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3CF17B6_871B_B996_41E0_A02E9051D484",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B627D3_871B_B9EE_41C7_C11F266E0F47",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8848C141_8476_3B74_41D0_5893DB53C92E_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B1A7D3_871B_B9EE_41CD_D48E059504EF",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C397A1_871B_B9AA_41B1_9531B48FDD27",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C3E7A2_871B_B9AE_41D0_7463FE6B2BAD",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_883F4E16_8476_C91C_41C9_0628B527B1CC_1_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C357A2_871B_B9AE_41D3_3DFF31EEF9B0",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DA878F_871B_BA76_41D0_1A3FBEFEB988",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_885A98AE_8475_C90C_41CA_844EF9D9E8FC_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DAD78F_871B_BA76_41C4_673169E972D8",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_884D77A4_8475_C73D_41D6_1D305C8F3B18_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3CC07AD_871B_B9BA_41C2_FF21F0B04024",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B277E0_871B_B9AA_41C2_DC5C057A99E4",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88447E27_8472_493C_41BE_0FC6BE043DF9_1_HS_1_0.png",
   "width": 380,
   "height": 570
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3BD07E1_871B_B9AA_41C3_9DCE218C6429",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3CD17AA_871B_B9BE_41BF_DD9668497F66",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_883A6FCD_8476_470C_41C3_0510E10140C8_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3CC87AB_871B_B9BE_41D3_A49873017C21",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B767CF_871B_B9F6_41D9_F0BC22CD9FD3",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B6E7D0_871B_B9EA_41D3_1939970D6DB8",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88625FE3_847D_C734_41D9_1B617B660EDC_1_HS_2_0.png",
   "width": 800,
   "height": 390
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B647D0_871B_B9EA_41D2_27429526E1C1",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3D0F766_871B_BAB6_41D1_EA2FE9AC581F",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_886F6E6A_8476_4935_41D9_3959FC73DDD5_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3D05767_871B_BAB6_41DE_E91B0482286B",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B917ED_871B_B9BA_41D8_E70574DF3136",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_885D0DD9_8473_CB17_41D7_5D363BB727CF_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B897EE_871B_B9B6_41D2_AC3402E449A1",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DFC77B_871B_BA9E_4191_F52C27B1C221",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_882E40C1_8476_5974_41C4_8364D29FE78A_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DF177C_871B_BA9A_41D9_9D1EAA0DB0E9",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DF577D_871B_BA9A_41DF_2207F8E4472F",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DEB77E_871B_BA96_41BD_06604B904B56",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88505F59_8476_C717_41DA_96163F819358_1_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DE077F_871B_BA96_41D1_08BD4B5B1CB4",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3CDE7AF_871B_B9B6_41B9_16ABC417E74A",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8844A3F0_8472_5F15_41D1_47E97F18622B_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3CD57B0_871B_B9AA_41D2_EF531EA96BF7",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DCE773_871B_BAAE_41B8_349D9F546794",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DC1779_871B_BA9A_41D2_4DD675175945",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88EC96ED_8476_390F_41B9_0761AE1EE571_1_HS_2_0.png",
   "width": 380,
   "height": 570
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DC777A_871B_BA9E_41B0_32D6D57CC909",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8803333F_8473_DF0B_41DC_94AFD6B10325_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3BF37EA_871B_B9BE_41D0_8BE5EE2E7DED",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8874476D_8476_470F_41CC_058745507A31_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3D97783_871B_BA6E_41C3_F78672AD76C6",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8874476D_8476_470F_41CC_058745507A31_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3D8C784_871B_BA6A_41BC_F19C60C4A803",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C0E7A0_871B_B9AA_41D4_47A4E0E1091E",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88246630_8476_D915_41DE_9DEAF045FE25_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C037A1_871B_B9AA_41CA_C18505C73458",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B487CB_871B_B9FE_41D3_2BC3F172199B",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8863F014_847E_791D_41D6_055757B74CAB_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B4B7CC_871B_B9FA_41CD_24E8D470266E",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DD1773_871B_BAAE_41D8_19695817B8DE",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8840BA2A_8476_4935_41CF_897D9F9B9FF2_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DC8773_871B_BAAE_41A9_6503A9FD5550",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3BED7EB_871B_B9BE_41DF_8F3EAB565F44",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8805D692_8472_3915_41BD_27A80AB99C46_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3BE67EC_871B_B9BA_41E0_7440DB36A130",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DCF771_871B_BAAA_41CE_6D8470FE18D0",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8870E405_8476_38FF_41CC_5C20F782D70C_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DDB772_871B_BAAE_41DB_2224CEB583DC",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C7A796_871B_B996_4180_D5ABD7BDD5A6",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C7079C_871B_B99A_41B3_F9FD8B905013",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_887181AA_8472_DB35_41D4_494293D3522F_1_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C7679C_871B_B99A_41C9_F9B4C0DBF0B9",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C1B79E_871B_B996_41CC_D4C702EB4E6D",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C1279F_871B_B996_41D5_F83BC894B7EA",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88422490_8472_7915_41C6_A2751458AF5A_1_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C167A0_871B_B9AA_41D1_B97E224133BE",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3D6875E_871B_BA96_41C5_BBE020B9EAAC",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8832ED81_8476_4BF7_41D6_20E66B506D55_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3D1D764_871B_BAAA_41D2_D1A86F39FBDA",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_886FA4D1_8472_3917_41C3_03F71321A641_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3BAA7FA_871B_B99E_41D7_96EA05589833",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3CA77C5_871B_B9EA_41D4_3D12B29003B0",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_884AFFAC_847D_C70D_41DC_22BE06D617F1_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B507C5_871B_B9EA_41BF_38D49C4A478B",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3D83785_871B_BA6A_41D7_060B9FF277E3",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DB8787_871B_BA76_41DE_F7B00B167B33",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_1_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DBC788_871B_BA7A_41D3_800AA841D261",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88787FCE_8476_470D_41C0_8954C395F8B1_1_HS_3_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DB2789_871B_BA7A_41C0_9B85A84777CC",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3CA87C3_871B_B9EE_41D7_BAAEE1D77AF2",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8860506C_847E_590D_41D8_C0D5AC2C6C80_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3CAF7C4_871B_B9EA_41D7_7AB1094EB24F",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88ECB67A_8476_D914_41C8_A37E095FDE06_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DE5780_871B_BA6A_41D6_2220A4B36403",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3CE97B6_871B_B996_41B7_3E1BA1A6C8B2",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8848E099_8472_F917_41C0_379F999A0FC6_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3CE27BD_871B_B99A_41AE_9B5E45A3A94E",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3BCA7E2_871B_B9AE_41C6_48C5D295C7EA",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3BC27E3_871B_B9AE_41D9_D017E3E8DB09",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8876EAA8_847E_C934_41D3_1A6FF0A80443_1_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3BFB7E9_871B_B9BA_41CA_6E7BA16D6F85",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C5F793_871B_BA6E_4190_70AA7710B9AE",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C56794_871B_BA6A_4173_C60C6DA85815",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_886B5CD3_8472_4914_41D3_4C361FDF4483_1_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C4D794_871B_BA6A_41D8_A42425C9AE8C",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DA3792_871B_BA6E_41CF_0CB5CBCC763F",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_885A0141_8472_7B77_41C1_AB3E37F3800E_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C5A793_871B_BA6E_41D3_6C6A4DD4C8A5",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B0A7DB_871B_B99E_41DF_C3F9A3AD94A7",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B027DC_871B_B99A_41D3_B61C504E4FB2",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_1_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B3B7DC_871B_B99A_41E0_1F2D007AB5DA",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F9C6C49_847E_C974_41DE_023912D4E768_1_HS_3_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B357DD_871B_B99A_41DD_15661AA2E066",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DDD770_871B_BAAA_4188_4CBF5BA2A1E1",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DD2770_871B_BAAA_41DA_127EF33272A3",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_1_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DD7771_871B_BAAA_4199_CEA3238F6F0F",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88B9BDB8_8477_CB15_41CE_E9E23208148B_1_HS_3_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DC9771_871B_BAAA_41DC_E9F0C5853FBE",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B727D2_871B_B9EE_41A8_73FD162EBF9B",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_1_HS_1_0.png",
   "width": 800,
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B687D2_871B_B9EE_41D2_A97774704977",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8869E06A_847D_F935_41BF_4A47A84840BB_1_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B6D7D2_871B_B9EE_41C4_5F8B5F7948DD",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C6E79D_871B_B99A_41B1_561BB4FAC79B",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8804DBE3_8472_4F3B_41D6_2686CA381920_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C6379E_871B_B996_41C2_385F1722A67A",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C8A7C0_871B_B9EA_41DD_E10CAEC9081B",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C817C1_871B_B9EA_41D2_8EB88995C9E1",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_1_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3CBA7C2_871B_B9EE_41DB_8DB286FF4556",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_886F6428_847E_5935_41D9_51E4544FE9E3_1_HS_3_0.png",
   "width": 800,
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3CBD7C2_871B_B9EE_41D6_ED5CD02ABE20",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_883C892C_8472_CB0D_41DC_699F9FEC589D_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C43795_871B_BA6A_41D0_2FFC7EE985A1",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3D15765_871B_BAAA_41DE_030FC4A89189",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_884DC575_8476_7B1F_41DF_317D5659BBF5_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3D0A766_871B_BAB6_41BC_CBAAAF8386D7",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8844A9E3_8476_4B34_41C6_A84B6FCBAE8E_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B107DA_871B_B99E_41AC_DF317B839E36",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DA8791_871B_BA6A_41D7_57AD03574A56",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88285657_8472_391B_41DB_CE6761F37A0B_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DAD792_871B_BA6E_41C6_A843A285B200",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8859E612_8472_D915_41D7_64DEFC78D019_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3BB07F8_871B_B99B_41B7_3EAF9E7ED5DA",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3CCC7B1_871B_B9AA_41CE_92A278125404",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_883D3A8C_8472_490D_41DD_CB4005C30366_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3CC27B3_871B_B9AE_4194_6BF4508CDCA9",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B827F0_871B_B9AA_41D9_88CC4762A8CF",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88601130_847E_3B15_417C_A450C133B27A_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3BBC7F1_871B_B9AA_41DD_B4E0D86B5B75",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3D38767_871B_BAB6_41C6_18EDF5C7E236",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3D3C76D_871B_BABA_41C7_0B15CDE44241",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_1_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3D3376D_871B_BABA_41DB_9E5EB6513995",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_884555FB_8477_DB0A_41DD_207DEF2ACE2F_1_HS_3_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3D2A76E_871B_BAB6_41DF_DB278E4912AA",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3D9B781_871B_BA6A_41C7_85A423E95AA9",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8839DF9C_8476_470D_41DC_12E954AAD7F3_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3D92782_871B_BA6E_41B1_459DA14437A6",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3DA3790_871B_BA6A_41D2_7F490372FDF3",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8854BEE5_8475_C93F_41DE_E70CB3D6CE20_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C5A790_871B_BA6A_41D4_710E5EED6CC5",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C2C7A3_871B_B9AE_419C_35696B7406B5",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C217A8_871B_B9BA_41C4_ED295174FB95",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_883E4720_8476_C735_41BC_51E952F97596_1_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3CD97A9_871B_B9BA_41BE_47959E939E88",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8854E406_8472_58FD_41D2_DD5D2197A5C7_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3B2E7DF_871B_B996_41CD_0C076F224582",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C9B7BE_871B_B996_41A5_BF0A24546900",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88321A5C_8472_C90C_41A0_E71DB90F7EF3_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B3C907BF_871B_B996_41DE_585C2DB5A319",
 "frameDuration": 41
}],
 "verticalAlign": "top",
 "paddingRight": 0,
 "borderSize": 0,
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "vrPolyfillScale": 0.5,
 "gap": 10,
 "scrollBarMargin": 2,
 "mouseWheelEnabled": true,
 "scripts": {
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getKey": function(key){  return window[key]; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "existsKey": function(key){  return key in window; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "registerKey": function(key, value){  window[key] = value; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "unregisterKey": function(key){  delete window[key]; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "shadow": false,
 "data": {
  "name": "Player713"
 },
 "scrollBarOpacity": 0.5,
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
