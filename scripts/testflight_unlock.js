$done({ 
    body: $request.body.replace(/"storefrontId"\s*:\s*".+?"/, '"storefrontId" : "143441-1,29"')
})