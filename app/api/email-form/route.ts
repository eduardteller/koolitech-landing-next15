import { sendContact } from "@/actions/action";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Define the schema for request validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  school: z.string().min(1, "School name is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().optional(),
  text: z.string().min(1, "Message is required"),
});

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate the request data
    const validatedData = contactSchema.parse(body);

    // Use the existing sendContact function
    const result = await sendContact(validatedData);

    if (result.status) {
      return NextResponse.json(
        {
          message: "Email sent successfully!",
          success: true,
        },
        { status: 200 },
      );
    } else {
      return NextResponse.json(
        {
          message: result.error || "Failed to send email",
          success: false,
        },
        { status: 500 },
      );
    }
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: "Invalid request data",
          errors: error.errors,
          success: false,
        },
        { status: 400 },
      );
    }

    // Handle other errors
    return NextResponse.json(
      {
        message: "Internal server error",
        success: false,
      },
      { status: 500 },
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
