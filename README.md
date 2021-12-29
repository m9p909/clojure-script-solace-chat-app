This branch switches from using the Solace broker connector to a generic mqtt connection. I hoped to be able to run this on a free broker, but I can't get wss to work with the free moquitto broker. 
### Development mode
```
npm install
npx shadow-cljs watch app
```
start a ClojureScript REPL
```
npx shadow-cljs browser-repl
```
### Building for production

```
npx shadow-cljs release app
```
