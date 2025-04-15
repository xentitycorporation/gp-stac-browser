module.exports = {
    catalogUrl: '#PUBLIC_URL#/catalog.json',
    catalogTitle: "GeoPlatform STAC",
    allowExternalAccess: true, // Must be true if catalogUrl is not given
    allowedDomains: [],
    whitelistedExternalCatalogs: [
        "https://gp-sit-us-east-1-public-configs.s3.amazonaws.com/stac/national_map/catalog.json",
        "https://gp-sit-us-east-1-public-configs.s3.amazonaws.com/stac/test_census_tiger/catalog.json",
        "https://landsat-stac.s3.amazonaws.com/catalog.json",
        "https://franklin.nasa-hsi.azavea.com/",
        "https://cmr.earthdata.nasa.gov/stac",
        "https://cmr.earthdata.nasa.gov/cloudstac",
        "https://nasa-iserv.s3-us-west-2.amazonaws.com/catalog/catalog.json",
        "https://cmr.earthdata.nasa.gov/stac",
        "https://raw.githubusercontent.com/scottyhq/sentinel1-rtc-stac/main/collection.json",
        "https://tamn.snapplanet.io",
        "https://earth-search.aws.element84.com/v0/collections/sentinel-s2-l2a",
        "https://stacindex.org/api/proxy?https%3A%2F%2Fmeeo-s5p.s3.amazonaws.com%2Fcatalog.json",
        "https://sentinel-stac.s3.amazonaws.com/catalog.json",
        "https://usgs-lidar-stac.s3-us-west-2.amazonaws.com/ept/catalog.json",
        "https://asc-stacbrowser.s3.us-west-2.amazonaws.com/catalog.json",
        "https://landsatlook.usgs.gov/stac-server",
    ],
    detectLocaleFromBrowser: true,
    storeLocale: true,
    locale: "en",
    fallbackLocale: "en",
    supportedLocales: [
        "de",
//      "de-CH",
        "es",
        "en",
        "fr",
//      "fr-CA",
//      "fr-CH",
        "it",
//      "it-CH",
        "ro"
    ],
    apiCatalogPriority: null,
    useTileLayerAsFallback: true,
    displayGeoTiffByDefault: false,
    buildTileUrlTemplate: ({href, asset}) => "https://tiles.rdnt.io/tiles/{z}/{x}/{y}@2x?url=" + encodeURIComponent(asset.href.startsWith("/vsi") ? asset.href : href),
    stacProxyUrl: null,
    pathPrefix: "/",
    historyMode: "history",
    cardViewMode: "cards",
    cardViewSort: "asc",
    showThumbnailsAsAssets: false,
    showKeywordsInItemCards: true,
    showKeywordsInCatalogCards: true,
    stacLint: true,
    geoTiffResolution: 128,
    redirectLegacyUrls: false,
    itemsPerPage: 12,
    defaultThumbnailSize: null,
    maxPreviewsOnMap: 50,
    crossOriginMedia: null,
    requestHeaders: {},
    requestQueryParameters: {},
    preprocessSTAC: null,
    authConfig: null,
    preprocessSTAC: (stac, state) => {
        if (stac.getBrowserPath() === '/external/stac.asf.alaska.edu/') {
            stac.title = 'Alaska Satellite Facility'
            stac.description = 'The Alaska Satellite Facility is part of the Geophysical Institute of the University of Alaska Fairbanks, located on the Troth Yeddha’ campus.';
        } else if (stac.getBrowserPath() === '/external/landsatlook.usgs.gov/stac-server/') {
            stac.title = 'USGS Landsat Collection 2 data'
            stac.description = 'LandsatLook is a tool that allows rapid online viewing and access to the USGS Landsat Collection 2 data. LandsatLook leverages resources available via a commercial cloud environment including Cloud Optimized GeoTIFF (COG) and Spatio Temporal Asset Catalog (STAC) metadata.';
        } else if (stac.getBrowserPath() === '/external/data-algeohub.opendata.arcgis.com/api/search/v1/collections/dataset') {
            stac.title = 'Alabama'
        }  else if (stac.getBrowserPath() === '/external/azgeo-data-hub-agic.hub.arcgis.com/api/search/v1/collections/dataset') {
            stac.title = 'Arizona'
        }  else if (stac.getBrowserPath() === '/external/gis.data.ca.gov/api/search/v1/collections/dataset') {
            stac.title = 'California'
        }  else if (stac.getBrowserPath() === '/external/ct-deep-gis-open-data-website-ctdeep.hub.arcgis.com/api/search/v1/collections/dataset') {
            stac.title = 'Connecticut'
        }  else if (stac.getBrowserPath() === '/external/geodata.floridagio.gov/api/search/v1/collections/dataset') {
            stac.title = 'Florida'
        }  else if (stac.getBrowserPath() === '/external/data-hub.gio.georgia.gov/api/search/v1/collections/dataset') {
            stac.title = 'Georgia'
        }  else if (stac.getBrowserPath() === '/external/geoportal.hawaii.gov/api/search/v1/collections/dataset') {
            stac.title = 'Hawaii'
        }  else if (stac.getBrowserPath() === '/external/gis-idaho.hub.arcgis.com/api/search/v1/collections/dataset') {
            stac.title = 'Idaho'
        }  else if (stac.getBrowserPath() === '/external/www.indianamap.org/api/search/v1/collections/dataset') {
            stac.title = 'Indiana'
        }  else if (stac.getBrowserPath() === '/external/data.imap.maryland.gov/api/search/v1/collections/dataset') {
            stac.title = 'Maryland'
        }  else if (stac.getBrowserPath() === '/external/gis-michigan.opendata.arcgis.com/api/search/v1/collections/dataset') {
            stac.title = 'Michigan'
        }  else if (stac.getBrowserPath() === '/external/opendata.gis.ms.gov/api/search/v1/collections/dataset') {
            stac.title = 'Mississippi'
        }  else if (stac.getBrowserPath() === '/external/data-msdis.opendata.arcgis.com/api/search/v1/collections/dataset') {
            stac.title = 'Missouri'
        }  else if (stac.getBrowserPath() === '/external/map-nebraska.hub.arcgis.com/api/search/v1/collections/dataset') {
            stac.title = 'Nebraska'
        }  else if (stac.getBrowserPath() === '/external/www.nhgeodata.unh.edu/api/search/v1/collections/dataset') {
            stac.title = 'New Hampshire'
        }  else if (stac.getBrowserPath() === '/external/data-nmenv.opendata.arcgis.com/api/search/v1/collections/dataset') {
            stac.title = 'New Mexico'
        }  else if (stac.getBrowserPath() === '/external/data.gis.ny.gov/api/search/v1/collections/dataset') {
            stac.title = 'New York'
        }  else if (stac.getBrowserPath() === '/external/www.nconemap.gov/api/search/v1/collections/dataset') {
            stac.title = 'North Carolina'
        }  else if (stac.getBrowserPath() === '/external/gishubdata-ndgov.hub.arcgis.com/api/search/v1/collections/dataset') {
            stac.title = 'North Dakota'
        }  else if (stac.getBrowserPath() === '/external/csagis-uok.opendata.arcgis.com/api/search/v1/collections/dataset') {
            stac.title = 'Oklahoma'
        }  else if (stac.getBrowserPath() === '/external/geohub.oregon.gov/api/search/v1/collections/dataset') {
            stac.title = 'Oregon'
        }  else if (stac.getBrowserPath() === '/external/www.rigis.org/api/search/v1/collections/dataset') {
            stac.title = 'Rhode Island'
        }  else if (stac.getBrowserPath() === '/external/data-scdnr.opendata.arcgis.com/api/search/v1/collections/dataset') {
            stac.title = 'South Carolina'
        }  else if (stac.getBrowserPath() === '/external/opendata2017-09-18t192802468z-sdbit.opendata.arcgis.com/api/search/v1/collections/dataset') {
            stac.title = 'South Dakota'
        }  else if (stac.getBrowserPath() === '/external/tn-tnmap.opendata.arcgis.com/api/search/v1/collections/dataset') {
            stac.title = 'Tennessee'
        }  else if (stac.getBrowserPath() === '/external/geodata.vermont.gov/api/search/v1/collections/dataset') {
            stac.title = 'Vermont'
        }  else if (stac.getBrowserPath() === '/external/geo.wa.gov/api/search/v1/collections/dataset') {
            stac.title = 'Washington'
        }  else if (stac.getBrowserPath() === '/external/data-wi-dnr.opendata.arcgis.com/api/search/v1/collections/dataset') {
            stac.title = 'Wisconsin'
        }  else if (stac.getBrowserPath() === '/external/data.geospatialhub.org/api/search/v1/collections/dataset') {
            stac.title = 'Wyoming'
        }  else if (stac.getBrowserPath() === '/external/data-algeohub.opendata.arcgis.com/api/search/v1/collections/dataset') {
            stac.title = 'Alabama'
        }  else if (stac.getBrowserPath() === '/external/data-algeohub.opendata.arcgis.com/api/search/v1/collections/dataset') {
            stac.title = 'Alabama'
        }  else if (stac.getBrowserPath() === '/external/data-algeohub.opendata.arcgis.com/api/search/v1/collections/dataset') {
            stac.title = 'Alabama'
        }
        return stac;
    }
};
