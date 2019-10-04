# chrome-random-newtab

A new tab override page extension for Google Chrome.

Forked from [jimschubert/chrome-random-newtab](https://github.com/jimschubert/chrome-random-newtab).


## Local Testing

You can install this extension with the following steps:

1. Clone the project `git clone https://github.com/KevinBulme/chrome-random-newtab.git` or downlad the zip from GitHub UI
2. navigate to `chrome://extensions/`  
3. check `Developer mode`  
4. Click `Load Unpacked Extension...`  
5. Select the directory from step 1
6. Uncheck `Developer mode`

## Can you highlight or remove the url from the address bar?

No. The only way to load a url like `chrome://apps` as a new tab replacement is to execute this JavaScript code:

```
chrome.tabs.update({ url: "chrome://apps", highlighted: true });
```

By doing this, Chrome will set an address in the address bar. Extensions don't have permissions to highlight/remove/modify that address. Sorry. Use <kbd>CTRL</kbd>+<kbd>L</kbd> and start typing.

## How do I modify the options?

- There is an interface for modifying the URLs, and to randomize the order .
- You can also modify the defaults URLs from the js code, in that case make sure URLs are always wrapped in double quotes (`""`) and all but the last URL is followed by a comma.

# License

[MIT License](http://bit.ly/mit-license)  
