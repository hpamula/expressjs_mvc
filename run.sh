sudo apt update && sudo apt upgrade -y
sudo apt install -y nodejs npm sqlite3 libsqlite3-dev
npm init -y
npm install express ejs sqlite3 body-parser
npm install --save-dev nodemon

mkdir data

# mkdir -p src/config \
#   src/models \
#   src/services \
#   src/controllers \
#   src/routes \
#   src/views/partials \
#   src/public/css \
#   data
# touch src/server.js \
#   src/config/db.js \
#   src/models/tender.js \
#   src/services/tenderService.js \
#   src/controllers/tenderController.js \
#   src/routes/tenderRoutes.js \
#   src/views/partials/header.ejs \
#   src/views/partials/footer.ejs \
#   src/views/index.ejs \
#   src/views/tenders.ejs \
#   src/views/ended_tenders.ejs \
#   src/views/details.ejs \
#   src/views/add_tender.ejs \
#   src/views/add_offer.ejs \
#   src/public/css/style.css \
#   data/database.sqlite

npm run dev