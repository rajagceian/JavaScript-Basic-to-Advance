/*
deleteProperty trap use karke ek Proxy banao jo kisi bhi property ko delete hone se roke (delete attempt pe warning console mein print ho, lekin property delete na ho):
*/

const config = { theme: "dark", version: 1 };
const protectedConfig = new Proxy(config, {
    deleteProperty(target,prop){
        console.log(`Deletion of ${prop} is not allowed!`);
        return false;
    }
});

delete protectedConfig.theme;
console.log(protectedConfig.theme); // should still be "dark"
console.log(config);
