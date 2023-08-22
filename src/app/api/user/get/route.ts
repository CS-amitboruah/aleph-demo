import { NextResponse } from "next/server";

export async function GET(
    req: Request,
) {
    console.log("I am here");

    try {

        // const body = await req.json();
        // const { title, description } = body;
        const data = {
            name: "dj"
        };
        return NextResponse.json(data);
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