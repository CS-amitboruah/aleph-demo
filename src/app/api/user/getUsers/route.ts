import fs from 'fs';
import { StatusCodes } from 'http-status-codes';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const templateJson = fs.existsSync(`./data.json`);

    if (templateJson === true) {
      let readTemplateJson = fs.readFileSync(`./data.json`);
      let jsonData = JSON.parse(readTemplateJson.toString());

      return NextResponse.json({
        data: jsonData?.data,
      });
    } else {
      return NextResponse.json({
        message: 'No data found',
        status: StatusCodes.NOT_FOUND,
      });
    }
  } catch (error) {
    console.log('[USER_GET]', error);
    return new NextResponse('Internal server error', {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
}
