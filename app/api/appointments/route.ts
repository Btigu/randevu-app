import { NextResponse } from "next/server";
import fs from "fs";

const filePath = "data.json";

export async function POST(req: Request) {
const body = await req.json();

const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

const exists = data.find(
(a: any) => a.date === body.date && a.time === body.time
);

if (exists) {
return NextResponse.json(
{ error: "Bu saat dolu" },
{ status: 400 }
);
}

data.push(body);

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

return NextResponse.json({
message: "Kaydedildi",
});
}
