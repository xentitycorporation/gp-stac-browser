cp -fp ./src/index_template.html ./public/index.html
cp -fp ./config.js.template ./config.js
cp -fp ./src/theme/page.scss.template ./src/theme/page.scss

# Default values for local development
endpoint="" # This remains empty for root-relative paths in public/index.html
catalog_endpoint="http://localhost:8080" # This should be an absolute URL for the catalog
support="#"

if [ "$STG_ENV" = "sit" ]; then
    endpoint="https://sit.geoplatform.info"
    catalog_endpoint="https://sit-stac.geoplatform.info"
    support="https://sit-kb.geoplatform.info"
elif [ "$STG_ENV" = "sit-tf" ]; then
    endpoint="https://sit-stac-terraform.geoplatform.info"
    catalog_endpoint="https://sit-stac-terraform.geoplatform.info"
    support="https://sit-kb.geoplatform.info"
elif [ "$STG_ENV" = "stg" ]; then
    endpoint="https://stg.geoplatform.gov"
    catalog_endpoint="https://stg-stac.geoplatform.gov"
    support="https://stg-kb.geoplatform.gov"
elif [ "$STG_ENV" = "prd" ]; then
    endpoint="https://www.geoplatform.gov"
    catalog_endpoint="https://stac.geoplatform.gov"
    support="https://kb.geoplatform.gov"
fi

sed -i "s|#PUBLIC_URL#|${endpoint}|g" ./public/index.html
sed -i "s|#SUPPORT_URL#|${support}|g" ./public/index.html

sed -i "s|#PUBLIC_URL#|${catalog_endpoint}|g" ./config.js
