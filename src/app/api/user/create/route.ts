import fs from 'fs';
import { StatusCodes } from 'http-status-codes';
import { NextResponse } from 'next/server';
import { APIConstant } from '../../../../constants/contants';

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
        message: APIConstant.success,
        data: body,
      });
    } else {
      throw {
        message: APIConstant.invalidValue,
        status: StatusCodes.BAD_REQUEST,
      };
    }
  } catch (error) {
    console.log('[USER_CREATE]', req);
    return new NextResponse(APIConstant.internalServer, {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
}
