import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabaseClient";

// Define the type for the expected request payload
type ContactMessage = {
  firstName: string; // Added expected fields for type safety
  lastName: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    // Parse and type the incoming request body
    // This ensures `values` conforms to the `ContactMessage` structure
    const values: ContactMessage = await request.json();

    // Insert data into Supabase
    const { data, error } = await supabase
      .from("contactMessages")
      .insert([values]); // Wrapped `values` in an array for single insertion

    // Handle any errors returned by Supabase
    if (error) {
      return NextResponse.json(
        { success: false, error: error.message }, // Ensure error.message exists
        { status: 500 }
      );
    }

    // Return success response with the inserted data
    return NextResponse.json({ success: true, data });
  } catch (error) {
    // Narrow the type of the error using `instanceof` to ensure it has a `message`
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: error.message }, // Return error.message if available
        { status: 500 }
      );
    }

    // Fallback for unexpected error types (non-Error objects)
    return NextResponse.json(
      { success: false, error: "An unknown error occurred." },
      { status: 500 }
    );
  }
}
