import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
/*
rl.question('数値を入力してください', (line) => {
    //const num : number = Number(line);
    //console.log(num + 1000);
    const bNum : BigInt = BigInt(line);
    console.log(bNum);
    rl.close();
});
rl.question('文字列を入力してください', (line) => {
    console.log(`${line}が入力されました`);
    rl.close();
})
*/
const secret = process.env.SECRET ?? "default";
console.log(`secretは${secret}です`);
