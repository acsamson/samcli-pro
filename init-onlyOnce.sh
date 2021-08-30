# below shell code just suitable for mac
echo "installing relies for mac..."
npm i -g xl_close_port
echo "installing mongodb..."
sudo rm -rf /Library/Developer/CommandLineTools
sudo xcode-select --install
brew tap mongodb/brew
brew update && brew tap mongodb/brew && brew install mongodb-community
brew install mongodb-community
brew services start mongodb-community
echo "✅ mongodb has successful installed on your mac, you can type 'mongo' to checkout whather mongodb successful installed"
echo "✅ mongo default Port: 27017, whithout password"
