import fs from "fs";
import { StatusCodes } from "http-status-codes";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const templateJson = fs.existsSync(`./data.json`);

    if (templateJson === true) {
      let readTemplateJson = fs.readFileSync(`./data.json`);
      const data = await req.json();

      // Parse the JSON string
      let jsonData = JSON.parse(readTemplateJson.toString());

      let getData = jsonData.data.filter((name: any) => name.name === data);

      return NextResponse.json({
        data: getData?.[0],
      });
    } else {
      return NextResponse.json({
        message: "No data found",
        status: StatusCodes.NOT_FOUND,
      });
    }
  } catch (error) {
    return new NextResponse("Internal server error", {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
}
