/*
Ek Proxy banao jo:
-->Kisi bhi non-existent property access karne pe error throw kare: "Property X doesn't exist"
-->Existing property ka value 2x kar ke return kare agar wo number ho
*/

const data = { score: 50, level: 3 };

const proxyData = new Proxy(data, {
  get(target, prop) {
    if (!(prop in target)) throw new Error(`Property ${prop} doesn't exist`);
    return 2 * target[prop];
  },
});
try {
  console.log(proxyData.score); // should print 100
  console.log(proxyData.wrongProp); // should throw error
} catch (err) {
  console.log("Execution failed : ", err.message);
}
