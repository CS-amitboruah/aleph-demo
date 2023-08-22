import fs from 'fs';
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
) {
    console.log("I am here");

    try {
        const body = await req.json();
        console.log(body);
        let data: any = [];
        data.push(body);
        console.log(data, "temp");

        // const { title, description } = body;
        const templateJson = fs.existsSync(
            `./usersData.json`
        );
        if (templateJson === false) {
            fs.writeFileSync(
                `./userData.json`,
                JSON.stringify({
                    data: data
                })
            );
        }
        else {
            const templateJson = fs.readFileSync(
                `./users
                Data.json`
            );
            // if (typeof templateJson === "object") {
            //     // const template0 = JSON.parse(templateJson).template0;
            //     // const template1 =
            //     //     responseFromScanFingerperint.data.FingerprintTemplate
            //     //         .template0;
            //     // const template_image0 =
            //     //     JSON.parse(templateJson).template_image0;
            //     // const template_image1 =
            //     //     responseFromScanFingerperint.data.FingerprintTemplate
            //     //         .template_image0;

            //     fs.writeFileSync(
            //         `./userData.json`,
            //         JSON.stringify({
            //             data: body
            //         })
            //     );
            // }
        }

        return NextResponse.json(body);
        // const product = await prismadb.product.create({
        //     data: {
        //         title,
        //         description
        //     }
        // });

        // return NextResponse.json(product);

    } catch (error) {

        console.log("[PRODUCT_POST]", error);
        return new NextResponse("Internal error", { status: 500 });

    }
}