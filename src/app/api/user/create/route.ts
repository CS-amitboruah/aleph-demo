import fs from "fs";
import { StatusCodes } from "http-status-codes";
import { NextResponse } from "next/server";

function validateObjectValues(obj: Record<string, any>): boolean {
  return Object.values(obj).every((value) => !!value);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (validateObjectValues(body)) {
      const templateJson = fs.existsSync(`./data.json`);
      if (templateJson === false) {
        let data: any = [];
        data.push(body);
        fs.writeFileSync(
          `./data.json`,
          JSON.stringify({
            data: data,
          })
        );
      } else {
        let templateJson = fs.readFileSync(`./data.json`);

        // Parse the JSON string
        let jsonData = JSON.parse(templateJson.toString());

        jsonData?.data.push(body);
        fs.writeFileSync(
          `./data.json`,
          JSON.stringify({
            data: jsonData.data,
          })
        );
      }

      return NextResponse.json({
        message: "Data added successfully",
        data: body,
      });
    } else {
      throw { message: "Invalid values", status: StatusCodes.BAD_REQUEST };
    }
  } catch (error) {
    return new NextResponse("Internal server error", {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
}
