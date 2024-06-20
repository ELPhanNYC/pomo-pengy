rm -r /Users/ethanphan/Code/pomo-pengy/dist
cd pomo-pengy-frontend
ng build --configuration development
mv /Users/ethanphan/Code/pomo-pengy/pomo-pengy-frontend/dist /Users/ethanphan/Code/pomo-pengy/
cd ../
clear
node --trace-warnings server.js
