// import { emaillist} from "@/app/data";
// import { NextRequest } from "next/server";


// type EmailList = Record<string, string>

// const emails: EmailList = {
//     '1': 'john@gmail.com'
// }

// type Params = {
//     id: string;
// }

// export async function GET() {

//   const emails = emaillist
//   return new Response(JSON.stringify(emails), {
//     status: 200,
//   });
// }


// export async function POST(request: NextRequest, { params }: { params: Params }) {
//   const userId = params.id;
//   const body: EmailList = await request.json();
//   const emailId = body.userId;

// //   emails[userId] = emails[userId] ? emails[userId].concat(emailId) : [emailId];
// //   const cartProducts = carts[userId].map(id => products.find(p => p.id === id));
// }