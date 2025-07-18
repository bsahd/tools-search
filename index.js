import fs from "fs";
async function main() {
  let outdata = "";
  for (let offset = 0; true; offset += 40) {
    const data = await (
      await fetch(`https://api.scratch.mit.edu/studios/27363929/projects?limit=40&offset=${offset}`)
    ).json();
    console.log(`${offset} items retrieved`);
    for (const element of data) {
      outdata += `${element.id} ${element.username} ${element.title}\n`;
    }
    if (data.length < 40) {
      break;
    }
  }
  fs.writeFileSync("tools", outdata);
}
main();
